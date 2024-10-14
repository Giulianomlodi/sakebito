import Link from "next/link";
import { motion } from "framer-motion";
import Test3DSpline from "@/components/3D/Test3DSpline";
import { useEffect, useState } from "react";

const HeroSection = () => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };

        checkMobile();
        window.addEventListener("resize", checkMobile);

        return () => window.removeEventListener("resize", checkMobile);
    }, []);

    return (
        <section className="hero flex flex-col md:flex-row gap-2 md:gap-40 items-top justify-center px-5 md:px-[195px] pt-20 md:pt-40">
            <div className="md:w-1/2">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-4xl md:text-7xl font-bold mb-4 mt-[2.5em]"
                >
                    Welcome to SAKEbito
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-lg md:text-xl mb-8 max-w-md"
                >
                    SAKEbito unveils the finest Sake hidden in Japan&apos;s little villages to the world, bringing exquisite flavors and centuries-old traditions to global connoisseurs and enthusiasts alike.
                </motion.p>
                <div className="flex flex-col md:flex-row gap-4">
                    <Link href="/membership" className="bg-[#b29b49] text-white px-6 py-2 rounded-[8px] hover:opacity-60 transition-opacity duration-500 text-center md:text-left font-bold ">
                        Purchase the Membership
                    </Link>
                    <Link href="" className="bg-blue-950 text-white px-6 py-2 rounded-[8px] opacity-60 hover:opacity-60 transition-opacity text-center md:text-left mt-2 md:mt-0 cursor-default font-bold">
                        Buy Sake - soon...
                    </Link>
                </div>
            </div>
            <div className={`md:w-1/2 ${isMobile ? 'h-[50vh] w-full overflow-hidden' : 'h-screen'} mt-8 md:mt-0 flex items-center justify-center`}>
                <div className={isMobile ? 'scale-[0.7] origin-center' : ''}>
                    <Test3DSpline splineUrl={isMobile ? "https://prod.spline.design/GwdXcCmwSb6WYsg8/scene.splinecode" : "https://prod.spline.design/ihfTu4aTU4NBFS6V/scene.splinecode"} />
                </div>
            </div>
        </section>
    );
};

export default HeroSection;