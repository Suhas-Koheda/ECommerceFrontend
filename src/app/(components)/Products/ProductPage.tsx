"use client";
import { useState } from "react";
import Image from "next/image";

const ProductCard = () => {
    const [selectedSize, setSelectedSize] = useState("S");

    const sizes = ["XXS", "XS", "S", "M", "L", "XL"];

    return (
        <div className="w-full min-h-screen flex flex-col lg:flex-row p-4">
            <div className="relative w-full lg:w-1/2 h-80 lg:h-auto rounded-2xl overflow-hidden">
                <Image
                    src="https://fullyfilmy.in/cdn/shop/products/New-Mockups-models-morattu-single-guy.jpg?v=1608284192"
                    alt="Basic Tee"
                    layout="fill"
                    objectFit="cover"
                    className="rounded-2xl border-4 border-gray-300"
                />
            </div>
            <div className="w-full lg:w-1/2 flex flex-col p-6">
                <h1 className="text-2xl font-semibold">Basic Tee</h1>
                <p className="text-gray-500 text-sm">3.9 ★★★★★ (512 reviews)</p>
                <p className="text-xl font-bold mt-2">$35</p>

                <div className="mt-4">
                    <div className="flex justify-between">
                        <h2 className="text-lg">Size</h2>
                        <h4 className="text-sm">See sizing chart</h4>
                    </div>
                    <div className="flex gap-2 mt-2">
                        {sizes.map((size) => (
                            <button
                                key={size}
                                onClick={() => setSelectedSize(size)}
                                className={`px-3 py-1 border rounded ${selectedSize === size ? "bg-black text-white" : "bg-white"}`}
                            >
                                {size}
                            </button>
                        ))}
                    </div>
                </div>
                <button className="mt-6 w-full bg-blue-600 text-white py-2 rounded">
                    Add to Cart
                </button>
                <p className="mt-4 text-gray-600">
                    The Basic Tee is an honest new take on a classic. The tee uses super-soft,
                    pre-shrunk cotton for true comfort and a dependable fit. They are hand-cut
                    and sewn locally, with a special dye technique that gives each tee its own look.
                </p>
            </div>
        </div>
    );
};

export default ProductCard;
