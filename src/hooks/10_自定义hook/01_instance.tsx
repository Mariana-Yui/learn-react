import React from 'react';
import useLocalStorage from './01_setLocalStorage';

export default function CustomDataStoreHook() {
  const [name, setName] = useLocalStorage('name');
  return (
    <div>
      <h2>自定义hook1 CustomDataStoreHook</h2>
      <h3>Name: {name}</h3>
      <button onClick={(e) => setName('Kobe')}>设置name</button>
    </div>
  );
}
