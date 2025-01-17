import Image from "next/image";
import React from "react";

export default function OrderDetailToken({
                                             item,
                                         }: {
    item: {
        name: string;
        imageUrl: string;
        price: number;
        quantity: number;
        desc: string;
        shipAddress: string;
        billAddress: string;
        paymentDetails: string;
        shippingDetails: string;
        subTotal: number;
        discount: number;
        shipping: number;
        total: number;
    };
}) {
    return (
        <div className="w-full">
            <div className="flex w-full border-y-2 py-8">
                <Image
                    src={item.imageUrl}
                    alt={`Image of ${item.name}`}
                    width={130}
                    height={100}
                    className="rounded-xl"
                />
                <div className="flex flex-col w-full px-8 justify-between">
                    <div className="felx flex-col">
                        <p>{item.name}</p>
                        <p>{item.desc}</p>
                    </div>
                    <div className="flex justify-between w-1/2">
                        <p>
                            <span className="font-semibold">Quantity:</span> {item.quantity}
                        </p>
                        <p>
                            <span className="font-semibold">Price:</span> ${item.price}
                        </p>
                    </div>
                </div>
            </div>
            <div className="flex flex-col text-center items-center justify-end w-full py-4">
                <div className="py-4">
                    <div className="flex w-full justify-end">
                        <div className="flex flex-col w-full md:px-40 justify-between">
                            <p>Shipping address</p>
                            <p>{item.shipAddress}</p>
                        </div>
                        <div className="flex flex-col w-full md:px-40 justify-between">
                            <p>Billing address</p>
                            <p>{item.billAddress}</p>
                        </div>
                    </div>
                </div>
                <div className="py-4">
                    <div className="flex w-full">
                        <div className="flex flex-col w-full md:px-40 justify-between">
                            <p>Payment details</p>
                            <p>{item.paymentDetails}</p>
                        </div>
                        <div className="flex flex-col w-full md:px-40 justify-between">
                            <p>Shipping method</p>
                            <p>{item.shippingDetails}</p>
                        </div>
                    </div>
                </div>
                <div className="w-full flex justify-center px-8 py-4">
                    <div className="p-8 w-full md:w-3/4 rounded-2xl">
                        <div className="p-4 border-b-2 pl-0 flex justify-between text-center items-center text-sm ">
                            <p>Subtotal </p>
                            <p>${item.subTotal}</p>
                        </div>
                        <div className="p-4 border-b-2 pl-0 flex justify-between text-center items-center text-sm ">
                            <p>Discount <span className="p-1 bg-gray-300 rounded-xl font-light">STUDENT50</span></p>
                            <p>${item.discount}</p>
                        </div>
                        <div className="p-4 border-b-2 pl-0 flex justify-between text-center items-center text-sm ">
                            <p>Shipping</p>
                            <p>${item.shipping}</p>
                        </div>
                        <div className="p-4 border-b-2 pl-0 flex justify-between text-center items-center text-sm ">
                            <p className="text-xl font-medium">Total </p>
                            <p>${item.total}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
