import CollectionToken from "./CollectionToken";
export default function CollectionCarousel() {

    const categories = [
        ["https://tailwindui.com/plus/img/ecommerce-images/home-page-01-collection-03.jpg", "Heading 1", "Desc 1"],
        ["https://tailwindui.com/plus/img/ecommerce-images/home-page-01-collection-02.jpg", "Heading 1", "Desc 1"],
        ["https://tailwindui.com/plus/img/ecommerce-images/home-page-01-collection-01.jpg", "Heading 1", "Desc 1"],

    ];

    return (<div className="w-full">
        <div className="flex flex-col space-x-4 p-2 overflow-x-scroll overflow-y-hidden md:w-full md:h-full py-8 no-scrollbar md:flex-row">
            {categories.map(([imageLink, text, desc], index) => (
                <CollectionToken key={index} imageLink={imageLink} heading={text} desc={desc}/>
            ))}
        </div>
    </div>)
}