"use client";

import React from "react";
import OrderDetailToken from "@/app/(components)/Cart/OrderDetailToken";

export default function OrderDetailPage() {
    const orderNumber = 14034056;
    const trackingNumber = 51547878755545848512;

    const item = {
        name: "Casual T-Shirt",
        imageUrl: "https://fullyfilmy.in/cdn/shop/products/New-Mockups-models-morattu-single-guy.jpg?v=1608284192",
        price: 25,
        quantity: 2,
        desc: "A comfortable and stylish casual t-shirt.",
        shipAddress: "123 Main St, Springfield, IL, 62701",
        billAddress: "456 Elm St, Springfield, IL, 62702",
        paymentDetails: "Visa **** 1234",
        shippingDetails: "Standard Delivery (3-5 Business Days)",
        subTotal: 50,
        discount: 10,
        shipping: 5,
        total: 45,
    };

    return (
        <div className="w-full px-8 md:px-64 py-32">
            <p className="text-sm text-[#4f3af0]">Thank you!</p>
            <p className="text-3xl">It&#39;s on the way!</p>
            <p>Your order #{orderNumber} has shipped and will be with you soon.</p>
            <p className="py-8">
                Tracking number <br /> <span className="text-[#4f3af0]">{trackingNumber}</span>
            </p>
            <div className=" ">
               <OrderDetailToken item={item} />
            </div>
        </div>
    );
}