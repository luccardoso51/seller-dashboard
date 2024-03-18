"use client"
import Image from "next/image";
import MainNav from "./main-nav";
import { ModeToggle } from "./mode-toggle";

const logopath = "/logo.png"

function Navbar() {
    return (
        <div className="border-b">
            <div className="flex h-16 items-center px-4">
                <Image src={logopath} width={80} height={10} alt="Image logo"/>
                <MainNav className="mx-6" />
                <div className="ml-auto flex items-center space-x-4">
                    <ModeToggle/>
                </div>
            </div>

        </div>
    );
}

export default Navbar;