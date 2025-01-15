import CategoryToken from "@/app/(components)/Category/CategoryToken";
import Link from "next/link";

export default function CategoryCarousel() {
    const categories = [
        ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBtZVYo2mMRzpxwqV402davYhLw2_L-MWqoA&s", "Category 1"],
        ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBtZVYo2mMRzpxwqV402davYhLw2_L-MWqoA&s", "Category 2"],
        ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBtZVYo2mMRzpxwqV402davYhLw2_L-MWqoA&s", "Category 3"],
        ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBtZVYo2mMRzpxwqV402davYhLw2_L-MWqoA&s", "Category 4"],
        ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBtZVYo2mMRzpxwqV402davYhLw2_L-MWqoA&s", "Category 5"],
        ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBtZVYo2mMRzpxwqV402davYhLw2_L-MWqoA&s", "Category 6"],
        ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBtZVYo2mMRzpxwqV402davYhLw2_L-MWqoA&s", "Category 1"],
        ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBtZVYo2mMRzpxwqV402davYhLw2_L-MWqoA&s", "Category 2"],
        ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBtZVYo2mMRzpxwqV402davYhLw2_L-MWqoA&s", "Category 3"],
        ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBtZVYo2mMRzpxwqV402davYhLw2_L-MWqoA&s", "Category 4"],
        ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBtZVYo2mMRzpxwqV402davYhLw2_L-MWqoA&s", "Category 5"],
        ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBtZVYo2mMRzpxwqV402davYhLw2_L-MWqoA&s", "Category 6"],
    ];

    return (
        <div className="flex space-x-4 p-2 overflow-x-auto md:overflow-x-auto no-scrollbar overflow-y-hidden md:space-x-6 lg:space-x-8">
            {categories.map(([imageLink, text], index) => (
                <Link href="/" key={index} passHref>
                    <CategoryToken imageLink={imageLink} text={text} />
                </Link>
            ))}
        </div>
    );
}
