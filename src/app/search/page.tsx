"use client";

import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import products from '@/lib/data';

const SearchPage = () => {
    const searchParams = useSearchParams();
    const query = searchParams.get('q') || '';
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [categories, setCategories] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState('');

    useEffect(() => {
        // Extract unique categories from the product data
        const uniqueCategories = [...new Set(products.map((product) => product.category))];
        setCategories(uniqueCategories);

        // Filter products based on the query and selected category
        const results = products.filter((product) =>
            (product.name.toLowerCase().includes(query.toLowerCase()) ||
                product.category.toLowerCase().includes(query.toLowerCase())) &&
            (!selectedCategory || product.category === selectedCategory)
        );

        setFilteredProducts(results);
    }, [query, selectedCategory]);

    return (
        <div className="container mx-auto flex">
            {/* Categories Sidebar */}
            <aside className="w-40 bg-gray-50 dark:bg-zinc-900 rounded-lg">
                <h2 className="text-[12px] text-gray-400 dark:text-400 mb-2">Collections</h2>
                <ul>
                    <li>
                        <Link className="custom-underline" href="/search">All</Link>
                    </li>
                    {categories.map((category) => (
                        <li key={category} className="capitalize">
                            <Link
                                href={`/search?q=${encodeURIComponent(category)}`}
                                className={`custom-underline text-sm ${
                                    selectedCategory === category ? 'text-blue-600 dark:text-blue-400' : ''
                                }`}
                            >
                                {category}
                            </Link>
                        </li>
                    ))}
                </ul>
            </aside>

            {/* Products Grid */}
            <div className="w-5/6">
                <h1 className="text-2xl font-semibold mb-4">
                    {selectedCategory
                        ? `Products in "${selectedCategory}"`
                        : `Search Results for "${query}"`}
                </h1>
                {filteredProducts.length > 0 ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        {filteredProducts.map((product) => (
                            <div
                                key={product.id}
                                className="relative border rounded-lg shadow-lg bg-white dark:bg-zinc-950 hover:shadow-xl transition-all duration-200 hover:border-blue-500"
                            >
                                {/* Product Image */}
                                <img
                                    src={product.imageUrl}
                                    alt={product.name}
                                    className="w-full h-48 object-cover rounded-t-lg"
                                />

                                {/* Name and Price Container */}
                                <div className="p-4 flex justify-center">
                                    <div className="flex items-center justify-between w-full bg-gray-100 dark:bg-zinc-800 rounded-full px-4 py-2 shadow-md">
                                        <h2 className="text-sm font-medium text-zinc-900 dark:text-zinc-100 truncate">
                                            {product.name}
                                        </h2>
                                        <div className="bg-blue-600 text-white text-sm font-semibold rounded-full px-3 py-1 shadow-sm">
                                            ${product.price.toFixed(2)}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <p className="text-gray-500">No results found for "{query}".</p>
                )}
            </div>
        </div>
    );
};

export default SearchPage;
