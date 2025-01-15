export default function Offers({ heading, description }: { heading: string, description: string }) {
    return (
        <div className="w-full p-8 bg-gray-100">
            <h2 className="text-xl md:text-2xl font-semibold text-center">{heading}</h2>
            <p className="text-center mt-4 text-sm md:text-lg">{description}</p>
            {/* Add offer items here */}
            <div className="mt-8 flex justify-center space-x-4">
                <div className="bg-red-500 text-white p-4 rounded-lg">
                    <p>Offer 1</p>
                    <p>50% off on all items</p>
                </div>
                <div className="bg-blue-500 text-white p-4 rounded-lg">
                    <p>Offer 2</p>
                    <p>Buy 1 get 1 free</p>
                </div>
            </div>
        </div>
    );
}
