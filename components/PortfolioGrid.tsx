'use client';

import ScrollAnimation from './ScrollAnimation';

const PortfolioGrid = () => {
  // Placeholder portfolio data - replace with actual data from Street App
  const startups = [
    {
      name: 'Startup One',
      description: 'Revolutionizing the way teams collaborate',
      category: 'SaaS',
      logo: null, // Add logo path when available
    },
    {
      name: 'Startup Two',
      description: 'AI-powered solutions for healthcare',
      category: 'Healthcare',
      logo: null,
    },
    {
      name: 'Startup Three',
      description: 'Sustainable energy for the future',
      category: 'CleanTech',
      logo: null,
    },
    {
      name: 'Startup Four',
      description: 'Next-generation fintech platform',
      category: 'FinTech',
      logo: null,
    },
    {
      name: 'Startup Five',
      description: 'Transforming e-commerce experiences',
      category: 'E-commerce',
      logo: null,
    },
    {
      name: 'Startup Six',
      description: 'Innovative edtech solutions',
      category: 'EdTech',
      logo: null,
    },
  ];

  return (
    <section id="portfolio" className="bg-background-off-white py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <ScrollAnimation>
          <div className="mb-16">
            <h2 className="text-section-heading text-black mb-6">
              Portfolio
            </h2>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl leading-relaxed">
              Meet the innovative startups that have accelerated their growth through our program.
            </p>
          </div>
        </ScrollAnimation>

        {/* Portfolio Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {startups.map((startup, index) => (
            <ScrollAnimation key={index} delay={index * 50}>
              <div className="bg-background-off-white p-8 border-2 border-black hover:border-primary hover:shadow-xl transition-all duration-200 group">
                {/* Logo placeholder or actual logo */}
                <div className="w-20 h-20 bg-black rounded-lg mb-6 flex items-center justify-center group-hover:bg-primary transition-colors">
                  {startup.logo ? (
                    <img
                      src={startup.logo}
                      alt={startup.name}
                      className="w-full h-full object-contain p-2"
                    />
                  ) : (
                    <div className="text-3xl font-bold text-white">
                      {startup.name.charAt(0)}
                    </div>
                  )}
                </div>

                {/* Startup Info */}
                <div className="mb-3">
                  <span className="text-xs font-bold text-primary uppercase tracking-wider">
                    {startup.category}
                  </span>
                </div>
                <h3 className="text-2xl text-black mb-4">
                  {startup.name}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {startup.description}
                </p>
              </div>
            </ScrollAnimation>
          ))}
        </div>

        {/* View More Link */}
        <ScrollAnimation delay={300}>
          <div className="mt-12 text-center">
            <a
              href="#portfolio"
              className="inline-flex items-center text-lg font-semibold text-black hover:text-primary transition-colors"
            >
              View All Startups
              <svg
                className="ml-2 w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </a>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
};

export default PortfolioGrid;

