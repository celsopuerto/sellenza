"use client"

import { useParams } from 'next/navigation'
import products from '@/lib/data';

const CategoryPage = () => {
    const params = useParams();
    const category = params.category || '';
    const filteredProducts = products.filter((product) => product.category === category);

    console.log(category)
    console.log(filteredProducts)

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-semibold mb-4">Category: {category}</h1>
            {filteredProducts.length > 0 ? (
                <div className="grid grid-cols-1 sh:grid-cols-2 lg:grid-cols3 gap-4">
                    {filteredProducts.map((product) => (
                        <div key={product.id} className="border p-4 rounded-lg shadow-lg">
                            <img src={product.imageUrl} alt={product.name} className="w-full h-48 object-cover mb-2" />
                            <h2 className="text-lg font-semibold">{product.name}</h2>
                            <p className="text-gray-600">{product.description}</p>
                            <p className="text-lg font-semibold">${product.price.toFixed(2)}</p>
                        </div>
                    ))}
                </div>
            ) : (
                <p className="text-gray-500">No products found in this category.</p>
            )}
        </div>
    )
}

export default CategoryPage;