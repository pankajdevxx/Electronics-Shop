import json
from django.http import JsonResponse
from django.utils.decorators import method_decorator
from django.views import View
from django.views.decorators.csrf import csrf_exempt
from django.contrib.auth import login, logout, authenticate
from django.contrib.auth.models import User
from django.db import transaction, models
from django.shortcuts import get_object_or_404

from apps.products.models import Product, Category
from apps.cart.models import CartItem
from apps.wishlist.models import WishlistItem
from apps.orders.models import Order, OrderItem
from .serializers import serialize_product, serialize_cart_item, serialize_wishlist_item

# --- Session ID Helper ---
def get_session_key(request):
    """Ensures a session key exists and returns it."""
    if not request.session.session_key:
        request.session.create()
    return request.session.session_key

# --- AUTH API VIEWS ---

@csrf_exempt
def api_login(request):
    if request.method != 'POST':
        return JsonResponse({'error': 'POST method required'}, status=405)
    try:
        data = json.loads(request.body)
        username = data.get('username') or data.get('email') # allow email as username
        password = data.get('password')
        
        # In Django, User email might not match username, so try to resolve email
        if '@' in username:
            try:
                user_obj = User.objects.get(email=username)
                username = user_obj.username
            except User.DoesNotExist:
                pass
                
        user = authenticate(request, username=username, password=password)
        if user is not None:
            login(request, user)
            
            # Sync session-based cart items to user-based cart items
            session_key = get_session_key(request)
            CartItem.objects.filter(session_key=session_key).update(user=user, session_key=None)
            WishlistItem.objects.filter(session_key=session_key).update(user=user, session_key=None)
            
            return JsonResponse({
                'success': True,
                'user': {
                    'username': user.username,
                    'email': user.email,
                    'is_staff': user.is_staff
                }
            })
        else:
            return JsonResponse({'error': 'Invalid credentials'}, status=400)
    except Exception as e:
        return JsonResponse({'error': str(e)}, status=400)

@csrf_exempt
def api_register(request):
    if request.method != 'POST':
        return JsonResponse({'error': 'POST method required'}, status=405)
    try:
        data = json.loads(request.body)
        email = data.get('email')
        password = data.get('password')
        name = data.get('name', '')
        
        if not email or not password:
            return JsonResponse({'error': 'Email and password are required'}, status=400)
            
        username = email.split('@')[0]
        # ensure unique username
        base_username = username
        counter = 1
        while User.objects.filter(username=username).exists():
            username = f"{base_username}{counter}"
            counter += 1
            
        if User.objects.filter(email=email).exists():
            return JsonResponse({'error': 'Email already exists'}, status=400)
            
        user = User.objects.create_user(username=username, email=email, password=password)
        if name:
            first_name = name.split(' ')[0]
            last_name = ' '.join(name.split(' ')[1:]) if len(name.split(' ')) > 1 else ''
            user.first_name = first_name
            user.last_name = last_name
            user.save()
            
        login(request, user)
        return JsonResponse({
            'success': True,
            'user': {
                'username': user.username,
                'email': user.email,
                'is_staff': user.is_staff
            }
        })
    except Exception as e:
        return JsonResponse({'error': str(e)}, status=400)

@csrf_exempt
def api_logout(request):
    logout(request)
    return JsonResponse({'success': True})

# --- PRODUCTS API VIEWS ---

class ProductListView(View):
    def get(self, request):
        category_slug = request.GET.get('category')
        search_query = request.GET.get('search')
        
        products = Product.objects.all()
        
        if category_slug and category_slug != 'all':
            products = products.filter(category__slug=category_slug)
            
        if search_query:
            products = products.filter(
                models.Q(title__icontains=search_query) |
                models.Q(desc__icontains=search_query) |
                models.Q(brand__icontains=search_query) |
                models.Q(tag__icontains=search_query)
            )
            
        serialized = [serialize_product(p) for p in products]
        return JsonResponse(serialized, safe=False)

class ProductDetailView(View):
    def get(self, request, pk):
        product = get_object_or_404(Product, pk=pk)
        return JsonResponse(serialize_product(product))

# --- CART API VIEWS ---

@method_decorator(csrf_exempt, name='dispatch')
class CartView(View):
    def get(self, request):
        if request.user.is_authenticated:
            items = CartItem.objects.filter(user=request.user)
        else:
            session_key = get_session_key(request)
            items = CartItem.objects.filter(session_key=session_key)
            
        serialized = [serialize_cart_item(i) for i in items]
        return JsonResponse(serialized, safe=False)

@method_decorator(csrf_exempt, name='dispatch')
class CartAddView(View):
    def post(self, request):
        try:
            data = json.loads(request.body)
            product_id = data.get('product_id')
            quantity = int(data.get('quantity', 1))
            
            product = get_object_or_404(Product, id=product_id)
            
            if request.user.is_authenticated:
                cart_item, created = CartItem.objects.get_or_create(
                    user=request.user, product=product,
                    defaults={'quantity': quantity}
                )
            else:
                session_key = get_session_key(request)
                cart_item, created = CartItem.objects.get_or_create(
                    session_key=session_key, product=product,
                    defaults={'quantity': quantity}
                )
                
            if not created:
                cart_item.quantity += quantity
                cart_item.save()
                
            return JsonResponse({'success': True, 'item': serialize_cart_item(cart_item)})
        except Exception as e:
            return JsonResponse({'error': str(e)}, status=400)

@method_decorator(csrf_exempt, name='dispatch')
class CartUpdateView(View):
    def post(self, request):
        try:
            data = json.loads(request.body)
            product_id = data.get('product_id')
            quantity = int(data.get('quantity'))
            
            product = get_object_or_404(Product, id=product_id)
            
            if request.user.is_authenticated:
                cart_item = CartItem.objects.get(user=request.user, product=product)
            else:
                session_key = get_session_key(request)
                cart_item = CartItem.objects.get(session_key=session_key, product=product)
                
            cart_item.quantity = quantity
            cart_item.save()
            return JsonResponse({'success': True, 'item': serialize_cart_item(cart_item)})
        except CartItem.DoesNotExist:
            return JsonResponse({'error': 'Cart item not found'}, status=404)
        except Exception as e:
            return JsonResponse({'error': str(e)}, status=400)

@method_decorator(csrf_exempt, name='dispatch')
class CartRemoveView(View):
    def post(self, request):
        try:
            data = json.loads(request.body)
            product_id = data.get('product_id')
            
            product = get_object_or_404(Product, id=product_id)
            
            if request.user.is_authenticated:
                CartItem.objects.filter(user=request.user, product=product).delete()
            else:
                session_key = get_session_key(request)
                CartItem.objects.filter(session_key=session_key, product=product).delete()
                
            return JsonResponse({'success': True})
        except Exception as e:
            return JsonResponse({'error': str(e)}, status=400)

# --- WISHLIST API VIEWS ---

@method_decorator(csrf_exempt, name='dispatch')
class WishlistView(View):
    def get(self, request):
        if request.user.is_authenticated:
            items = WishlistItem.objects.filter(user=request.user)
        else:
            session_key = get_session_key(request)
            items = WishlistItem.objects.filter(session_key=session_key)
            
        serialized = [serialize_wishlist_item(i) for i in items]
        return JsonResponse(serialized, safe=False)

@method_decorator(csrf_exempt, name='dispatch')
class WishlistToggleView(View):
    def post(self, request):
        try:
            data = json.loads(request.body)
            product_id = data.get('product_id')
            
            product = get_object_or_404(Product, id=product_id)
            
            if request.user.is_authenticated:
                wish_item_qs = WishlistItem.objects.filter(user=request.user, product=product)
                if wish_item_qs.exists():
                    wish_item_qs.delete()
                    active = False
                else:
                    WishlistItem.objects.create(user=request.user, product=product)
                    active = True
            else:
                session_key = get_session_key(request)
                wish_item_qs = WishlistItem.objects.filter(session_key=session_key, product=product)
                if wish_item_qs.exists():
                    wish_item_qs.delete()
                    active = False
                else:
                    WishlistItem.objects.create(session_key=session_key, product=product)
                    active = True
                    
            return JsonResponse({'success': True, 'active': active})
        except Exception as e:
            return JsonResponse({'error': str(e)}, status=400)

# --- CHECKOUT API VIEW ---

@method_decorator(csrf_exempt, name='dispatch')
class CheckoutView(View):
    def post(self, request):
        try:
            data = json.loads(request.body)
            full_name = data.get('fullName')
            email = data.get('email')
            phone = data.get('phone')
            address = data.get('address')
            
            if not all([full_name, email, phone, address]):
                return JsonResponse({'error': 'All details (name, email, phone, address) are required'}, status=400)
                
            if request.user.is_authenticated:
                cart_items = CartItem.objects.filter(user=request.user)
            else:
                session_key = get_session_key(request)
                cart_items = CartItem.objects.filter(session_key=session_key)
                
            if not cart_items.exists():
                return JsonResponse({'error': 'Your cart is empty'}, status=400)
                
            with transaction.atomic():
                # Calculate total
                total = sum(item.product.price * item.quantity for item in cart_items)
                
                # Create Order
                order = Order.objects.create(
                    user=request.user if request.user.is_authenticated else None,
                    full_name=full_name,
                    email=email,
                    phone=phone,
                    address=address,
                    total_amount=total
                )
                
                # Create OrderItems
                for item in cart_items:
                    OrderItem.objects.create(
                        order=order,
                        product=item.product,
                        price=item.product.price,
                        quantity=item.quantity
                    )
                    
                # Add Reward points if authenticated
                if request.user.is_authenticated:
                    profile = request.user.profile
                    points_earned = int(total // 100) # 1 point per 100 rupees
                    profile.rewards_points += points_earned
                    profile.save()
                    
                    from apps.rewards.models import Reward
                    Reward.objects.create(
                        user=request.user,
                        points=points_earned,
                        description=f"Points earned on Order #{order.id}"
                    )
                    
                # Clear Cart
                cart_items.delete()
                
            return JsonResponse({'success': True, 'order_id': order.id, 'total': float(total)})
        except Exception as e:
            return JsonResponse({'error': str(e)}, status=400)
