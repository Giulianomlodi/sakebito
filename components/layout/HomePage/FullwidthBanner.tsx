import { motion, useAnimation } from 'framer-motion'
import { useEffect } from 'react'
import { useInView } from 'react-intersection-observer'

export default function FullwidthBanner() {
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
            className="relative h-screen flex items-center justify-center overflow-hidden mt-[120px]"
            variants={containerVariants}
            initial="hidden"
            animate={controls}
        >
            {/* Background Image */}
            <div
                className="absolute inset-0 z-0"
                style={{
                    backgroundImage: "url('/images/sake_bottles.png')",
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    borderRadius: '20px',
                }}
            >
                {/* Overlay */}
                <div className="absolute inset-0 bg-black opacity-50"></div>
            </div>

            {/* Content Container */}
            <div className="relative z-10 flex flex-row items-center justify-center gap-10 px-6 sm:px-[10em]">
                {/* Content */}
                <div className="text-center">
                    <motion.h1
                        variants={itemVariants}
                        className="text-5xl font-bold mb-4 max-w-[30em] sm:text-7xl"
                    >
                        Unveil Sake&apos;s Hidden Treasures
                    </motion.h1>
                    <motion.p
                        variants={itemVariants}
                        className="text-xl mb-8 max-w-[50em]"
                    >
                        SAKEbito is the most exclusive Sake experience in the world. A new gateway to centuries-old craftsmanship enabled by digital innovation.
                        <br />
                        <br />
                        Discover the finest Sake handcrafted by legendary brewers, and join the borderless community of curious minds to explore Japanese cultural treasures.
                    </motion.p>
                    <motion.div
                        variants={itemVariants}
                        className="flex flex-col sm:flex-row justify-start space-y-4 sm:space-y-0 sm:space-x-4"
                    >

                    </motion.div>
                </div>
                {/* BentoGridSecondDemo */}

            </div>
        </motion.section>
    )
}