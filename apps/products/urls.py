from django.urls import path
from . import views

urlpatterns = [
    # Customer pages
    path('', views.home_view, name='home'),
    path('brands/', views.brands_view, name='brands'),
    path('products/', views.products_view, name='products'),
    path('product/<int:pk>/', views.product_details_view, name='product_details'),
    path('compare/', views.compare_products_view, name='compare_products'),
    path('wishlist/', views.wishlist_view, name='wishlist'),
    path('cart/', views.cart_view, name='cart'),
    path('checkout/', views.checkout_view, name='checkout'),
    path('orders/', views.orders_view, name='orders'),
    path('rewards/', views.rewards_view, name='rewards'),
    path('invoice/<int:order_id>/', views.invoice_view, name='invoice'),

    # Admin Panel pages
    path('admin-panel/dashboard/', views.admin_dashboard_view, name='admin_dashboard'),
    path('admin-panel/products/', views.admin_manage_products_view, name='admin_manage_products'),
    path('admin-panel/orders/', views.admin_manage_orders_view, name='admin_manage_orders'),
    path('admin-panel/users/', views.admin_manage_users_view, name='admin_manage_users'),
    path('admin-panel/inventory/', views.admin_inventory_view, name='admin_inventory'),
    path('admin-panel/analytics/', views.admin_analytics_view, name='admin_analytics'),
    path('admin-panel/coupons/', views.admin_coupons_view, name='admin_coupons'),
    path('admin-panel/reports/', views.admin_reports_view, name='admin_reports'),
]
