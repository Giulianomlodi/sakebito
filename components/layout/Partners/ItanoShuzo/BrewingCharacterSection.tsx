import React from 'react';
import Image from 'next/image';

const BrewingCharacterSection: React.FC = () => {
    return (
        <section className="my-12">
            <h2 className="text-3xl font-bold mb-6 text-center">Brewing Character</h2>
            <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 mb-6 md:mb-0">
                    <Image
                        src="/images/brewing-process.jpg"
                        alt="Brewing Process"
                        width={500}
                        height={300}
                        objectFit="cover"
                    />
                </div>
                <div className="md:w-1/2 md:pl-8">
                    <p className="text-lg leading-relaxed">
                        Their brewery is known for having a special microorganism that allows for long-lasting maturation. With this fermentation method,
                        the umami increases and the rough taste softens as time passes...
                    </p>
                </div>
            </div>
        </section>
    );
};

export default BrewingCharacterSection;