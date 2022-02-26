import React from 'react';
import useUserContext from './03_userHook';

export default function userHook() {
  const [user, theme] = useUserContext();
  return (
    <div>
      <h2>自定义hook3 userContextHook</h2>
      <span>
        name: {user.name} - age: {user.age}
      </span>
      <span>{theme}</span>
    </div>
  );
}
