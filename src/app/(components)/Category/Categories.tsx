import CategoryCarousel from "@/app/(components)/Category/CategoryCarousel";
import Link from "next/link";

export default function Categories({ categories }: { categories: string[][] }) {
    return (<div className="px-8 p-16">
        <div className="flex justify-between items-center px-4">
            <h1 className="text-2xl font-semibold p-2">Shop By Category</h1>
            <Link href={"/categories"} className="text-l font-semibold p-2 hidden md:block">Browse all categories</Link></div>
        <CategoryCarousel categories={categories} />
        <div className="block md:hidden p-2">
            <Link href={"/categories"} className="text-l font-semibold p-2 block md:hidden">Browse all categories</Link>
        </div>
    </div>)
}