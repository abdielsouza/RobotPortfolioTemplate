"use client";

import { BsArrowDownRight } from "react-icons/bs";
import Link from "next/link";
import { motion } from "framer-motion";

const services = [
    {
        num: "01",
        title: "Web Development",
        description: "The service is fullstack, focused on quality and reliability with the client's request."
    },
    {
        num: "02",
        title: "Automation w/Scripting",
        description: "Scripts made with Python to convert huge and boring manual tasks into fast and small processes, easier to debug and understand."
    },
    {
        num: "03",
        title: "Embedded Programming",
        description: "Low-level code to turn embedded systems into powerful machines with high capability of processing data and control mechanical components."
    },
    {
        num: "04",
        title: "UI Design",
        description: "UI design for your website or application. It could be web, mobile or desktop."
    },
];

export default function Services() {
    return (
        <section className="min-h-[80vh] flex flex-col justify-center py-12 lg:py-0">
            <div className="container mx-auto">
                <motion.div
                initial={{
                    opacity: 0
                }}
                animate={{
                    opacity: 1,
                    transition: { delay: 2.4, duration: 0.4, ease: "easeIn" }
                }}
                className="grid grid-cols-1 lg:grid-cols-2 gap-[60px]"
                >
                    {
                        services.map((service, index) => (
                            <div key={index} className="w-full h-full">
                                <div className="flex flex-row gap-x-2">
                                    <div>{service.num}</div>
                                    <Link href="#">
                                        <BsArrowDownRight/>
                                    </Link>
                                </div>
                                <h2 className="text-lg font-semibold">{service.title}</h2>
                                <p>{service.description}</p>
                                <hr className="border-b-[1px] border-white w-full"></hr>
                            </div>
                        ))
                    }
                </motion.div>
            </div>
        </section>
    );
}