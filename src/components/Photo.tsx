"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Photo() {
    return (
        <div className="w-[256px] h-[256px] lg:mr-10 relative rounded-full p-10 shadowed">
            <motion.div
            initial={{opacity: 0}}
            animate={{
                opacity: 1,
                transition: { delay: 2, duration: 0.4, ease: "easeIn" }
            }}
            >
                <motion.div
                className="p-10 mix-blend-lighten"
                initial={{opacity: 0}}
                animate={{
                    opacity: 1,
                    transition: { delay: 2.4, duration: 0.4, ease: "easeInOut" }
                }}
                >
                    <Image src="/avatar.png" priority quality={100} fill alt="" className="object-contain rounded-full"/>
                </motion.div>
            </motion.div>
        </div>
    );
}