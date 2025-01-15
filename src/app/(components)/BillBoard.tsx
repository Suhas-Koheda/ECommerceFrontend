import React from 'react';
export default function BillBoard(props:{imageLink:string}) {
    const bool = true;
    return (
        <div className=" bg-cover bg-center h-screen flex items-center justify-center" style={{backgroundImage: `url(${props.imageLink})`}}>
            {bool && <div className="text-textColor text-xl">This is a boolean text</div>}
        </div>
    );
}
