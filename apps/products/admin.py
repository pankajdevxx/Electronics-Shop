from django.contrib import admin
from .models import Category, Product, ProductImage, ProductFeature

class ProductImageInline(admin.TabularInline):
    model = ProductImage
    extra = 1

class ProductFeatureInline(admin.TabularInline):
    model = ProductFeature
    extra = 1

@admin.register(Category)
class CategoryAdmin(admin.ModelAdmin):
    list_display = ('name', 'slug')
    prepopulated_fields = {'slug': ('name',)}

@admin.register(Product)
class ProductAdmin(admin.ModelAdmin):
    list_display = ('title', 'category', 'brand', 'price', 'rating')
    list_filter = ('category', 'brand')
    search_fields = ('title', 'desc', 'brand')
    inlines = [ProductImageInline, ProductFeatureInline]
