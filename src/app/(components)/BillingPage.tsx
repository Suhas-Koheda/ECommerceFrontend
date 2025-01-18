"use client";
import React, { useState } from "react";
import Image from "next/image";

export default function BillingPage (){
    const [sameAsShipping, setSameAsShipping] = useState(false);

    const orderItems = [
        {
            name: "Micro Backpack",
            description: "Moss, 5L",
            price: 70.0,
            image: "https://fullyfilmy.in/cdn/shop/products/New-Mockups-models-morattu-single-guy.jpg?v=1608284192",
        },
        {
            name: "Small Stuff Satchel",
            description: "Sand, 18L",
            price: 180.0,
            image: "https://fullyfilmy.in/cdn/shop/products/New-Mockups-models-morattu-single-guy.jpg?v=1608284192",
        },
        {
            name: "Carry Clutch",
            description: "White and Black, Small",
            price: 70.0,
            image: "https://fullyfilmy.in/cdn/shop/products/New-Mockups-models-morattu-single-guy.jpg?v=1608284192",
        },
    ];

    const shippingCost = 5.0;
    const taxRate = 0.08; // 8% tax rate

    const subtotal = orderItems.reduce((total, item) => total + item.price, 0);
    const taxes = subtotal * taxRate;
    const total = subtotal + shippingCost + taxes;

    return (
        <div className="min-h-screen bg-gray-50">
            <div className="max-w-7xl mx-auto py-12 px-6">
                <h1 className="text-2xl font-semibold mb-8 py-4 px-6">Contact Information</h1>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    <div className="lg:col-span-2 bg-white p-6 rounded-lg shadow-sm">
                        <form className="space-y-6">
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                    Email address
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    className="mt-1 block w-full border-gray-400 border-2 p-3 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                                />
                            </div>

                            <div>
                                <h2 className="text-lg font-medium text-gray-900 py-4">User details</h2>
                                <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div>
                                        <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">
                                            First Name
                                        </label>
                                        <input
                                            type="text"
                                            id="first-name"
                                            className="mt-1 block w-full border-gray-400 border-2 p-3 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">
                                            Last Name
                                        </label>
                                        <input
                                            type="text"
                                            id="last-name"
                                            className="mt-1 block w-full border-gray-400 border-2 p-3 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                                            Phone Number
                                        </label>
                                        <div className="flex items-center mt-1">
                                            <Image
                                                src="https://upload.wikimedia.org/wikipedia/en/thumb/4/41/Flag_of_India.svg/32px-Flag_of_India.svg.png"
                                                alt="India Flag"
                                                width={24}
                                                height={16}
                                                className="mr-2"
                                            />
                                            <span className="text-gray-700 mr-2">+91</span>
                                            <input
                                                type="text"
                                                id="phone"
                                                className="block w-full border-gray-400 border-2 p-3 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <h2 className="text-lg font-medium text-gray-900 py-4">Shipping address</h2>
                                <div className="mt-4 space-y-4">
                                    <input
                                        type="text"
                                        className="block w-full border-gray-400 border-2 p-3 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                                        placeholder="Company"
                                    />
                                    <input
                                        type="text"
                                        className="block w-full border-gray-400 border-2 p-3 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                                        placeholder="Address"
                                    />
                                    <input
                                        type="text"
                                        className="block w-full border-gray-400 border-2 p-3 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                                        placeholder="Apartment, suite, etc."
                                    />
                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                        <input
                                            type="text"
                                            className="block w-full border-gray-400 border-2 p-3 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                                            placeholder="Postal code"
                                        />
                                        <input
                                            type="text"
                                            className="block w-full border-gray-400 border-2 p-3 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                                            placeholder="City"
                                        />
                                        <input
                                            type="text"
                                            className="block w-full border-gray-400 border-2 p-3 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                                            placeholder="State/Province"
                                        />
                                        <input
                                            type="text"
                                            className="block w-full border-gray-400 border-2 p-3 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                                            placeholder="Country"
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="flex items-center">
                                <input
                                    id="same-as-shipping"
                                    type="checkbox"
                                    className="h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
                                    checked={sameAsShipping}
                                    onChange={() => setSameAsShipping(!sameAsShipping)}
                                />
                                <label htmlFor="same-as-shipping" className="ml-2 text-sm text-gray-900">
                                    Same as shipping information
                                </label>
                            </div>
                            <div className="flex items-center justify-between border-t-2 py-4">
                                <p className="text-sm text-gray-500">
                                    You won&#39;t be charged until the next step.
                                </p>
                                <button
                                    type="submit"
                                    className="w-1/8 bg-indigo-600 text-white py-2 px-4 rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                >
                                    Continue
                                </button>
                            </div>
                        </form>
                    </div>

                    <div className="bg-white p-6 rounded-lg shadow-sm">
                        <h2 className="text-lg font-medium text-gray-900 py-4">Order summary</h2>
                        <ul className="mt-4 space-y-4">
                            {orderItems.map((item, index) => (
                                <li key={index} className="flex justify-between text-center items-center border-b-2 py-4">
                                    <Image
                                        src={item.image}
                                        alt={item.name}
                                        width={48}
                                        height={48}
                                        className="rounded-md object-cover"
                                    />
                                    <div>
                                        <p className="text-sm font-medium text-gray-900">{item.name}</p>
                                        <p className="text-sm text-gray-500">{item.description}</p>
                                    </div>
                                    <p className="text-sm font-medium text-gray-900">${item.price.toFixed(2)}</p>
                                </li>
                            ))}
                        </ul>
                        <div className="mt-6 space-y-4">
                            <div className="flex justify-between">
                                <p className="text-sm text-gray-500">Subtotal</p>
                                <p className="text-sm text-gray-900">${subtotal.toFixed(2)}</p>
                            </div>
                            <div className="flex justify-between">
                                <p className="text-sm text-gray-500">Shipping</p>
                                <p className="text-sm text-gray-900">${shippingCost.toFixed(2)}</p>
                            </div>
                            <div className="flex justify-between">
                                <p className="text-sm text-gray-500">Taxes</p>
                                <p className="text-sm text-gray-900">${taxes.toFixed(2)}</p>
                            </div>
                            <div className="flex justify-between font-medium text-gray-900 border-t-2 py-2">
                                <p>Total</p>
                                <p>${total.toFixed(2)}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};