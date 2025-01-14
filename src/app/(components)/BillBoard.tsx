export default function BillBoard() {
    const bool = true;
    return (
        <div className="bg-billBoard-background bg-cover bg-center h-screen flex items-center justify-center">
            {bool && <div className="text-textColor text-xl">This is text</div>}
        </div>
    );
}
