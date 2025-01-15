import Link from "next/link";

export default function ProductToken2(props: { image: string; name: string; price: string; category: string; link: string }) {
    return (
        <div className="w-full">
            <Link href={props.link} passHref>
                <div
                    style={{
                        backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.5) 90%, rgba(0, 0, 0, 0.8) 100%), url(${props.image})`,
                    }}
                    className="w-full h-48 md:h-72 bg-cover bg-no-repeat bg-center rounded-lg flex flex-col justify-end text-shadow text-end cursor-pointer"
                >
                    <p className="text-base text-white p-4">{props.price}</p>
                </div>
            </Link>
            <div className="py-4 text-start">
                <p className="text-base md:text-lg font-semibold">{props.name}</p>
                <p className="font-light text-sm">{props.category}</p>
                <button className="bg-gray-300 hover:bg-gray-600 px-4 py-2 my-4 rounded-lg w-full text-black text-sm">
                    Add to cart
                </button>
            </div>
        </div>
    );
}
