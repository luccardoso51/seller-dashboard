"use client"
import Image from "next/image";
import MainNav from "./main-nav";
import { ModeToggle } from "./mode-toggle";
import { useTheme } from "next-themes";
import { useRouter } from "next/navigation";
import Link from "next/link";





function Navbar() {
    const { theme } = useTheme();
    const router = useRouter()


    const logopath = theme == "dark" ? "/logo-dark.png": "/logo-white.png"
    console.log('Tema atual:', theme);

    return (
        <div className="border-b">
            <div className="flex h-16 items-center px-4">
                <Link href={"/"}>
                    <Image src={logopath} width={80} height={10} alt="Image logo"/>
                </Link>
                <MainNav className="mx-6" />
                <div className="ml-auto flex items-center space-x-4">
                    <ModeToggle/>
                </div>
            </div>

        </div>
    );
}

export default Navbar;