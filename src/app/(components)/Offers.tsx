import CategoryCarousel from "@/app/(components)/Category/CategoryCarousel";

export default function Offers({ offers }: { offers: string[][] }){
    return (<div className="px-8 p-16">
        <div className="flex justify-between items-center px-4">
            <h1 className="text-2xl font-semibold p-2">Today&#39;s Offers</h1>
        </div>
        <CategoryCarousel categories={offers} />
    </div>)
}