import Header from "./(components)/Header" ;
import BillBoard from "@/app/(components)/BillBoard";
import Categories from "@/app/(components)/Category/Categories";
export default function Home() {
  return (
      <div className="page">
          <Header/>
          <BillBoard/>
          <Categories/>
      </div>
  );
}
