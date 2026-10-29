from django.db import models
from django.contrib.auth.models import User
from apps.products.models import Product

class WishlistItem(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='wishlist_items', null=True, blank=True)
    session_key = models.CharField(max_length=40, null=True, blank=True, db_index=True)
    product = models.ForeignKey(Product, on_delete=models.CASCADE)
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        unique_together = ('user', 'product', 'session_key')

    def __str__(self):
        owner = self.user.username if self.user else f"Session {self.session_key}"
        return f"{owner} - {self.product.title}"
