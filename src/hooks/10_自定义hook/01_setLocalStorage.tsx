import { useEffect, useState } from 'react';

function useLocalStorage(key): [string | null, React.Dispatch<React.SetStateAction<string | null>>] {
  const [name, setName] = useState(() => {
    return window.localStorage.getItem(key);
  });

  useEffect(() => {
    window.localStorage.setItem(key, name!);
  }, [name]);

  return [name, setName];
}

export default useLocalStorage;
