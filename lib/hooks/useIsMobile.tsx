import { useEffect, useState } from 'react';

export default function useIsMobile(maxWidth = 700) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia(`(max-width: ${maxWidth}px)`);

    const updateMatch = () => setIsMobile(mediaQuery.matches);
    updateMatch();

    mediaQuery.addEventListener('change', updateMatch);
    return () => mediaQuery.removeEventListener('change', updateMatch);
  }, [maxWidth]);

  return isMobile;
}