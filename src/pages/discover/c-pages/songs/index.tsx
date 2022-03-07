import React, { memo } from 'react';
import { useLocation } from 'react-router-dom';

const Songs = memo(() => {
  console.log(useLocation());
  return <div>Songs</div>;
});

export default Songs;
