export default function Footer() {
    const footerData = [
        {
            title: "Shop",
            links: ["Bags", "Tees", "Objects", "Home Goods", "Accessories"],
        },
        {
            title: "Company",
            links: [
                "Who we are",
                "Sustainability",
                "Press",
                "Careers",
                "Terms & Conditions",
                "Privacy",
            ],
        },
        {
            title: "Account",
            links: ["Manage Account", "Returns & Exchanges", "Redeem a Gift Card"],
        },
        {
            title: "Connect",
            links: ["Contact Us", "Facebook", "Instagram", "Pinterest"],
        },
    ];

    return (
        <footer className="bg-gray-900 text-white py-8 px-6 md:px-16 ">
            <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 ">
                {footerData.map((section, index) => (
                    <div key={index} className="p-4 text-center">
                        <h5 className="font-bold mb-4 py-2">{section.title}</h5>
                        <ul className="space-y-2">
                            {section.links.map((link, linkIndex) => (
                                <li key={linkIndex} className="py-2">
                                    <a href="#" className="hover:underline">
                                        {link}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
                <div className="px-2 py-4">
                    <h5 className="font-bold mb-4">Sign up for our newsletter</h5>
                    <p className="text-sm mb-4">
                        The latest deals and savings, sent to your inbox weekly.
                    </p>
                    <form className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2 ">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="p-2 rounded-lg bg-gray-800 text-white focus:outline-none flex-grow text-center md:w-40"
                        />
                        <button className="bg-indigo-600 hover:bg-indigo-500 text-white px-4 py-2 rounded-lg w-full">
                            Sign up
                        </button>
                    </form>
                </div>
            </div>
            <div className="mt-8 border-t border-gray-700 pt-4 text-center text-sm">
                Copyright © 2021 Your Company, Inc.
            </div>
        </footer>
    );
}
