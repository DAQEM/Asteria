import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { cookies } from "next/headers";
import Footer from "../_components/Footer";
import Header from "../_components/Header";
import "../globals.css";

const poppins = Poppins({
    subsets: ["latin"],
    display: "swap",
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
    title: "Leading Minecraft Content - DAQEM Studios",
    description:
        "DAQEM Studios creates innovative Minecraft mods and modpacks, offering engaging content and insights for Minecraft enthusiasts.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const cookieStore = cookies();
    const themeCookie = cookieStore.get("theme");
    const isDeveloper = themeCookie?.value === "developer";

    return (
        <html
            lang="en"
            className={`${poppins.className}` + " group/theme"}
            data-theme={isDeveloper ? "developer" : "player"}
        >
            <body className="data-[theme=developer]:bg-red-500">
                <Header />
                {children}
                <Footer />
            </body>
        </html>
    );
}
