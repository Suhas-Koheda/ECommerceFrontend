import React from 'react';
import Link from 'next/link';

const CategoryToken = ({ imageLink, text, link }:{imageLink:string, text:string, link:string}) => {
    return (
        <Link href={link}>
            <div
                className="flex min-w-[170px] md:w-56 h-96 bg-cover bg-center rounded-2xl justify-end flex-col cursor-pointer"
                style={{
                    backgroundImage: `linear-gradient(to bottom, rgba(255, 255, 255, 0) 60%, rgba(0, 0, 0, 1) 100%), url(${imageLink})`
                }}
            >
                <p className="text-white text-xl text-center font-semibold p-8">{text}</p>
            </div>
        </Link>
    );
};

export default CategoryToken;
