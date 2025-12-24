'use client';

import ScrollAnimation from './ScrollAnimation';
import VideoPlayer from './VideoPlayer';
import MovingBanner from './MovingBanner';

const Hero = () => {
  const handleCTAClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const element = document.querySelector('#apply');
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section className="relative min-h-screen pt-20 flex flex-col">
      {/* Hero Content with Gradient Background */}
      <div 
        className="flex-1 flex justify-center pt-12 pb-12"
        style={{
          background: 'linear-gradient(to right, #f0ebcc, #afc5d4)'
        }}
      >
        <div className="mx-auto max-w-7xl w-full px-6 lg:px-8">
          {/* Hero Text Content */}
          <ScrollAnimation>
            <div className="max-w-4xl mx-auto text-center">
              {/* Top-left text with circle */}
              <div className="flex items-center justify-center gap-2 mb-6">
                <div className="w-2 h-2 bg-black rounded-full"></div>
                <span className="text-base text-black">Scale your startup with ERC-S</span>
              </div>

              {/* Main Heading */}
              <div className="mb-6">
                <h1 className="text-hero-small text-black mb-1">
                  +10,000 users, +100k&nbsp;funding
                </h1>
                <h2 className="text-hero-small italic text-[#1a1a1a]">
                  accelerate your startup&nbsp;now.
                </h2>
              </div>

              {/* Body Text */}
              <p className="text-sm md:text-base text-[#1a1a1a] leading-relaxed max-w-3xl mx-auto mb-6">
                Turn your locked equity into a growth and revenue engine without selling a single %.
              </p>
            </div>
          </ScrollAnimation>

          {/* Moving Banner - Full Width */}
          <MovingBanner />
          
          <ScrollAnimation>
            <div className="max-w-4xl mx-auto text-center">
              {/* CTA Button */}
              <div className="flex justify-center">
                <a
                  href="https://docs.google.com/forms/d/e/1FAIpQLScAGpaIFDDd2rFCmpjFUdo1U2_m4F9cXPhcRRYwmIAb04-G-g/viewform?pli=1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 border border-black rounded-full px-6 py-3 bg-transparent hover:bg-black/5 transition-all duration-200 group"
                >
                  <span className="text-base font-medium text-black">Apply Now</span>
                  <div className="w-6 h-6 bg-transparent border border-black rounded-full flex items-center justify-center">
                    <svg 
                      className="w-3 h-3 text-black" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                      strokeWidth={3}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </a>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </div>

      {/* Bottom black line */}
      <div className="w-full h-px bg-black"></div>

      {/* Video - Below the hero section */}
      <ScrollAnimation delay={200}>
        <div className="max-w-5xl mx-auto px-6 lg:px-8 py-24">
          <VideoPlayer />
        </div>
      </ScrollAnimation>
    </section>
  );
};

export default Hero;
