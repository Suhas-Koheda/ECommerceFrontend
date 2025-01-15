import Header from "./(components)/Header" ;
import BillBoard from "@/app/(components)/BillBoard";
import Categories from "@/app/(components)/Category/Categories";
import LevelUp from "@/app/(components)/LevelUp";
import Footer from "@/app/(components)/Footer";
import Collection from "@/app/(components)/Collection/Collection";
export default function Home() {
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
          <Footer/>
      </div>
  );
}
