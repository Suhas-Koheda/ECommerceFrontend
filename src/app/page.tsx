import Header from "./(components)/Header" ;
import BillBoard from "@/app/(components)/BillBoard";
export default function Home() {
  return (
      <div className="page">
          <Header/>
          <BillBoard/>
      </div>
  );
}
