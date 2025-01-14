import Image from "next/image";
import logo from "/public/images/logo.png";
import Link from "next/link";

export default function Header() {
    const Pages = [
        ["Men", "/men"],
        ["Women", "/women"],
        ["Company", "/company"],
        ["Stores", "/stores"],
    ];

    return (
        <header className="page-header">
            <div className="flex justify-end bg-background text-textColor">
                <p className="p-2">Sign In</p>
                <p className="p-2">Create an account</p>
            </div>
            <div className="flex items-center p-4">
                <Image src={logo} alt="Logo" width={50} height={50} />
                <nav className="flex ml-4">
                    {Pages.map((item, index) => (
                        <Link key={index} href={item[1]} className="ml-4">
                            {item[0]}gt
                        </Link>
                    ))}
                </nav>
            </div>
        </header>
    );
}