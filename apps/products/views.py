from django.shortcuts import render, get_object_or_404
from django.contrib.auth.decorators import login_required
from django.contrib.admin.views.decorators import staff_member_required
from .models import Product, Category
from apps.orders.models import Order
from django.contrib.auth.models import User

# --- CUSTOMER VIEWS ---

def home_view(request):
    """Renders the main homepage (Shop)."""
    return render(request, 'customer/home.html')

def brands_view(request):
    """Renders the brands page."""
    return render(request, 'customer/brands.html')

def products_view(request):
    """Renders the product catalog page."""
    return render(request, 'customer/products.html')

def product_details_view(request, pk):
    """Renders details for a single product."""
    product = get_object_or_404(Product, pk=pk)
    return render(request, 'customer/product_details.html', {'product': product})

def compare_products_view(request):
    """Renders the product comparison page."""
    return render(request, 'customer/compare_products.html')

def wishlist_view(request):
    """Renders the customer wishlist page."""
    return render(request, 'customer/wishlist.html')

def cart_view(request):
    """Renders the customer shopping cart page."""
    return render(request, 'customer/cart.html')

def checkout_view(request):
    """Renders the checkout page."""
    return render(request, 'customer/checkout.html')

def orders_view(request):
    """Renders the customer orders page."""
    return render(request, 'customer/orders.html')

def rewards_view(request):
    """Renders the customer rewards page."""
    return render(request, 'customer/rewards.html')

def invoice_view(request, order_id):
    """Renders the printed invoice for a specific order."""
    order = get_object_or_404(Order, id=order_id)
    return render(request, 'customer/invoice.html', {'order': order})


# --- ADMIN PANEL VIEWS ---

@staff_member_required
def admin_dashboard_view(request):
    """Renders the custom administrative dashboard."""
    users_count = User.objects.count()
    products_count = Product.objects.count()
    orders_count = Order.objects.count()
    context = {
        'users_count': users_count,
        'products_count': products_count,
        'orders_count': orders_count,
    }
    return render(request, 'admin_panel/dashboard.html', context)

@staff_member_required
def admin_manage_products_view(request):
    """Renders the product management table."""
    products = Product.objects.all()
    return render(request, 'admin_panel/manage_products.html', {'products': products})

@staff_member_required
def admin_manage_orders_view(request):
    """Renders the order management table."""
    orders = Order.objects.all().order_by('-created_at')
    return render(request, 'admin_panel/manage_orders.html', {'orders': orders})

@staff_member_required
def admin_manage_users_view(request):
    """Renders the user management table."""
    users = User.objects.all()
    return render(request, 'admin_panel/manage_users.html', {'users': users})

@staff_member_required
def admin_inventory_view(request):
    """Renders the product inventory logs."""
    products = Product.objects.all()
    return render(request, 'admin_panel/inventory.html', {'products': products})

@staff_member_required
def admin_analytics_view(request):
    """Renders the analytics page."""
    return render(request, 'admin_panel/analytics.html')

@staff_member_required
def admin_coupons_view(request):
    """Renders the promo coupons page."""
    return render(request, 'admin_panel/coupons.html')

@staff_member_required
def admin_reports_view(request):
    """Renders the sales & inventory reports page."""
    return render(request, 'admin_panel/reports.html')
