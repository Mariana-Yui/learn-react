import { ThemeContext } from '@/index';
import { UserContext } from '@/index';
import { useContext } from 'react';

function useUserContext(): [{ name: string; age: number }, string] {
  const user = useContext(UserContext);
  const theme = useContext(ThemeContext);

  return [user, theme];
}

export default useUserContext;
