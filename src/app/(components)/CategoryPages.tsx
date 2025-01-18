"use client";
import React, { useState } from "react";
import {
    DropdownMenu,
    DropdownMenuTrigger,
    DropdownMenuContent,
    DropdownMenuCheckboxItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import Image from "next/image";
import { X } from 'lucide-react';

type FilterOptions = {
    categories: string[];
    colors: string[];
    sizes: string[];
};

const initialFilterOptions: FilterOptions = {
    categories: [],
    colors: [],
    sizes: [],
};

const products = [
    { id: 1, name: "Earthen Bottle", category: "Objects", color: "Beige", size: "M", price: 20, rating: 4.5, popularity: 156, dateAdded: "2024-01-15", imageLink: "https://tailwindui.com/plus/img/ecommerce-images/home-page-02-product-02.jpg" },
    { id: 2, name: "Nomad Tumbler", category: "Objects", color: "Blue", size: "L", price: 25, rating: 4.8, popularity: 230, dateAdded: "2024-01-16", imageLink: "https://tailwindui.com/plus/img/ecommerce-images/home-page-02-product-02.jpg" },
    { id: 3, name: "Focus Paper Refill", category: "Objects", color: "White", size: "S", price: 15, rating: 4.2, popularity: 89, dateAdded: "2024-01-10", imageLink: "https://tailwindui.com/plus/img/ecommerce-images/home-page-02-product-02.jpg" },
    { id: 4, name: "Machined Mechanical Pencil", category: "Objects", color: "Brown", size: "XS", price: 30, rating: 4.6, popularity: 167, dateAdded: "2024-01-17", imageLink: "https://tailwindui.com/plus/img/ecommerce-images/home-page-02-product-02.jpg" },
    { id: 5, name: "Graphic Tee", category: "Tees", color: "Green", size: "XL", price: 35, rating: 4.9, popularity: 345, dateAdded: "2024-01-18", imageLink: "https://tailwindui.com/plus/img/ecommerce-images/home-page-02-product-02.jpg" },
    { id: 6, name: "Earthen Bottle", category: "Objects", color: "Beige", size: "M", price: 20, rating: 4.5, popularity: 156, dateAdded: "2024-01-15", imageLink: "https://tailwindui.com/plus/img/ecommerce-images/home-page-02-product-02.jpg" },
    { id: 7, name: "Nomad Tumbler", category: "Objects", color: "Blue", size: "L", price: 25, rating: 4.8, popularity: 230, dateAdded: "2024-01-16", imageLink: "https://tailwindui.com/plus/img/ecommerce-images/home-page-02-product-02.jpg" },
    { id: 8, name: "Focus Paper Refill", category: "Objects", color: "White", size: "S", price: 15, rating: 4.2, popularity: 89, dateAdded: "2024-01-10", imageLink: "https://tailwindui.com/plus/img/ecommerce-images/home-page-02-product-02.jpg" },
    { id: 9, name: "Machined Mechanical Pencil", category: "Objects", color: "Brown", size: "XS", price: 30, rating: 4.6, popularity: 167, dateAdded: "2024-01-17", imageLink: "https://tailwindui.com/plus/img/ecommerce-images/home-page-02-product-02.jpg" },
    { id: 10, name: "Graphic Tee", category: "Tees", color: "Green", size: "XL", price: 35, rating: 4.9, popularity: 345, dateAdded: "2024-01-18", imageLink: "https://tailwindui.com/plus/img/ecommerce-images/home-page-02-product-02.jpg" },
];

const categories = ["All New Arrivals", "Tees", "Objects", "Sweatshirts", "Pants & Shorts"];
const colors = ["White", "Beige", "Blue", "Brown", "Green", "Purple"];
const sizes = ["XS", "S", "M", "L", "XL", "2XL"];
const sortOptions = [
    "Most Popular",
    "Best Rating",
    "Newest",
    "Price: Low to High",
    "Price: High to Low"
];

export default function CategoryPages() {
    const [filters, setFilters] = useState<FilterOptions>(initialFilterOptions);
    const [sortOption, setSortOption] = useState<string>("");
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleFilter = (type: keyof FilterOptions, value: string) => {
        setFilters((prev) => {
            const current = prev[type];
            const updated = current.includes(value)
                ? current.filter((item) => item !== value)
                : [...current, value];
            return { ...prev, [type]: updated };
        });
    };

    const removeFilter = (type: keyof FilterOptions, value: string) => {
        setFilters((prev) => ({
            ...prev,
            [type]: prev[type].filter((item) => item !== value),
        }));
    };

    const applyFilters = () => {
        let filteredProducts = products;

        // Apply category filters
        if (filters.categories.length && !filters.categories.includes("All New Arrivals")) {
            filteredProducts = filteredProducts.filter((product) =>
                filters.categories.includes(product.category)
            );
        }

        if (filters.colors.length) {
            filteredProducts = filteredProducts.filter((product) =>
                filters.colors.includes(product.color)
            );
        }

        if (filters.sizes.length) {
            filteredProducts = filteredProducts.filter((product) =>
                filters.sizes.includes(product.size)
            );
        }

        if (sortOption) {
            switch (sortOption) {
                case "Most Popular":
                    filteredProducts.sort((a, b) => b.popularity - a.popularity);
                    break;
                case "Best Rating":
                    filteredProducts.sort((a, b) => b.rating - a.rating);
                    break;
                case "Newest":
                    filteredProducts.sort((a, b) =>
                        new Date(b.dateAdded).getTime() - new Date(a.dateAdded).getTime()
                    );
                    break;
                case "Price: Low to High":
                    filteredProducts.sort((a, b) => a.price - b.price);
                    break;
                case "Price: High to Low":
                    filteredProducts.sort((a, b) => b.price - a.price);
                    break;
            }
        }

        return filteredProducts;
    };

    const FilterSection = ({ title, items, filterKey }: { title: string, items: string[], filterKey: keyof FilterOptions }) => (
        <div className="mb-6">
            <h3 className="font-medium mb-2">{title}</h3>
            {items.map((item) => (
                <div key={item} className="flex items-center mb-2">
                    <input
                        type="checkbox"
                        id={`${filterKey}-${item}`}
                        checked={filters[filterKey].includes(item)}
                        onChange={() => toggleFilter(filterKey, item)}
                        className="mr-2"
                    />
                    <label htmlFor={`${filterKey}-${item}`}>{item}</label>
                </div>
            ))}
        </div>
    );

    const filteredProducts = applyFilters();

    return (
        <div className="p-4 md:p-8">
            <div
                className={`fixed inset-y-0 right-0 w-64 bg-white transform transition-transform duration-300 ease-in-out z-40 p-6 overflow-y-auto md:hidden ${
                    isSidebarOpen ? 'translate-x-0' : 'translate-x-full'
                }`}
            >
                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-lg font-semibold">Filters</h2>
                    <button
                        onClick={() => setIsSidebarOpen(false)}
                        className="p-1 hover:bg-gray-100 rounded"
                    >
                        <X size={24} />
                    </button>
                </div>

                <div className="mb-6">
                    <h3 className="font-medium mb-2">Sort By</h3>
                    {sortOptions.map((option) => (
                        <div key={option} className="flex items-center mb-2">
                            <input
                                type="radio"
                                id={option}
                                checked={sortOption === option}
                                onChange={() => setSortOption(option)}
                                className="mr-2"
                            />
                            <label htmlFor={option}>{option}</label>
                        </div>
                    ))}
                </div>

                <FilterSection title="Categories" items={categories} filterKey="categories" />
                <FilterSection title="Colors" items={colors} filterKey="colors" />
                <FilterSection title="Sizes" items={sizes} filterKey="sizes" />
            </div>

            <div className="md:w-1/2">
                <p className="text-2xl font-bold">Workspace sale</p>
                <p className="py-4">Our thoughtfully designed workspace objects are crafted in limited runs. Improve
                    your productivity and organization with these sale items before we run out.</p>
            </div>

            <div className="hidden md:flex justify-between">
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <button className="px-4 py-2 text-black rounded">
                            Sort
                        </button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="w-56">
                        <DropdownMenuLabel>Sort By</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        {sortOptions.map((option) => (
                            <DropdownMenuCheckboxItem
                                key={option}
                                checked={sortOption === option}
                                onCheckedChange={() => setSortOption(option)}
                            >
                                {option}
                            </DropdownMenuCheckboxItem>
                        ))}
                    </DropdownMenuContent>
                </DropdownMenu>

                <div>
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <button className="px-4 py-2 text-black rounded">
                                Category
                            </button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent className="w-56">
                            <DropdownMenuLabel>Select Category</DropdownMenuLabel>
                            <DropdownMenuSeparator />
                            {categories.map((category) => (
                                <DropdownMenuCheckboxItem
                                    key={category}
                                    checked={filters.categories.includes(category)}
                                    onCheckedChange={() => toggleFilter("categories", category)}
                                >
                                    {category}
                                </DropdownMenuCheckboxItem>
                            ))}
                        </DropdownMenuContent>
                    </DropdownMenu>
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <button className="px-4 py-2 text-black rounded border-l-2">
                                Color
                            </button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent className="w-56">
                            <DropdownMenuLabel>Select Color</DropdownMenuLabel>
                            <DropdownMenuSeparator />
                            {colors.map((color) => (
                                <DropdownMenuCheckboxItem
                                    key={color}
                                    checked={filters.colors.includes(color)}
                                    onCheckedChange={() => toggleFilter("colors", color)}
                                >
                                    {color}
                                </DropdownMenuCheckboxItem>
                            ))}
                        </DropdownMenuContent>
                    </DropdownMenu>
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <button className="px-4 py-2 text-black rounded border-l-2">
                                Sizes
                            </button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent className="w-56">
                            <DropdownMenuLabel>Select Size</DropdownMenuLabel>
                            <DropdownMenuSeparator />
                            {sizes.map((size) => (
                                <DropdownMenuCheckboxItem
                                    key={size}
                                    checked={filters.sizes.includes(size)}
                                    onCheckedChange={() => toggleFilter("sizes", size)}
                                >
                                    {size}
                                </DropdownMenuCheckboxItem>
                            ))}
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
            </div>

            <div className="hidden py-4 bg-gray-100 md:flex flex-wrap items-center px-4 gap-2">
                <p>Filters:</p>
                {Object.entries(filters).map(([key, values]) =>
                    values.map((value) => (
                        <div
                            key={`${key}-${value}`}
                            className="flex items-center px-2 py-1 bg-gray-200 rounded text-sm"
                        >
                            <span>{value}</span>
                            <button
                                className="ml-2"
                                onClick={() => removeFilter(key as keyof FilterOptions, value)}
                            >
                                ×
                            </button>
                        </div>
                    ))
                )}
            </div>

            {!isSidebarOpen && (
                <button
                    className="md:hidden fixed top-100 right-4 z-50 p-2 bg-white rounded-full shadow-lg"
                    onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                >
                    Filters
                </button>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 py-8 bg-[#f9fafc]">
                {filteredProducts.map((product) => (
                    <div key={product.id} className="rounded-lg flex flex-col items-center p-4">
                        <div className="relative w-full h-40 flex justify-center items-center">
                            <Image
                                src={product.imageLink}
                                alt={product.name}
                                width={150}
                                height={100}
                                className="object-contain rounded-xl"
                            />
                        </div>
                        <div className="mt-4 flex flex-col items-start w-full">
                            <p className="text-gray-500 text-sm">{product.name}</p>
                            <p className="font-bold text-lg">${product.price}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}