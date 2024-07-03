import { yourName, yourFirstName } from "@/lib/globals";
import Navbar from "./Navbar";
import MobileNavbar from "./MobileNavbar";

export default function Header() {
    return (
        <header className="static flex w-full justify-between py-6">
            <div className="font-semibold text-xl">
                <h1>{yourFirstName}<span className="thematic-text">.</span></h1>
            </div>

            <div className="hidden lg:flex items-center gap-8">
                <Navbar/>
            </div>

            <div className="lg:hidden">
                <MobileNavbar/>
            </div>
        </header>
    );
}