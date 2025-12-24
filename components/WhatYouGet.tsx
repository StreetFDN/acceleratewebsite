'use client';

import ScrollAnimation from './ScrollAnimation';

const WhatYouGet = () => {
  const supportItems = [
    {
      tag: '1:1 Coaching',
      description: 'Our advisors range from crypto-native founders, to traders, to web2 founders & traditional VCs.',
    },
    {
      tag: 'Team Workshops',
      description: 'We regularly host workshops in SF & Europe. We\'ll connect you with the right people to scale your startup.',
    },
    {
      tag: 'Strategy',
      description: 'Our team consists of people who have been in crypto for years. We know what performs and what doesn\'t.',
    },
    {
      tag: 'Immigration Help',
      description: 'We have a good network of immigration lawyers and o1 help. If you need to move to SF to hyperscale, we\'ll help you.',
    },
    {
      tag: 'Advisory Sprint',
      description: 'A 2-week workshop where our advisory team will help you leverage ERC-S for your startups benefit',
    },
    {
      tag: 'Leadership Mentorship',
      description: 'A blend of coaching and advisory for leaders stepping into bigger roles, managing teams, or navigating new challenges.',
    },
  ];

  return (
    <section className="bg-background-off-white py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <ScrollAnimation>
          <div className="mb-16">
            <h2 className="text-section-heading text-black mb-6">
              You've built it.<br />
              Now let's make it <span className="italic">thrive</span>.
            </h2>
          </div>
        </ScrollAnimation>

        {/* Support Items Grid - Styled like Events */}
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {supportItems.map((item, index) => (
            <ScrollAnimation key={index} delay={index * 50}>
              <div className="bg-white rounded-lg p-6 hover:shadow-lg transition-all duration-200">
                {/* Tag */}
                <div className="mb-3">
                  <span className="inline-block bg-gray-100 text-black text-xs font-medium uppercase tracking-wide px-3 py-1.5 rounded-full">
                    {item.tag}
                  </span>
                </div>
                
                {/* Description */}
                <p className="text-gray-600 leading-relaxed text-base">
                  {item.description}
                </p>
              </div>
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatYouGet;

