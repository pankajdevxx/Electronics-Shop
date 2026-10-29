def serialize_product(product):
    """Serializes a product object into a dictionary for JSON output."""
    images = [img.image if img.image else '' for img in product.images.all()] if hasattr(product, 'images') else []
    if not images and product.image:
        images = [product.image.url if hasattr(product.image, 'url') else product.image]
        
    features = [f.feature for f in product.features.all()] if hasattr(product, 'features') else []
    
    return {
        'id': product.id,
        'title': product.title,
        'brand': product.brand if product.brand else 'Mani Electronices',
        'category': product.category.slug if product.category else 'all',
        'tag': product.tag,
        'price': float(product.price),
        'rating': float(product.rating),
        'reviews': str(product.reviews),
        'image': product.image.url if hasattr(product.image, 'url') else str(product.image),
        'images': images,
        'features': features,
        'desc': product.desc,
    }

def serialize_cart_item(cart_item):
    """Serializes a cart item."""
    return {
        'id': cart_item.id,
        'product': serialize_product(cart_item.product),
        'quantity': cart_item.quantity,
    }

def serialize_wishlist_item(wish_item):
    """Serializes a wishlist item."""
    return {
        'id': wish_item.id,
        'product': serialize_product(wish_item.product),
    }
