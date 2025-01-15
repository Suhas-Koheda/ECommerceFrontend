import Header from "./(components)/Header";
import BillBoard from "@/app/(components)/BillBoard";
import Categories from "@/app/(components)/Category/Categories";
import LevelUp from "@/app/(components)/LevelUp";
import Footer from "@/app/(components)/Footer";
import Collection from "@/app/(components)/Collection/Collection";
import Product from "@/app/(components)/Products/Product";
// import Offers from "@/app/(components)/Offers";
// import Testimonials from "@/app/(components)/Testimonials";
import ProductPage from "@/app/(components)/Products/ProductPage";

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

    return (
        <div className="page">
            <Header/>
            <BillBoard imageLink={"/images/BillBoard.jpg"}/>
            <Categories/>
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
            <Footer/>
        </div>
    );
}
