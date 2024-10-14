import React from 'react';
import Image from 'next/image';

const ProductionChiefSection: React.FC = () => {
    return (
        <section className="my-12">
            <h2 className="text-3xl font-bold mb-6 text-center">Toji - Production Chief</h2>
            <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 mb-6 md:mb-0">
                    <Image
                        src="/images/toji.jpg"
                        alt="Toji - Production Chief"
                        width={400}
                        height={500}
                        objectFit="cover"
                    />
                </div>
                <div className="md:w-1/2 md:pl-8">
                    <p className="text-lg leading-relaxed">
                        Toji takes the chief of sake brewing and oversees the whole production and is responsible
                        for every step of the production process.
                    </p>
                    <p className="mt-4 text-lg leading-relaxed">
                        Toji has the role of finding, learning and their attention surrounded with specific organism in Japan and
                        of selecting important differences with air climate, water resources, rice varieties, and fermenting
                        organisms...
                    </p>
                </div>
            </div>
        </section>
    );
};

export default ProductionChiefSection;