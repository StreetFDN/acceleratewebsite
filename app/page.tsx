import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProgramDetails from "@/components/ProgramDetails";
import WhatYouGet from "@/components/WhatYouGet";
import ERCAdaptiveSection from "@/components/ERCAdaptiveSection";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import ScrollAnimation from "@/components/ScrollAnimation";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <ProgramDetails />
      <WhatYouGet />
      <ERCAdaptiveSection />
      <FAQ />
      
      {/* Apply Section */}
      <section id="apply" className="bg-background-off-white pt-6 pb-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <ScrollAnimation>
            <div className="max-w-3xl mx-auto text-center">
              <div className="flex justify-center mb-8">
                <Image
                  src="/streetmono.png"
                  alt="Street"
                  width={200}
                  height={100}
                  className="object-contain"
                />
              </div>
              <h2 className="text-section-heading text-black mb-6">
                Ready to Accelerate?
              </h2>
              <p className="text-xl md:text-2xl text-gray-600 mb-12 leading-relaxed">
                Join us now.
              </p>
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLScAGpaIFDDd2rFCmpjFUdo1U2_m4F9cXPhcRRYwmIAb04-G-g/viewform?pli=1"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border border-black rounded-full px-6 py-3 text-base font-medium text-black bg-transparent hover:bg-black/5 transition-all duration-200"
              >
                <span>Apply Now</span>
                <div className="w-5 h-5 bg-transparent border border-black rounded-full flex items-center justify-center">
                  <svg 
                    className="w-2.5 h-2.5 text-black" 
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
          </ScrollAnimation>
        </div>
      </section>
      
      <Footer />
    </>
  );
}
