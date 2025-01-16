"use client"
import CartToken from "@/app/(components)/Cart/CartToken";
import React from "react";
import Link from "next/link";

export default function CartPage() {
    const [shoppingCart, setShoppingCart] = React.useState([
        {
            id: 1,
            name: "Basic Tee",
            color: "Sienna",
            size: "Large",
            price: 32.0,
            quantity: 1,
            imageUrl:
                "https://fullyfilmy.in/cdn/shop/products/New-Mockups-models-morattu-single-guy.jpg?v=1608284192",
            availability: "In stock",
        },
        {
            id: 2,
            name: "Basic Tee",
            color: "Black",
            size: "Large",
            price: 32.0,
            quantity: 1,
            imageUrl:
                "https://fullyfilmy.in/cdn/shop/products/New-Mockups-models-morattu-single-guy.jpg?v=1608284192",
            availability: "Ships in 3–4 weeks",
        },
        {
            id: 3,
            name: "Nomad Tumbler",
            color: "White",
            size: "Large", // Updated to a valid size
            price: 35.0,
            quantity: 1,
            imageUrl:
                "https://fullyfilmy.in/cdn/shop/products/New-Mockups-models-morattu-single-guy.jpg?v=1608284192",
            availability: "In stock",
        },
    ]);
    console.log(shoppingCart[0].quantity);
    const totalSum = 0;
    const shipEst = 0;
    const taxEst = 0;
    const Ordertot = 0;
    const handleQuantityChange = (id: number, newQuantity: number) => {
        setShoppingCart((prevCart) =>
            prevCart.map((item) =>
                item.id === id ? {...item, quantity: newQuantity} : item
            )
        );
    };

    return (
        <div className="md:flex items-center">
            <div className="flex-row md:w-2/3">
                <div className="border-b-gray-400 border-b-2 m-8 pb-8 mb-0">
                    <h1 className="text-3xl font-bold">Shopping Cart</h1>
                </div>
                <div className="w-full md:w-3/4 p-8 pt-0">
                    {shoppingCart.map((item) => (
                        <CartToken
                            key={item.id}
                            name={item.name}
                            color={item.color}
                            size={item.size}
                            price={item.price}
                            quantity={item.quantity}
                            imageLink={item.imageUrl}
                            availability={item.availability}
                            onQuantityChange={(newQuantity) =>
                                handleQuantityChange(item.id, newQuantity)
                            }
                            onRemove={() => {
                            }}
                        />
                    ))}
                </div>
            </div>
            <div className="flex-row items-start h-screen md:py-24 md:w-1/2 p-8 ">
                <div className="bg-[#f9fafc] p-8 md:w-3/4 rounded-2xl">
                    <h1 className="text-xl font-medium p-4 pl-0 w-1/2">Order Summary</h1>
                    <div className="p-4 border-b-2 pl-0 flex justify-between text-center items-center text-sm ">
                        <p>Subtotal </p>
                        <p>${totalSum}</p>
                    </div>
                    <div className="p-4 border-b-2 pl-0 flex justify-between text-center items-center text-sm ">
                        <p>Shipping Estimate </p>
                        <p>${shipEst}</p>
                    </div>
                    <div className="p-4 border-b-2 pl-0 flex justify-between text-center items-center text-sm ">
                        <p>Tax Estimate</p>
                        <p>${taxEst}</p>
                    </div>
                    <div className="p-4 border-b-2 pl-0 flex justify-between text-center items-center text-sm ">
                        <p className="text-xl font-medium">Order Total </p>
                        <p>${Ordertot}</p>
                    </div>
                    <Link href="/api/checkout" ><button className="mt-6 w-full bg-[#4f39f6] text-white py-2 rounded">
                        Checkout
                    </button></Link>
                </div>
            </div>
        </div>
    );
}