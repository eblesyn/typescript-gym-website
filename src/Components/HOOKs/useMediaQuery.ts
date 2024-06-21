import { useState, useEffect } from "react";

const useMediaQuery = (query: string) => {
  const [matches, setMatches] = useState(() => window.matchMedia(query).matches);

  useEffect(() => {
    const media = window.matchMedia(query);
    const listener = (event: MediaQueryListEvent) => setMatches(event.matches);
    
    media.addListener(listener);
    setMatches(media.matches); 
    
    return () => media.removeListener(listener);
  }, [query]);

  return matches;
};

export default useMediaQuery;
