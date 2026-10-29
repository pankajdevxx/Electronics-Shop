from django.urls import path
from . import views

app_name = 'api'

urlpatterns = [
    # Auth APIs
    path('auth/login/', views.api_login, name='api_login'),
    path('auth/register/', views.api_register, name='api_register'),
    path('auth/logout/', views.api_logout, name='api_logout'),
    
    # Product APIs
    path('products/', views.ProductListView.as_view(), name='product_list'),
    path('products/<int:pk>/', views.ProductDetailView.as_view(), name='product_detail'),
    
    # Cart APIs
    path('cart/', views.CartView.as_view(), name='cart'),
    path('cart/add/', views.CartAddView.as_view(), name='cart_add'),
    path('cart/update/', views.CartUpdateView.as_view(), name='cart_update'),
    path('cart/remove/', views.CartRemoveView.as_view(), name='cart_remove'),
    
    # Wishlist APIs
    path('wishlist/', views.WishlistView.as_view(), name='wishlist'),
    path('wishlist/toggle/', views.WishlistToggleView.as_view(), name='wishlist_toggle'),
    
    # Checkout & Orders APIs
    path('checkout/', views.CheckoutView.as_view(), name='checkout'),
]
