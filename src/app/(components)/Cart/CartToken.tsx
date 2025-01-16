import Image from "next/image";
import * as React from "react";

import { Button } from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuRadioGroup,
    DropdownMenuRadioItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function CartToken(props: {
    name: string;
    color: string;
    size: string;
    price: number;
    quantity: number;
    imageLink: string;
    availability: string;
    onQuantityChange: (quantity: number) => void;
    onRemove: () => void;
}) {
    const availabilityIcon =
        props.availability === "In stock"
            ? "https://img.icons8.com/?size=100&id=3061&format=png&color=40C057"
            : "https://img.icons8.com/?size=100&id=10247&format=png&color=4B5563";

    const crossIcon = "https://img.icons8.com/?size=100&id=95834&format=png&color=000000";

    const handleQuantityChange = (newQuantity: string) => {
        props.onQuantityChange(Number(newQuantity));
    };

    return (
        <div className="flex items-start p-6 border-b border-gray-300 md:flex-row sm:flex-col w-full relative justify-center">
            <div className="w-1/3">
                <Image
                    src={props.imageLink}
                    alt={props.name}
                    width={700}
                    height={700}
                    className="rounded-lg border-2 border-gray-200 shadow-md object-cover"
                />
            </div>
            <div className="flex flex-col justify-between w-full pl-6">
                <div className="mb-4">
                    <h2 className="text-xl font-semibold text-gray-800">{props.name}</h2>
                    <p className="text-sm text-gray-500">
                        <span className="font-medium">Color:</span> {props.color} |{" "}
                        <span className="font-medium">Size:</span> {props.size}
                    </p>
                    <p className="mt-2 text-lg font-bold text-gray-700">
                        ${props.price.toFixed(2)}
                    </p>
                </div>
                <div className="flex items-center">
                    <Image
                        src={availabilityIcon}
                        alt="Availability Icon"
                        width={25}
                        height={25}
                    />
                    <p
                        className={`ml-2 text-sm font-medium ${
                            props.availability === "In stock"
                                ? "text-green-600"
                                : "text-gray-600"
                        }`}
                    >
                        {props.availability}
                    </p>
                </div>
            </div>
            <div>
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="outline">{props.quantity}</Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent
                        style={{width: "auto", minWidth: "50px", display: "flex", justifyContent: "flex-start"}}>
                        <DropdownMenuSeparator/>
                        <DropdownMenuRadioGroup value={props.quantity.toString()} onValueChange={handleQuantityChange}>
                            <DropdownMenuRadioItem value="1">1</DropdownMenuRadioItem>
                            <DropdownMenuRadioItem value="2">2</DropdownMenuRadioItem>
                            <DropdownMenuRadioItem value="3">3</DropdownMenuRadioItem>
                        </DropdownMenuRadioGroup>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
            <div className="top-2 right-0 cursor-pointer p-4 pt-2" onClick={props.onRemove}>
                <Image src={crossIcon} alt="Remove" width={20} height={20}/>
            </div>
        </div>
    );
}