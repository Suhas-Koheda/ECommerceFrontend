"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";

const TestimonialCarousel = ({ testimonials }: { testimonials: Array<{ imageUrl: string, quote: string, name: string, title: string }> }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextIndex = (currentIndex + 1) % testimonials.length;

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex(nextIndex);
        }, 5000); // 5000ms = 5 seconds

        return () => clearInterval(interval);
    }, [currentIndex]);

    return (
        <div className="items-center flex flex-col text-lg font-semibold p-16">
            <p>Testimonials</p>
            <div className="flex flex-col md:flex-row items-center max-w-4xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden rounded-2xl">
                <Image
                    src={testimonials[currentIndex].imageUrl}
                    alt={`${testimonials[currentIndex].name}`}
                    width={600}
                    height={800}
                    className="w-full md:w-1/3 h-96 object-cover p-4 rounded-2xl"
                />
                <div className="p-6 bg-gray-900 text-white flex-1">
                    <p className="text-xl md:text-2xl font-medium mb-4">“{testimonials[currentIndex].quote}”</p>
                    <p className="text-lg font-bold">{testimonials[currentIndex].name}</p>
                    <p className="text-sm text-gray-400">{testimonials[currentIndex].title}</p>
                </div>
            </div>
        </div>
    );
};

export default TestimonialCarousel;
