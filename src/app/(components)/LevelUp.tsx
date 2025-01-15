import Link from "next/link";
import React from 'react';

export default function LevelUp( props: { heading:string, text:string, buttonText:string, imageLink:string }) {
    return (
        <div className="relative h-cvh bg-cover bg-center m-8 rounded-2xl flex justify-center text-textColor items-center"
             style={{backgroundImage: `url(${props.imageLink})`}}
        >
            <div className="absolute inset-0 bg-black bg-opacity-40 rounded-2xl"></div>
            <div className="relative flex flex-col justify-center items-center text-center">
                <h3 className="text-3xl font-bold text-white">{props.heading}</h3>
                <p className="w-full p-4 md:w-1/2 text-white">
                    {props.text}
                </p>
                <Link
                    href="/workspace"
                    className="p-4 px-8 bg-white rounded-xl text-black text-l w-3/4 md:w-auto"
                >
                    {props.buttonText}
                </Link>
            </div>
        </div>
    );
}