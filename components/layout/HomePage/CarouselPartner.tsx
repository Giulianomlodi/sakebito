"use client"

import * as React from "react"
import Image from "next/image"
import Autoplay from "embla-carousel-autoplay"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import { Card, CardContent } from "@/components/ui/card"
import { useEffect, useState } from "react";

export default function CarouselPartner() {
    const plugin = React.useRef(
        Autoplay({ delay: 2000, stopOnInteraction: true })
    )

    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };

        checkMobile();
        window.addEventListener("resize", checkMobile);

        return () => window.removeEventListener("resize", checkMobile);
    }, []);

    const partners = [
        "/images/Partners_Carousel/Partner_1.png",
        "/images/Partners_Carousel/Partner_2.png",
        "/images/Partners_Carousel/Partner_3.png",
        "/images/Partners_Carousel/Partner_4.png",
        "/images/Partners_Carousel/Partner_5.png",
        "/images/Partners_Carousel/Partner_6.png",
        "/images/Partners_Carousel/Partner_7.png",
        "/images/Partners_Carousel/Partner_8.png",
        "/images/Partners_Carousel/Partner_9.png",
        "/images/Partners_Carousel/Partner_10.png",
        "/images/Partners_Carousel/Partner_11.png",
    ]

    return (
        <section id="partner-carousel" className={`py-${isMobile ? '10' : '32'} px-4 bg-[#020617]`}>
            <div className="container mx-auto">
                <h2 className="text-5xl font-bold text-center mb-8 text-white">Our Partners</h2>
                <Carousel
                    opts={{
                        align: "start",
                        loop: true,
                    }}
                    plugins={[plugin.current]}
                    onMouseEnter={plugin.current.stop}
                    onMouseLeave={plugin.current.reset}
                    className="w-full"
                >
                    <CarouselContent className="-ml-2 md:-ml-4">
                        {partners.map((partner, index) => (
                            <CarouselItem key={index} className="pl-2 md:pl-4 basis-1/2 md:basis-1/3 lg:basis-1/4 xl:basis-1/5">
                                <div className="p-1">
                                    <Card>
                                        <CardContent className="flex aspect-[16/9] items-center justify-center p-6">
                                            <Image
                                                src={partner}
                                                alt={`Partner ${index + 1}`}
                                                width={320}
                                                height={180}
                                                objectFit="contain"
                                            />
                                        </CardContent>
                                    </Card>
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    {isMobile ? null : (
                        <>
                            <CarouselPrevious />
                            <CarouselNext />
                        </>
                    )}
                </Carousel>
            </div>
        </section>
    )
}