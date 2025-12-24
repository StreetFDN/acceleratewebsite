'use client';

import { useState } from 'react';
import ScrollAnimation from './ScrollAnimation';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: 'Are these ERC-S tokens securities?',
      answer: 'No, ERC-S tokens are designed to avoid Security Classification. They are not considered securities and are not a wrapper of any sense.',
    },
    {
      question: 'What is Street?',
      answer: 'Street is the standard for tokenized startups. We work with founders from day zero to tokenize equity under enforceable rules - cap-table linkage, transparent sale processes, and exit alignment. This gives startups access to capital, distribution, and credibility while creating a liquid, transparent market for investors',
    },
    {
      question: 'How is this different from traditional crowdfunding and from private equity?',
      answer: 'Traditional private equity is gated - 10-year lockups, $1M minimums, insider-only dealflow. Crowdfunding gives access but often without standards or liquidity. Street bridges both: early-stage equity made liquid, transparent, and accessible under strict standards that protect founders and holders alike.',
    },
    {
      question: 'Why would I list on Street?',
      answer: 'Founders raise aligned capital, bootstrap distribution, and instantly signal credibility. 10,000 holders don\'t just fund your company - they become 10,000 promoters, users, and network nodes. It\'s capital plus adoption in a single move.',
    },
    {
      question: 'Do other people trust ERC-S?',
      answer: 'We onboarded our first champion startup ($40M valuation) in week one, which generated 8,000 signups and 2,000+ active users after tokenization. Our pipeline is growing toward $200M in equity commitments - proving that tokenized equity isn\'t theory, it\'s already working',
    },
  ];

  const toggleQuestion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="bg-background-off-white py-24">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        <ScrollAnimation>
          <div className="mb-8 flex flex-col md:flex-row md:items-start md:justify-between md:gap-8">
            {/* Left side - Heading */}
            <div className="mb-8 md:mb-0">
              <h2 className="text-section-heading text-black mb-2">
                Got questions?
              </h2>
              <p className="text-xl md:text-2xl text-gray-600 leading-relaxed">
                Find the answers.
              </p>
            </div>

            {/* Right side - CTA */}
            <div className="flex flex-col items-start md:items-end">
              <p className="text-black mb-4">Any more questions?</p>
              <a
                href="mailto:team@street.app"
                className="inline-flex items-center gap-2 border border-black rounded-full px-6 py-3 text-base font-medium text-black bg-transparent hover:bg-black/5 transition-all duration-200"
              >
                <span>Reach out</span>
                <svg 
                  className="w-3 h-3 text-black" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                  strokeWidth={3}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>
        </ScrollAnimation>

        <div className="space-y-0 mt-8">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-black">
              <ScrollAnimation delay={index * 100}>
                <button
                  onClick={() => toggleQuestion(index)}
                  className="w-full py-6 flex items-center justify-between text-left hover:opacity-80 transition-opacity duration-200"
                >
                  <span className="text-xl md:text-2xl italic text-black pr-8 leading-relaxed">
                    {faq.question}
                  </span>
                  <svg
                    className={`w-5 h-5 text-black flex-shrink-0 transition-transform duration-300 ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
              </ScrollAnimation>
              <div
                className={`overflow-hidden transition-all ease-in-out ${
                  openIndex === index 
                    ? 'max-h-[1000px] opacity-100 duration-500' 
                    : 'max-h-0 opacity-0 duration-700'
                }`}
              >
                <div 
                  className={`pb-6 pr-12 transition-all ease-in-out ${
                    openIndex === index 
                      ? 'opacity-100 translate-y-0 duration-500 delay-100' 
                      : 'opacity-0 translate-y-4 duration-300'
                  }`}
                >
                  <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
