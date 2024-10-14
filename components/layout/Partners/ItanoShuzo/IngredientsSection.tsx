import React from 'react';
import Image from 'next/image';

const IngredientsSection: React.FC = () => {
    return (
        <section className="my-12">
            <h2 className="text-3xl font-bold mb-6 text-center">Their ingredients</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                    <h3 className="text-xl font-semibold mb-4">Rice</h3>
                    <p className="text-lg leading-relaxed">
                        Yamada Nishiki rice is grown in the same region of our sake, in the fields near by production which bring one of the
                        most sake rice & was discovered over 100 years ago and is a prized blend for some of the smoothest
                        premium sake out...
                    </p>
                </div>
                <div>
                    <h3 className="text-xl font-semibold mb-4">Water</h3>
                    <Image
                        src="/images/sake-water.jpg"
                        alt="Sake Water"
                        width={400}
                        height={300}
                        objectFit="cover"
                    />
                    <p className="mt-4 text-lg leading-relaxed">
                        Soft water runs from along the foot-heavy
                        It has a unique in taste that our distillers swish use and to test when
                        we mix water for our products right away in the brewery.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default IngredientsSection;