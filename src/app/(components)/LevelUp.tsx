import Link from "next/link";

export default function LevelUp() {
    return (
        <div className="relative bg-[url(/images/BillBoard.jpg)] h-[700px] bg-cover bg-center m-4 rounded-2xl flex justify-center text-textColor items-center">
            <div className="absolute inset-0 bg-black bg-opacity-40 rounded-2xl"></div>
            <div className="relative flex flex-col justify-center items-center text-center">
                <h3 className="text-3xl font-bold text-white">Level Up your desk</h3>
                <p className="w-full p-4 md:w-1/2 text-white">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                </p>
                <Link
                    href="/workspace"
                    className="p-4 px-8 bg-white rounded-xl text-black text-l w-3/4 md:w-auto"
                >
                    Shop Workspace
                </Link>
            </div>
        </div>
    );
}
