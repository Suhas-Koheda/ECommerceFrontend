import Header from "./(components)/Header" ;
import BillBoard from "@/app/(components)/BillBoard";
import Categories from "@/app/(components)/Category/Categories";
import LevelUp from "@/app/(components)/LevelUp";
import Footer from "@/app/(components)/Footer";
export default function Home() {
  return (
      <div className="page">
          <Header/>
          <BillBoard/>
          <Categories/>
          <LevelUp/>
          <Footer/>
      </div>
  );
}
