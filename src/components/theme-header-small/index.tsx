import React, { memo } from 'react';
import { HeaderWrapper } from './style';

const ThemeHeaderSmall = memo((props: { title: string; more?: string }) => {
  const { title, more } = props;

  return (
    <HeaderWrapper>
      <h3>{title}</h3>
      <a href="/abc">{more}</a>
    </HeaderWrapper>
  );
});

export default ThemeHeaderSmall;
