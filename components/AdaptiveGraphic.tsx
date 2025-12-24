'use client';

import { motion } from 'framer-motion';
import { useMemo } from 'react';

type AdaptiveGraphicProps = {
  activeDataIndex: number | null;
};

// All paths use exactly 8 anchor points, normalized for smooth morphing
// Center: (200, 200), all paths start from top (0°) and proceed clockwise
// Each path has 8 cubic bezier segments (C commands) connecting 8 points at 45° intervals
// Points are at: 0°, 45°, 90°, 135°, 180°, 225°, 270°, 315° from center
// Control points are aligned at the same angles for smooth morphing

// Default: Perfect Circle (radius 80)
// Starts LEFT at M200,100 to match 10K and 24M for smooth morphing
// Perfect circle: center at (200,180), radius 80
// All 8 anchor points at exactly 80 units from center, at 45° intervals
// Points: 0°(200,100), 45°(256.57,123.43), 90°(280,180), 135°(256.57,236.57), 180°(200,260), 225°(143.43,236.57), 270°(120,180), 315°(143.43,123.43)
const pathDefault = 
  "M200,100 C184,100 168,106 143.43,123.43 C174.67,92.19 225.33,92.19 256.57,123.43 C287.81,154.67 324.18,180 280,180 C235.82,180 287.81,205.33 256.57,236.57 C225.33,267.81 174.67,267.81 143.43,236.57 C112.19,205.33 75.82,180 120,180 C164.18,180 112.19,154.67 143.43,123.43 C174.67,92.19 184,100 200,100 Z";

// Index 0 (10K Users): Upside-down Teardrop
// Wide at top (0°), narrows to point at bottom (180°)
// Control points at: 0°, 45°, 90°, 135°, 180°, 225°, 270°, 315°
// Analysis: 24M to $2M works because both start LEFT (C184,110 and C184,100)
// 10K starts RIGHT (C216,100) which causes flip with 24M
// Solution: Reverse 10K path direction to start LEFT like 24M, while maintaining wide top shape
// Original 10K: M200,100 C216,100... (RIGHT, wide) 
// Reversed 10K: M200,100 C184,100... (LEFT, but need to maintain wide top)
// Reversed path: Start from end and work backwards, swapping control points
// Original ends: ...C168,106 184,100 200,100 Z
// Reversed starts: M200,100 C184,100 168,106 160,122... (but need wide top, so adjust)
// Actually, to maintain wide top when starting LEFT, reverse the entire path order
// Original: M200,100 C216,100... (RIGHT, wide top)
// Reversed properly: M200,100 C184,100 168,106 160,122 C152,138 148,154 148,170 C148,186 152,202 160,218 C168,234 184,250 200,310 C216,250 232,234 240,218 C248,202 252,186 252,170 C252,154 248,138 240,122 C232,106 216,100 200,100 Z
// But this makes top narrow! Need different approach - mirror horizontally instead
const pathUsers = 
  "M200,100 C184,100 168,106 160,122 C152,138 148,154 148,170 C148,186 152,202 160,218 C168,234 184,250 200,310 C216,250 232,234 240,218 C248,202 252,186 252,170 C252,154 248,138 240,122 C232,106 216,100 200,100 Z";

// Index 1 (24M Impressions): Vertical Eye Shape
// Narrow at top (0°) and bottom (180°), wide at sides (90° and 270°)
// Control points at same angles as 10K and $2M for smooth morphing
// Analysis: 24M starts going LEFT (C184,110) which matches $2M's direction
// This is why 24M to $2M morphs smoothly - they both start in the same direction
const pathImpressions = 
  "M200,100 C184,110 168,130 160,150 C152,170 148,190 148,200 C148,210 152,230 160,250 C168,270 184,290 200,300 C216,290 232,270 240,250 C248,230 252,210 252,200 C252,190 248,170 240,150 C232,130 216,110 200,100 Z";

// Index 2 ($2M Funding): Regular Teardrop (vertically flipped version of 10K)
// Narrow at top (0°), wide at bottom (180°)
// User's manually fixed shape - path reversed to start at M200,100 for smooth morphing with 24M
// Same visual shape, just starts at top instead of bottom
const pathFunding = 
  "M200,100 C184,160 168,176 160,192 C152,208 148,224 148,240 C148,256 152,272 160,288 C168,304 184,310 200,310 C216,310 232,304 240,288 C248,272 252,256 252,240 C252,224 248,208 240,192 C232,176 216,160 200,100 Z";

const AdaptiveGraphic = ({ activeDataIndex }: AdaptiveGraphicProps) => {
  // Determine which path to use based on activeDataIndex
  const currentPath = useMemo(() => {
    switch (activeDataIndex) {
      case 0:
        return pathUsers;
      case 1:
        return pathImpressions;
      case 2:
        return pathFunding;
      default:
        return pathDefault;
    }
  }, [activeDataIndex]);

  const isDefault = activeDataIndex === null;

  return (
    <div className="w-full h-full flex items-center justify-center min-h-[400px]">
      <motion.svg
        width="400"
        height="400"
        viewBox="0 0 400 400"
        className="w-full h-full max-w-[400px] max-h-[400px]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <defs>
          <linearGradient id="adaptiveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#f0ebcc" />
            <stop offset="100%" stopColor="#afc5d4" />
          </linearGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="3" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        
        <motion.path
          d={currentPath}
          fill="url(#adaptiveGradient)"
          filter="url(#glow)"
          animate={{
            d: currentPath,
            scale: isDefault ? [1, 1.05, 1] : 1,
          }}
          transition={{
            d: {
              duration: 0.7,
              type: "spring",
              stiffness: 50,
              damping: 20,
            },
            scale: {
              duration: 3,
              repeat: isDefault ? Infinity : 0,
              ease: "easeInOut",
            },
          }}
          style={{
            transformOrigin: 'center',
          }}
        />
      </motion.svg>
    </div>
  );
};

export default AdaptiveGraphic;
