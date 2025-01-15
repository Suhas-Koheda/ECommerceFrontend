import CategoryToken from "@/app/(components)/Category/CategoryToken";
import Link from "next/link";

export default function CategoryCarousel({ categories }: { categories: string[][] }) {
    return (
        <div className="flex space-x-4 p-2 overflow-x-auto md:overflow-x-auto no-scrollbar overflow-y-hidden md:space-x-6 lg:space-x-8">
            {categories.map(([imageLink, text, link], index) => (
                    <CategoryToken key={index} imageLink={imageLink} text={text} link={link} />
            ))}
        </div>
    );
}
