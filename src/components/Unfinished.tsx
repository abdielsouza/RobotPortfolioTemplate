import { Construction } from "lucide-react";

export default function Unfinished() {
    return (
        <section className="flex flex-col w-full h-full justify-center items-center">
            <Construction size={32} className="mb-4"/>
            <h3 className="h3 max-w-[400px] text-center">This page is still in construction. Coming soon...</h3>
        </section>
    );
}