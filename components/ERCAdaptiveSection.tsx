'use client';

import { useState } from 'react';
import AdaptiveGraphic from './AdaptiveGraphic';
import ScrollAnimation from './ScrollAnimation';

const ERCAdaptiveSection = () => {
  const [activeDataIndex, setActiveDataIndex] = useState<number | null>(null);

  const dataPoints = [
    {
      id: 'users',
      value: '10K',
      description: 'new users in three months*',
      index: 0,
    },
    {
      id: 'impressions',
      value: '24M',
      description: 'in new X impressions after 3 months*',
      index: 1,
    },
    {
      id: 'funding',
      value: '$2M',
      description: 'in funding by volume fees*',
      index: 2,
    },
  ];

  return (
    <section id="portfolio" className="bg-background-off-white py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Side: SVG Graphic - Always first */}
          <div className="h-[500px] w-full order-1 lg:order-1 flex justify-center bg-transparent lg:translate-y-[140px]">
            <div className="w-full h-full max-w-[500px] max-h-[500px]">
              <AdaptiveGraphic activeDataIndex={activeDataIndex} />
            </div>
          </div>

          {/* Right Side: Content - Always second */}
          <div className="order-2 lg:order-2">
            <ScrollAnimation>
              <h2 className="text-section-heading text-gray-600 mb-12">
                ERC-S is able to <span className="text-black font-bold">adapt</span> to your needs.
              </h2>
            </ScrollAnimation>

            <div className="space-y-0">
              {dataPoints.map((point, index) => (
                <ScrollAnimation key={point.id} delay={index * 100}>
                  <div
                    className="py-6 border-b border-black last:border-b-0 cursor-pointer transition-all duration-300"
                    onMouseEnter={() => setActiveDataIndex(point.index)}
                    onMouseLeave={() => setActiveDataIndex(null)}
                  >
                    <div className="text-5xl md:text-6xl font-bold text-black mb-2">
                      {point.value}
                    </div>
                    <div className="text-base md:text-lg text-gray-600">
                      {point.description}
                    </div>
                  </div>
                </ScrollAnimation>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ERCAdaptiveSection;

