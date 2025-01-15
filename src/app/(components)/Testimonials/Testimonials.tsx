import React from "react";
import Image from "next/image";

const Testimonial = (props: {
    imageUrl: string;
    quote: string;
    name: string;
    title: string;
}) => {
    const { imageUrl, quote, name, title } = props;

    return (
        <div className="items-center flex flex-col text-lg font-semibold">
            <p>Testimonials</p>
        <div className="flex flex-col md:flex-row items-center max-w-4xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden rounded-2xl">

            <Image
                src={imageUrl}
                alt={`${name}`}
                width={600}
                height={800}
                className="w-full md:w-1/3 h-96 object-cover p-4 rounded-2xl"
            />
            <div className="p-6 bg-gray-900 text-white flex-1">
                <p className="text-xl md:text-2xl font-medium mb-4">“{quote}”</p>
                <p className="text-lg font-bold">{name}</p>
                <p className="text-sm text-gray-400">{title}</p>
            </div>
        </div>
        </div>
    );
};

export default Testimonial;
