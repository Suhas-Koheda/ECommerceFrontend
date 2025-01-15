"use client";
import { useState } from "react";
import Image from "next/image";
import logo from "/public/images/logo.png";
import Link from "next/link";

export default function Header() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

    const Pages = [
        ["Men", "/men"],
        ["Women", "/women"],
        ["Company", "/company"],
        ["Stores", "/stores"],
    ];

    return (
        <header className="page-header">
            <div className="flex justify-end bg-header-background text-textColor">
                <p className="p-2">Sign In</p>
                <p className="p-2">Create an account</p>
            </div>
            <div className="flex justify-between items-center p-4 bg-navBar-background text-white">
                <button
                    onClick={toggleSidebar}
                    className="md:hidden text-white p-2"
                >
                    <span className="material-icons">menu</span>
                </button>
                <div className="flex items-center">
                    <Image src={logo} alt="Logo" width={50} height={50}/>
                </div>
                <nav className="hidden md:flex space-x-4 ml-4">
                    {Pages.map((item, index) => (
                        <Link
                            key={index}
                            href={item[1]}
                            className="py-2 px-4 hover:bg-gray-700 rounded"
                        >
                            {item[0]}
                        </Link>
                    ))}
                </nav>
                <div className="hidden md:flex items-center space-x-4">
                    <Link href="/" className="p-2">Search</Link>
                    <Link href="/" className="p-2">Help</Link>
                    <Image src={logo} alt="Cart Image" width={30} height={20}/>
                    <p className="p-2">0</p>
                </div>
            </div>
            <div
                className={`fixed top-0 left-0 w-64 h-full bg-navBar-background text-white transform transition-transform duration-300 ease-in-out z-50 ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"}`}
            >
                <button
                    onClick={toggleSidebar}
                    className="p-6 text-white text-3xl block"
                >
                    &times;
                </button>
                <nav className="flex flex-col space-y-4 p-4">
                    {Pages.map((item, index) => (
                        <Link
                            key={index}
                            href={item[1]}
                            className="p-2 hover:bg-gray-700 rounded"
                            onClick={toggleSidebar}
                        >
                            {item[0]}
                        </Link>
                    ))}
                </nav>
                <div className="p-4">
                    <Link href="/" className="p-2 block">Search</Link>
                    <Link href="/" className="p-2 block">Help</Link>
                    <Image src={logo} alt="Cart Image" width={30} height={20}/>
                    <p className="p-2">0</p>
                </div>
            </div>
            <div
                className={`fixed inset-0 bg-black bg-opacity-50 z-40 ${isSidebarOpen ? "block" : "hidden"}`}
                onClick={toggleSidebar}
            />
        </header>
    );
}
