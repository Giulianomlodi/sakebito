import React from 'react';
import Image from 'next/image';

const HistorySection: React.FC = () => {
  return (
    <section className="my-12">
      <h2 className="text-3xl font-bold mb-6 text-center">How it started</h2>
      <div className="flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-6 md:mb-0">
          <Image
            src="/images/sake-history.jpg"
            alt="Sake Brewery History"
            width={500}
            height={300}
            objectFit="cover"
          />
        </div>
        <div className="md:w-1/2 md:pl-8">
          <p className="text-lg leading-relaxed">
            Located in a town where the culture of the Shogun Toyotomi originated in 1581, the town had still retained a long history and
            tradition as the Toyotomi era. And the name still persists to this day...
          </p>
        </div>
      </div>
    </section>
  );
};

export default HistorySection;