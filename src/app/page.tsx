import Header from "./(components)/Header";
import BillBoard from "@/app/(components)/BillBoard";
import Categories from "@/app/(components)/Category/Categories";
import LevelUp from "@/app/(components)/LevelUp";
import Footer from "@/app/(components)/Footer";
import Collection from "@/app/(components)/Collection/Collection";
import Product from "@/app/(components)/Products/Product";
import ProductPage from "@/app/(components)/Products/ProductPage";
import TestimonialCarousel from "@/app/(components)/Testimonials/TestimonialCarousel";
import Offers from "@/app/(components)/Offers";
import CartPage from "@/app/(components)/Cart/CartPage";
import OrderDetailPage from "@/app/(components)/Cart/OrderDetailPage";
import BillingPage from "@/app/(components)/BillingPage";
import CategoryPages from "@/app/(components)/CategoryPages";

export default function Home() {


    const dummyProducts = [
        [
            "https://tailwindui.com/plus/img/ecommerce-images/home-page-02-product-03.jpg",
            "Product 1",
            "$19.99",
            "Category 1",
            "/product/1",
        ],
        [
            "https://tailwindui.com/plus/img/ecommerce-images/home-page-02-product-03.jpg",
            "Product 2",
            "$29.99",
            "Category 2",
            "/product/2",
        ],
        [
            "https://tailwindui.com/plus/img/ecommerce-images/home-page-02-product-03.jpg",
            "Product 3",
            "$39.99",
            "Category 3",
            "/product/3",
        ],
        [
            "https://tailwindui.com/plus/img/ecommerce-images/home-page-02-product-02.jpg",
            "Product 4",
            "$49.99",
            "Category 4",
            "/product/4",
        ],
        [
            "https://tailwindui.com/plus/img/ecommerce-images/home-page-02-product-02.jpg",
            "Product 5",
            "$59.99",
            "Category 5",
            "/product/5",
        ],
        [
            "https://tailwindui.com/plus/img/ecommerce-images/home-page-02-product-02.jpg",
            "Product 6",
            "$69.99",
            "Category 6",
            "/product/6",
        ],
        [
            "https://tailwindui.com/plus/img/ecommerce-images/home-page-02-product-03.jpg",
            "Product 7",
            "$79.99",
            "Category 7",
            "/product/7",
        ],
        [
            "https://tailwindui.com/plus/img/ecommerce-images/home-page-02-product-02.jpg",
            "Product 8",
            "$89.99",
            "Category 8",
            "/product/8",
        ],
    ];

    const categories = [
        ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBtZVYo2mMRzpxwqV402davYhLw2_L-MWqoA&s", "Category 1", "/category/1"],
        ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBtZVYo2mMRzpxwqV402davYhLw2_L-MWqoA&s", "Category 2", "/category/2"],
        ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBtZVYo2mMRzpxwqV402davYhLw2_L-MWqoA&s", "Category 3", "/category/3"],
        ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBtZVYo2mMRzpxwqV402davYhLw2_L-MWqoA&s", "Category 4", "/category/4"],
        ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBtZVYo2mMRzpxwqV402davYhLw2_L-MWqoA&s", "Category 5", "/category/5"],
        ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBtZVYo2mMRzpxwqV402davYhLw2_L-MWqoA&s", "Category 6", "/category/6"],
        ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBtZVYo2mMRzpxwqV402davYhLw2_L-MWqoA&s", "Category 1", "/category/1"],
        ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBtZVYo2mMRzpxwqV402davYhLw2_L-MWqoA&s", "Category 2", "/category/2"],
        ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBtZVYo2mMRzpxwqV402davYhLw2_L-MWqoA&s", "Category 3", "/category/3"],
        ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBtZVYo2mMRzpxwqV402davYhLw2_L-MWqoA&s", "Category 4", "/category/4"],
        ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBtZVYo2mMRzpxwqV402davYhLw2_L-MWqoA&s", "Category 5", "/category/5"],
        ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBtZVYo2mMRzpxwqV402davYhLw2_L-MWqoA&s", "Category 6", "/category/6"]
    ];

    const offers = [
        ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBtZVYo2mMRzpxwqV402davYhLw2_L-MWqoA&s", "50% Off on Category 1", "/offer/1"],
        ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBtZVYo2mMRzpxwqV402davYhLw2_L-MWqoA&s", "Buy 1 Get 1 Free on Category 2", "/offer/2"],
        ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBtZVYo2mMRzpxwqV402davYhLw2_L-MWqoA&s", "20% Off on Category 3", "/offer/3"],
        ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBtZVYo2mMRzpxwqV402davYhLw2_L-MWqoA&s", "Free Shipping on Category 4", "/offer/4"],
        ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBtZVYo2mMRzpxwqV402davYhLw2_L-MWqoA&s", "25% Off on Category 5", "/offer/5"],
        ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBtZVYo2mMRzpxwqV402davYhLw2_L-MWqoA&s", "Limited Time Offer on Category 6", "/offer/6"],
        ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBtZVYo2mMRzpxwqV402davYhLw2_L-MWqoA&s", "50% Off on Category 1", "/offer/1"],
        ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBtZVYo2mMRzpxwqV402davYhLw2_L-MWqoA&s", "Buy 1 Get 1 Free on Category 2", "/offer/2"],
        ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBtZVYo2mMRzpxwqV402davYhLw2_L-MWqoA&s", "20% Off on Category 3", "/offer/3"],
        ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBtZVYo2mMRzpxwqV402davYhLw2_L-MWqoA&s", "Free Shipping on Category 4", "/offer/4"],
        ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBtZVYo2mMRzpxwqV402davYhLw2_L-MWqoA&s", "25% Off on Category 5", "/offer/5"],
        ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBtZVYo2mMRzpxwqV402davYhLw2_L-MWqoA&s", "Limited Time Offer on Category 6", "/offer/6"]
    ];



    const testimonials = [
        {
            imageUrl: "https://randomuser.me/api/portraits/men/32.jpg",
            quote: "This is an amazing product!",
            name: "John Doe",
            title: "CEO, Example Corp"
        },
        {
            imageUrl: "https://randomuser.me/api/portraits/men/33.jpg",
            quote: "I love this service!",
            name: "Jane Smith",
            title: "Product Manager, Tech Co."
        },
    ];

    return (
        <div className="page">
            <Header/>
            <BillBoard imageLink={"/images/BillBoard.jpg"}/>
            <Categories categories={categories}/>
            <LevelUp heading="Level Up your desk" text="Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum has been the standard dummy text ever since the 1500s." buttonText="Shop Workspace" imageLink="/images/BillBoard.jpg"/>
            <Collection/>
            <LevelUp heading={"Simple Productivity"} text={"Endless tasks, limited hours, a single piece of paper. " +
                "Not really a haiku, but we're doing our best here. " +
                "No kanban boards, burndown charts, or tangled flowcharts with our Focus system." +
                " Just the undeniable urge to fill empty circles."} buttonText={"Shop Focus"} imageLink={"/images/BillBoard.jpg"}/>
            <Product
                heading="Featured Products"
                seeAll="See all featured products"
                products={dummyProducts}
                type="1"
            />
            <Product
                heading="Customers also bought"
                seeAll="See all"
                products={dummyProducts}
                type="2"
            />
            <ProductPage/>
            <Offers offers={offers} />
            <TestimonialCarousel testimonials={testimonials}/>
            <CartPage/>
            <OrderDetailPage/>
            <BillingPage/>
            <Footer/>
        </div>
    );
}
