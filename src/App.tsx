/**
 * 高阶组件(了解) hooks出现后使用频率减少
 */
/* eslint-disable react/prop-types */
import React, { PureComponent, createContext } from 'react';

const { Provider: UserProvider, Consumer: UserConsumer } = createContext({
  name: 'default',
  level: -1,
  region: 'default',
});

const withUser = (WrappedComponent) => {
  return function NewUser(props) {
    return (
      <UserConsumer>
        {(user) => {
          return <WrappedComponent {...props} {...user} />;
        }}
      </UserConsumer>
    );
  };
};

function User1(props) {
  return <h2>{`姓名: ${props.name} 等级: ${props.level} 区域: ${props.region}`}</h2>;
}
function User2(props) {
  return (
    <ul>
      <li>姓名: {props.name}</li>
      <li>等级: {props.level}</li>
      <li>区域: {props.region}</li>
    </ul>
  );
}

const NewUser1 = withUser(User1);
const NewUser2 = withUser(User2);

const withAuth = (WrappedComponent) => {
  return function NewAuth(props) {
    const { login } = props;
    if (login) {
      return <WrappedComponent {...props} />;
    } else {
      return <LoginPage {...props} />;
    }
  };
};

function CardPage() {
  return <h2>CardPage</h2>;
}

function LoginPage() {
  return <h2>LoginPage</h2>;
}

const AuthPage = withAuth(CardPage);

const withRenderTime = (WrappedComponent) => {
  return class NewTimeCpn extends PureComponent {
    private startTime = 0;
    private endTime = 0;
    UNSAFE_componentWillMount() {
      this.startTime = Date.now();
    }
    componentDidMount() {
      this.endTime = Date.now();
      const interval = this.endTime - this.startTime;
      console.log(`${WrappedComponent.name}: 渲染耗时: ${interval}`);
    }
    render(): React.ReactNode {
      return <WrappedComponent />;
    }
  };
};

function RenderCpn() {
  return <img src="https://w.wallhaven.cc/full/z8/wallhaven-z8dg9y.png" />;
}
const NewTimeCpn = withRenderTime(RenderCpn);
export class App extends PureComponent {
  render() {
    return (
      <div>
        <UserProvider value={{ name: '李雷', level: 99, region: '中国' }}>
          <NewUser1 />
          <NewUser2 />
        </UserProvider>
        <AuthPage login={true} />
        <NewTimeCpn />
      </div>
    );
  }
}

export default App;
