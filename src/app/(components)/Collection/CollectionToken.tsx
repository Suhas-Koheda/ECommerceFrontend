import Link from "next/link";

export default function CollectionToken(props: { imageLink: string, heading: string, desc: string, link: string }) {
    return (
        <div className="flex flex-col py-4 md:py-0">
            <Link href={props.link}>
                <div className="w-full md:w-cvw h-cvh rounded-2xl bg-cover bg-center"
                     style={{ backgroundImage: `url(${props.imageLink})` }}>
                </div>
            </Link>
            <p className="py-4">{props.heading}</p>
            <p className="py-0">{props.desc}</p>
        </div>
    );
}
