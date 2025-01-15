import ProductToken1 from "@/app/(components)/Products/ProductToken1";
import React from "react";
import ProductToken2 from "@/app/(components)/Products/ProductToken2";
import Link from "next/link";

export default function Product(props: { heading: string; seeAll: string; type: string; products: string[][] }) {
    return (
        <div className="w-full p-8 text-center">
            <div className="flex justify-between items-center px-4">
                <h1 className="text-xl md:text-2xl font-semibold p-2">{props.heading}</h1>
                <Link href={"/categories"} className="text-sm md:text-lg font-semibold p-2 hidden md:block">{props.seeAll}</Link>
            </div>
            <div className="flex flex-col space-y-4 p-2 overflow-x-auto overflow-y-hidden md:w-full md:h-full py-8 no-scrollbar md:flex-row md:space-x-4 md:space-y-0">
                {props.type === "1" && props.products.map(([image, name, price, category, link], index) => (
                    <ProductToken1 key={index} image={image} name={name} price={price} category={category} link={link} />
                ))}
                {props.type === "2" && props.products.map(([image, name, price, category, link], index) => (
                    <ProductToken2 key={index} image={image} name={name} price={price} category={category} link={link} />
                ))}
            </div>
            <div className="block md:hidden p-2">
                <Link href={"/categories"} className="text-sm font-semibold p-2 block md:hidden">Browse all categories</Link>
            </div>
        </div>
    );
}
