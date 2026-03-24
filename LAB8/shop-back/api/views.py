from django.http import JsonResponse
from .models import Product, Category

# /api/products/
def products_list(request):
    products = Product.objects.all()
    data = [
        {
            "id": p.id,
            "name": p.name,
            "price": p.price,
            "description": p.description,
            "count": p.count,
            "is_active": p.is_active,
            "category_id": p.category.id
        }
        for p in products
    ]
    return JsonResponse(data, safe=False)


# /api/products/<id>/
def product_detail(request, id):
    try:
        p = Product.objects.get(id=id)
        data = {
            "id": p.id,
            "name": p.name,
            "price": p.price,
            "description": p.description,
            "count": p.count,
            "is_active": p.is_active,
            "category_id": p.category.id
        }
        return JsonResponse(data)
    except Product.DoesNotExist:
        return JsonResponse({"error": "Not found"}, status=404)


# /api/categories/
def categories_list(request):
    categories = Category.objects.all()
    data = [{"id": c.id, "name": c.name} for c in categories]
    return JsonResponse(data, safe=False)


# /api/categories/<id>/
def category_detail(request, id):
    try:
        c = Category.objects.get(id=id)
        data = {"id": c.id, "name": c.name}
        return JsonResponse(data)
    except Category.DoesNotExist:
        return JsonResponse({"error": "Not found"}, status=404)


# /api/categories/<id>/products/
def category_products(request, id):
    try:
        category = Category.objects.get(id=id)
        products = category.products.all()
        data = [
            {
                "id": p.id,
                "name": p.name,
                "price": p.price
            }
            for p in products
        ]
        return JsonResponse(data, safe=False)
    except Category.DoesNotExist:
        return JsonResponse({"error": "Not found"}, status=404)