'use client';

const MovingBanner = () => {
  // Placeholder text items
  const items = [
    'PLACEHOLDER TEXT',
    'PLACEHOLDER TEXT',
    'PLACEHOLDER TEXT',
    'PLACEHOLDER TEXT',
    'PLACEHOLDER TEXT',
    'PLACEHOLDER TEXT',
  ];

  // Duplicate items for seamless infinite scroll (3 sets for smooth looping)
  const duplicatedItems = [...items, ...items, ...items];

  return (
    <div className="relative w-screen overflow-hidden py-4 mb-6" style={{ marginLeft: 'calc(-50vw + 50%)', marginRight: 'calc(-50vw + 50%)' }}>
      <div className="flex animate-scroll-infinite">
        {duplicatedItems.map((item, index) => (
          <div key={index} className="flex-shrink-0 mx-6 text-black font-medium text-lg whitespace-nowrap">
            {item}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovingBanner;

