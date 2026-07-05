import { useState, useEffect } from 'react';

type BreakPoint = 'mobile' | 'tablet' | 'desktop';

export function useResponsive(): {
  breakPoint: BreakPoint;
  isMobile: boolean;
  isTablet: boolean;
  isDesktop: boolean;
} {
  const [breakPoint, setBreakPoint] = useState<BreakPoint>('desktop');

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 768) {
        setBreakPoint('mobile');
      } else if (width < 1024) {
        setBreakPoint('tablet');
      } else {
        setBreakPoint('desktop');
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Call on initial mount

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return {
    breakPoint,
    isMobile: breakPoint === 'mobile',
    isTablet: breakPoint === 'tablet',
    isDesktop: breakPoint === 'desktop',
  };
}
