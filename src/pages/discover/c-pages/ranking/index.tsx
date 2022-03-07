import React, { memo } from 'react';
import { useLocation } from 'react-router-dom';

const Ranking = memo(() => {
  const location = useLocation();
  console.log(location.state);
  return <div>Ranking</div>;
});

export default Ranking;
