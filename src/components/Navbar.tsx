"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { links } from "@/lib/globals";

export default function Navbar() {

    const pathname = usePathname();

    return (
        <nav className="flex gap-8">
            {
                links.map((link, index) => (
                    <Link 
                    href={link.path} 
                    key={index} 
                    className={`${link.path === pathname && "thematic-text border-b-2 thematic-border"} capitalize font-medium hover:thematic-text transition-all`}
                    >
                        {link.name}
                    </Link>
                ))
            }
        </nav>
    );
}