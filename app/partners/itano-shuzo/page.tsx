// app/partners/itano-shuzo/page.tsx
'use client'

import React from 'react';
import PartnerPageTemplate, { SectionProps } from '@/components/templates/PageTemplate';

const ItanoShuzoPage: React.FC = () => {
    const sections: SectionProps[] = [
        {
            title: 'How it started',
            content: (
                <>
                    <p>Located in a town where the culture of the Shogun Dynasty originated in 1603, the town is full of samurai legacies and unique traditions in the historical sceneries, and the memory still remains in the landscape yet appears anew.</p>
                    <p>Itano Shuzo, in this town is just a 3-minute walk from the historic Tokugawa Museum which tells the success story of the Tokugawa Shogunate, as if the whole town serves to promote Edo-era&apos;s sake brewing traditions in its many cultural aspects.</p>
                    <p>During the time of the 14th generation of the Master Brewer, the sake brewery was hit by a great fire, and it was in the name of the brand, Touzan (meaning climbing mountains) that the brewery was rebuilt anew.</p>
                </>
            ),
            imageSrc: '/images/Pages/Itano-Shuzo/Itano1.png',
        },
        {
            title: 'Their ingredients',
            content: (
                <>
                    <p>Sake-specific rice varieties of rice, all of which are locally grown in Okayama.</p>
                    <p>Omachi is one of the most types of rice used to be difficult to produce due to the rice plants being too tall for the surrounding climate.</p>
                    <p>However, Omachi rice is described as well-balanced, polished ratio to about 50%, producing both heavy and light flavors depending on its brewing methods.</p>
                    <p>Also, Hattan-nishiki 60 is used for flavour, taste for Ginjo 55% - 60%, and Yamada-nishiki 50% - 55% is a popular blend for most sake production in Japan.</p>
                </>
            ),
            imageSrc: '/images/Pages/Itano-Shuzo/Itano2.png',
        },
        {
            title: 'Water',
            content: (
                <>
                    <p>Mineral-rich fresh spring well water.</p>
                    <p>It has a similar PH level like soft water which can melt in your mouth when drinking pure sake or cocktails with Itano Shuzo&apos;s sake.</p>
                </>
            ),
            imageSrc: '/images/Pages/Itano-Shuzo/Itano3.png',
        },
        {
            title: 'Brewing Character',
            content: (
                <>
                    <p>Their brewing process aims for balancing a delicate mix of flavours with high drinkability quotient. With this, they represent the values of &quot;deep&quot; and &quot;refreshing&quot; in their sake.</p>
                    <p>However, they do not pursue exaggerated tastes or aromas, but instead opt for elegance in craftsmanship. Their sake has a rounded mouthfeel, smoothly spreading in the mouth creating a burst of flavour sensations at the second sip.</p>
                    <p>It&apos;s a very pleasant and light texture of drinkability and enjoyment as an everyday drink.</p>
                    <p>With the art of handing down brewing traditions associated with specific regions in Japan and in order to be approved, rigorous care is taken to preserve, value, nurture, and document these traditions.</p>
                    <p>It is said that &quot;the heart and soul of sake brewing processes lies within production&quot;.</p>
                </>
            ),
            imageSrc: '/images/Pages/Itano-Shuzo/Itano4.png',
        },
        {
            title: 'Toji - Production Chief',
            content: (
                <>
                    <p>The heart and soul of sake brewing processes lies within production and is responsible for every step of the production process.</p>
                    <p>With the art of handing down brewing traditions associated with specific regions in Japan and in order to be approved, rigorous care is taken to preserve, value, nurture, and document these traditions.</p>
                    <p>To become a certified and licensing brewing Toji, it takes 15 years of diligent study to truly understand the art, to be able to do the techniques naturally and to control the brewery&apos;s processes.</p>
                    <p>It is said that &quot;the heart and soul of sake brewing processes lies within production&quot;.</p>
                </>
            ),
            imageSrc: '/images/Pages/Itano-Shuzo/Itano5.png',
        },
    ];

    return (
        <PartnerPageTemplate
            heroTitle="Itano-Shuzo"
            heroImage="/images/Pages/Itano-Shuzo/Hero.jpg"
            introContent="Itano-shuzo is in the historical heart of Okayama Prefecture, situated in Ashimori town, a place where a Shogun, general who later ruled the entire country started in the late 1500s. The brewery is deeply rooted in the Edo era and still continues its legacy of handcrafting and expresses its generations of knowledge and expertise. By exclusively using locally sourced ingredients and relying on the natural environment for the entire production process, the brewery maintains the original character and purity of handcrafting and expresses its generations of knowledge and expertise."
            sections={sections}
        />
    );
};

export default ItanoShuzoPage;