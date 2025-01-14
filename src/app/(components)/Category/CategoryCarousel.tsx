import CategoryToken from "@/app/(components)/Category/CategoryToken";

export default function CategoryCarousel() {
    const categories = [
        ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBtZVYo2mMRzpxwqV402davYhLw2_L-MWqoA&s", "Category 1"],
        ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBtZVYo2mMRzpxwqV402davYhLw2_L-MWqoA&s", "Category 1"],
        ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBtZVYo2mMRzpxwqV402davYhLw2_L-MWqoA&s", "Category 1"],
        ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBtZVYo2mMRzpxwqV402davYhLw2_L-MWqoA&s", "Category 1"],
        ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBtZVYo2mMRzpxwqV402davYhLw2_L-MWqoA&s", "Category 1"],
        ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBtZVYo2mMRzpxwqV402davYhLw2_L-MWqoA&s", "Category 1"],
    ];

    return (
        <div className="flex space-x-4 p-2 overflow-x-scroll overflow-y-hidden md:w-full md:h-full ">
            {categories.map(([imageLink, text], index) => (
                <CategoryToken key={index} imageLink={imageLink} text={text} />
            ))}
        </div>
    );
}
