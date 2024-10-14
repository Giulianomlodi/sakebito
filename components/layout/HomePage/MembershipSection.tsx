import * as React from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, useAnimation } from 'framer-motion'
import { useEffect } from 'react'
import { useInView } from 'react-intersection-observer'

export default function MembershipSection() {
    const controls = useAnimation()
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    })

    useEffect(() => {
        if (inView) {
            controls.start('visible')
        }
    }, [controls, inView])

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                duration: 0.5,
                staggerChildren: 0.2
            }
        }
    }

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5
            }
        }
    }

    return (
        <motion.section
            ref={ref}
            className="py-32 px-4 bg-[#020617]"
            variants={containerVariants}
            initial="hidden"
            animate={controls}
        >
            <div className="container mx-auto">
                <div className="flex flex-col lg:flex-row gap-24">
                    {/* Left column with image */}
                    <motion.div className="lg:w-3/5" variants={itemVariants}>
                        <div className="relative w-full h-[500px] rounded-[15px] overflow-hidden">
                            <Image
                                src="/images/Membership.jpg"
                                alt="Sake Club Membership"
                                layout="fill"
                                objectFit="cover"
                            />
                        </div>
                    </motion.div>
                    {/* Right column with content */}
                    <motion.div className="lg:w-2/5 flex flex-col justify-center" variants={itemVariants}>
                        <h2 className="text-4xl font-bold mb-4 text-white">Lifetime Membership</h2>
                        <p className="text-gray-300 mb-6">
                            Our exclusive membership club is where you can get the closest to the art of Japanese Sake culture.

                            Receive premium benefits only for the club members and meet fellow Sake enthusiasts
                        </p>
                        <div className="flex">
                            <Link
                                href="/membership"
                                className="bg-[#b29b49] text-white hover:opacity-80 transition-opacity px-4 py-2 rounded-[8px] font-bold"
                            >
                                Learn More About Membership
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </div>
        </motion.section>
    )
}
