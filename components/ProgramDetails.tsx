'use client';

import ScrollAnimation from './ScrollAnimation';

const ProgramDetails = () => {
  const benefits = [
    {
      heading: 'Tokenization allows you to distribute your startup to millions of users',
      body: 'Tokenization brings your product in front of millions of potential users that will battle test your startup & give you real time feedback.',
    },
    {
      heading: 'Create valuable tokens without it being considered a security',
      body: 'We invented ERC-S, a legal and onchain framework to route economic upside of a startup to token holders without it being a security under Howey.',
    },
    {
      heading: 'Bootstrap 10,000 promoters & UGCs for your startup in a week.',
      body: 'The network effect of retail investors that are financially incentivized of the success of your startup is incomparable. Turn your holders into promoters.',
    },
  ];

  return (
    <section id="program" className="bg-background-off-white py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <ScrollAnimation>
          <div className="mb-12">
            {/* Heading */}
            <div className="mb-8">
              <h2 className="text-section-heading text-black">
                pre-seed, but dont have<br />
                enough traction?
              </h2>
            </div>

            {/* Read the Whitepaper Button */}
            <div className="mb-8">
              <a
                href="https://streetmemo.notion.site/The-ERC-S-Standard-v0-3-297463bea9d4811ca273cee5c378796d"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border border-black rounded-full px-6 py-3 text-base font-medium text-black bg-transparent hover:bg-black/5 transition-all duration-200"
              >
                <span>Read the Whitepaper</span>
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
          </div>
        </ScrollAnimation>

        {/* Three Columns of Benefits */}
        <ScrollAnimation delay={100}>
          <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-12">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center md:text-left">
                <h3 className="text-xl md:text-2xl italic text-black mb-4 leading-relaxed">
                  {benefit.heading}
                </h3>
                <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                  {benefit.body}
                </p>
              </div>
            ))}
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
};

export default ProgramDetails;
