import React from 'react';
import MintButton from '@/components/web3/UnifiedMintButton';

const Hero = () => {
    return (
        <section className="min-h-screen w-full overflow-hidden">
            <div className="flex flex-col md:flex-row w-full h-full mt-[70px] md:mt-0 md:py-[75px]">
                <div className="relative w-full md:w-2/5 h-[50vh] md:h-screen">
                    <video
                        src="/video/NFT.mp4"
                        className="absolute inset-0 w-full h-full object-cover md:ml-[100px] md:mt-[40px]"
                        autoPlay
                        loop
                        muted
                        playsInline
                    />
                </div>
                <div className="w-full md:w-3/5 flex flex-col justify-center items-center p-6 md:p-12 space-y-8">
                    <div className="text-center max-w-md space-y-4">
                        <p className="text-lg">
                            This is the Edition 1 Membership &quot;一級&quot;, with only <strong>100 seats</strong> available.
                        </p>
                        <p className="text-lg">
                            <strong>Join us</strong> now for an awesome <strong>Sake vibe</strong> and let&apos;s dive deeper into the world of <strong>premium</strong> Sake together!
                        </p>
                    </div>
                    <div className="w-full max-w-xs space-y-4">
                        <MintButton />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;