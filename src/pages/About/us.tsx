import { useParams, useLocation } from 'react-router-dom';

function Us() {
  // params取路由中参数
  const params = useParams();
  // location.state取link设置的state
  const location = useLocation();
  console.log(location);
  return (
    <>
      <h2>用户名: mariana</h2>
      <h2>id: {params.id}</h2>
    </>
  );
}

export default Us;
