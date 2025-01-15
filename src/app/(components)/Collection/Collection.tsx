import CollectionCarousel from "@/app/(components)/Collection/CollectionCarousel";

export default function Collection() {
    return (<div className="px-8 p-16">
        <div className="flex flex-col justify-between px-4">
            <h1 className="text-2xl font-semibold p-2">Shop By Collection</h1>
            <p className="p-2 font-light">Each season, we collaborate with world-class designers to create a collection inspired by the natural world.</p>
            <CollectionCarousel/>
        </div>
    </div>)
}