export default function Testimonials({ heading, testimonials }: { heading: string, testimonials: string[] }) {
    return (
        <div className="w-full p-8 bg-gray-50">
            <h2 className="text-xl md:text-2xl font-semibold text-center">{heading}</h2>
            <div className="mt-8 space-y-4">
                {testimonials.map((testimonial, index) => (
                    <div key={index} className="p-4 bg-white shadow-md rounded-lg">
                        <p className="text-sm md:text-lg text-center">{testimonial}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
