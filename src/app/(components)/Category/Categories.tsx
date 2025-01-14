import CategoryCarousel from "@/app/(components)/Category/CategoryCarousel";

export default function Categories() {
    return (<div className="px-2">
        <div className="flex justify-between items-center px-4">
            <h1 className="text-2xl font-semibold p-2">Shop By Category</h1>
            <h4 className="text-l font-semibold p-2 hidden md:block">Browse all categories</h4></div>
        <CategoryCarousel/>
        <div className="block md:hidden p-2">
            <h4 className="text-l font-semibold p-2 ">Browse all categories</h4>
        </div>
    </div>)
}