import Link from "next/link";

export default function ProductToken1(props: { image: string; name: string; price: string; category: string; link: string }) {
    return (
        <div className="w-full">
            <Link href={props.link} passHref>
                <div
                    style={{ backgroundImage: `url(${props.image})` }}
                    className="w-full h-48 md:h-72 bg-cover bg-no-repeat bg-center rounded-lg flex flex-col justify-end text-shadow cursor-pointer"
                >
                    <br />
                </div>
            </Link>
            <div className="p-4">
                <p className="text-sm">{props.category}</p>
                <p className="text-base md:text-lg font-semibold">{props.name}</p>
                <p className="text-base">{props.price}</p>
            </div>
        </div>
    );
}
