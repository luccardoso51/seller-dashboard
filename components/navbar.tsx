"use client"
import Image from "next/image";
import MainNav from "./main-nav";

const logopath = "/logo.png"

function Navbar() {
    return (
        <div className="border-b">
            <div className="flex h-16 items-center px-4">
                <div className="flex h-16 items-center pr-4">
                    <Image src={logopath} width={80} height={10} alt="Image logo"/>
                </div>
                <MainNav/>
            </div>
        </div>
    );
}

export default Navbar;