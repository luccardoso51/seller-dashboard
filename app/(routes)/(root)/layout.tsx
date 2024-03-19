import Navbar from "@/components/navbar";

function RootLayout({
    children
}: {children: React.ReactNode}) {
    return (
        <>
        <Navbar/>
        {children}
        </>
    );
}

export default RootLayout;