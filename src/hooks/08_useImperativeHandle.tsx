/**
 * useImperativeHandle防止父组件直接操作子组件, 中间做了一层代理
 */
import React, { ForwardedRef, forwardRef, MutableRefObject, useImperativeHandle, useRef } from 'react';

const MyInput = forwardRef(function MyInput(props, ref: ForwardedRef<HTMLInputElement | { focus: () => void }>) {
  const inputRef = useRef() as MutableRefObject<HTMLInputElement>;

  useImperativeHandle(
    ref,
    () => ({
      focus: () => {
        inputRef.current.focus();
      },
    }),
    [inputRef],
  );

  return <input type="text" ref={inputRef} />;
});

export default function UseImperativeHandle() {
  const ref = useRef() as MutableRefObject<HTMLInputElement>;

  return (
    <div>
      <h2>UseImperativeHandle</h2>
      <MyInput ref={ref} />
      <button onClick={() => ref.current.focus()}>聚集</button>
    </div>
  );
}
