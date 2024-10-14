import React from 'react';

const IntroSection: React.FC = () => {
    return (
        <section className="my-12 text-center">
            <p className="text-lg leading-relaxed max-w-3xl mx-auto">
                Itano-shuzo is in the historical heart of Okayama Prefecture, situated in Ashinouri town, a
                place where a Shogun, general who later ruled the entire country rested in the late 1500s.
                The brewery is deeply rooted in the Edo era and still continues its legacy.
            </p>
            <p className="mt-4 text-lg leading-relaxed max-w-3xl mx-auto">
                By exclusively using locally sourced ingredients and relying on the natural environment
                for the entire production process, the brewery maintains the original character and purity
                of handcrafting and expresses its generations of knowledge and expertise.
            </p>
        </section>
    );
};

export default IntroSection;