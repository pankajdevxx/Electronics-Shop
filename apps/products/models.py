from django.db import models

class Category(models.Model):
    name = models.CharField(max_length=100)
    slug = models.SlugField(max_length=100, unique=True)

    class Meta:
        verbose_name_plural = "Categories"

    def __str__(self):
        return self.name

class Product(models.Model):
    title = models.CharField(max_length=200)
    brand = models.CharField(max_length=100, blank=True, null=True, default="Mani Electronices")
    category = models.ForeignKey(Category, on_delete=models.CASCADE, related_name='products')
    tag = models.CharField(max_length=50, blank=True, null=True)
    price = models.DecimalField(max_digits=10, decimal_places=2)
    rating = models.DecimalField(max_digits=3, decimal_places=2, default=5.0)
    reviews = models.CharField(max_length=50, default="0")
    image = models.TextField(blank=True, null=True, help_text="Image URL or filename")
    desc = models.TextField(blank=True, null=True)

    def __str__(self):
        return self.title

class ProductImage(models.Model):
    product = models.ForeignKey(Product, on_delete=models.CASCADE, related_name='images')
    image = models.TextField(help_text="Image URL")

    def __str__(self):
        return f"{self.product.title} - Image"

class ProductFeature(models.Model):
    product = models.ForeignKey(Product, on_delete=models.CASCADE, related_name='features')
    feature = models.CharField(max_length=250)

    def __str__(self):
        return f"{self.product.title} - Feature"
