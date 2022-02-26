import React from 'react';
import useScrollPosition from './02_scrollPosition';

export default function showScrollHook() {
  const [scroll] = useScrollPosition();
  return (
    <div>
      <h2>自定义hook2 showScrollHook</h2>
      <h3>见右上角</h3>
      <h3 style={{ position: 'fixed', right: 0, top: 0 }}>ScrollY: {scroll}</h3>
    </div>
  );
}
