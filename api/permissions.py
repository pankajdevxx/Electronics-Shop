from django.http import JsonResponse
from functools import wraps

def login_required_api(view_func):
    """Decorator to ensure user is logged in for API endpoints."""
    @wraps(view_func)
    def _wrapped_view(request, *args, **kwargs):
        if not request.user.is_authenticated:
            return JsonResponse({'error': 'Authentication required'}, status=401)
        return view_func(request, *args, **kwargs)
    return _wrapped_view

def admin_required_api(view_func):
    """Decorator to ensure user is an admin for API endpoints."""
    @wraps(view_func)
    def _wrapped_view(request, *args, **kwargs):
        if not request.user.is_authenticated or not request.user.is_staff:
            return JsonResponse({'error': 'Admin privileges required'}, status=403)
        return view_func(request, *args, **kwargs)
    return _wrapped_view
