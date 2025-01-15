import React from 'react';

const CategoryToken = ({imageLink, text}: { imageLink: string, text: string }) => {
    return (
        <div
            className="flex min-w-[170px] md:w-56 h-96 bg-cover bg-center rounded-2xl justify-end flex-col"
            style={{backgroundImage: `url(${imageLink})`}}
        >
            <p className="text-black text-xl text-center font-semibold p-8">{text}</p>
        </div>
    );
};

export default CategoryToken;