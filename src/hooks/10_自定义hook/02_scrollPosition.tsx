import { useEffect, useState } from 'react';

function useScrollPosition(): [number, React.Dispatch<React.SetStateAction<number>> | null] {
  const [scroll, setScroll] = useState(0);
  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  });

  return [scroll, setScroll];
}

export default useScrollPosition;
