"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { links, yourFirstName } from "@/lib/globals";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { CiMenuFries } from "react-icons/ci";

export default function MobileNavbar() {

    const pathname = usePathname();

    return (
        <Sheet>
            <SheetTrigger className="flex justify-center items-center">
                <CiMenuFries className="text-[32px] thematic-text"/>
            </SheetTrigger>
            <SheetContent className="flex flex-col bg-[#22262f]">
                <div className="mt-32 mb-40 text-center text-2xl">
                    <h1 className="text-4xl font-semibold">
                        {yourFirstName}<span className="thematic-text">.</span>
                    </h1>
                </div>
                <nav className="flex flex-col gap-y-3">
                    {
                    links.map((link, index) => (
                        <Link
                        href={link.path}
                        key={index}
                        className={`${link.path === pathname && "thematic-text border-b-2 thematic-border"} text-xl capitalize hover:thematic-text transition-all`}
                        >
                            {link.name}
                        </Link>
                    ))
                    }
                </nav>
            </SheetContent>
        </Sheet>
    );
}