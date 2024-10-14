// app/partners/takanoi-shuzo/page.tsx
'use client'

import React from 'react';
import PartnerPageTemplate, { SectionProps } from '@/components/templates/PageTemplate';

const TakanoiShuzoPage: React.FC = () => {
    const sections: SectionProps[] = [
        {
            title: 'Perseverance and Resurgence',
            content: (
                <>
                    <p>The legacy of Takanoi-Shuzo shows that their sake has the power to inspire and influence our sensibilities.</p>
                    <p>Impacted by a massive fire in 1877, the brewery&apos;s founders rebuilt the company from the ground up. This experience of rebirth cultivated passion and resilience that runs through their veins. Their origins as a sake brewery that refused to be brought down have continued to this day.</p>
                    <p>Despite more setbacks in the 20th century including economic recession and destructive earthquakes, Takanoi-Shuzo persevered and emerged stronger. Their commitment to quality and innovation has made them a respected name in the sake industry.</p>
                </>
            ),
            imageSrc: '/images/Pages/Takanoi-Shuzo/Takanoi1.jpeg',
        },
        {
            title: 'Aged in Snow: Creativity and Progression',
            content: (
                <>
                    <p>Aging sake in snow, which is now widely implemented by many breweries, was entirely pioneered by Takanoi. Inspired by the traditional custom of preserving vegetables in snow, they experimented and perfected the art of snow-aging sake.</p>
                    <p>Deep under the snow, where the temperature remains perfect and consistent with no sunlight, sake matures slowly. This process develops a smooth profile that is mellow, cold, and rich with a rounded finish. This unique aging process is what sets Takanoi&apos;s sake apart.</p>
                </>
            ),
            imageSrc: '/images/Pages/Takanoi-Shuzo/Takanoi2.png',
        },
        {
            title: 'The Art of Handcraft and Natural Process',
            content: (
                <>
                    <p>Kimoto is a wholly natural fermentation process that has long been used in traditional sake brewing.</p>
                    <p>In this fermentation process, lactic acid culture is allowed to naturally develop when the polished rice is mixed with water and malted rice. This creates an environment where only the desired yeast can survive.</p>
                    <p>Kimoto&apos;s method requires carefully controlling time and temperature gradients for several hours as the mixture continues to develop. This very pure, naturally occurring process adds rich umami and depth to the sake.</p>
                </>
            ),
            imageSrc: '/images/Pages/Takanoi-Shuzo/Takanoi5.png',
        },
        {
            title: 'Only in Niigata',
            content: (
                <>
                    <p>From the winter snows to locally sourced Niigata-san koshiki rice, Takanoi brews a deep connection with their region&apos;s culture but with sight beyond its boundaries.</p>
                    <p>It&apos;s not just the flavor that sets Takanoi apart - it&apos;s the story behind each bottle. A story of resilience, innovation, and a deep respect for tradition and craftsmanship.</p>
                    <p>With every sip of Takanoi sake, you&apos;re not just tasting premium sake - you&apos;re experiencing a piece of Niigata&apos;s history and culture, crafted with care and precision.</p>
                </>
            ),
            imageSrc: '/images/Pages/Takanoi-Shuzo/Takanoi7.png',
        },
    ];

    return (
        <PartnerPageTemplate
            heroTitle="Takanoi-Shuzo"
            heroImage="/images/Pages/Takanoi-Shuzo/Hero.jpeg"
            introContent="Rooted in the heavy snow region of Niigata, Ojiya town, Takanoi-Shuzo stands as a pioneering sake brewery that has continued since the 19th century. They are the origin of the snow-aging technique, creating a one-of-a-kind flavour that is unique to Takanoi. Their journey to this day was not smooth sailing, facing many inevitable misfortunes. However, every time they were reborn and evolved even stronger. Their sake now is some of the best in Japan and is internationally recognized."
            sections={sections}
        />
    );
};

export default TakanoiShuzoPage;