/**
 * useEffect用于模拟类组件中的生命周期ComponentDidMounted/ComponentWillUnMount/ComponentDidUpdated
 */
import React, { useEffect, useState } from 'react';

export default function MultiEffectHook() {
  const [count, setCount] = useState(0);
  const [isLogin, setIsLogin] = useState(true);

  useEffect(() => {
    console.log('修改count', count);
  }, [count]);
  /** [S] 第二个参数是[]时模拟的是ComponentDidMounted, return的函数模拟的是ComponentWillUnMount */
  useEffect(() => {
    console.log('订阅事件');
    return () => {
      console.log('取消订阅事件', count, isLogin);
    };
  }, []);
  /** [E] 第二个参数是[]时模拟的是ComponentDidMounted, return的函数模拟的是ComponentWillUnMount */
  useEffect(() => {
    console.log('网络请求');
  }, [isLogin]);

  return (
    <div>
      <h2>02_MultiEffectHook</h2>
      <h2>{count}</h2>
      <button onClick={(e) => setCount(count + 1)}>+1</button>
      <h2>{isLogin ? 'denis' : '未登录'}</h2>
      <button onClick={(e) => setIsLogin(!isLogin)}>登录/注销</button>
    </div>
  );
}
