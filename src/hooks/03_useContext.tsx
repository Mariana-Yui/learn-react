/**
 * useContext来替代Context.Consumer嵌套的问题, 直接就能取到传入的props
 */
import React, { useContext } from 'react';
import { UserContext, ThemeContext } from '@/index';

export default function UseContext() {
  const user = useContext(UserContext);
  const theme = useContext(ThemeContext);

  return (
    <>
      <h2>UseContext</h2>
      <div>
        {Object.entries(user).map(([key, value]) => {
          return (
            <li key={key}>
              {key} - {value}
            </li>
          );
        })}
      </div>
      <div>{theme}</div>
    </>
  );
}
