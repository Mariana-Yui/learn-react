import React, { Component } from 'react';
import { IStates } from './types/App';

const { Provider: MyProvider, Consumer: MyConsumer } = React.createContext({
  name: 'denis',
  age: 23,
  sex: 'boy',
});
const { Provider: ColorProvider, Consumer: ColorConsumer } = React.createContext({
  color: 'red',
});

function ListHeader() {
  return (
    <MyConsumer>
      {(value) => {
        return (
          <ColorConsumer>
            {(theme) => {
              return (
                <div>
                  <h2 style={theme}>用户昵称: {value.name}</h2>
                  <h2>用户年龄: {value.age}</h2>
                  <h2>用户性别: {value.sex}</h2>
                </div>
              );
            }}
          </ColorConsumer>
        );
      }}
    </MyConsumer>
  );
}

function List() {
  return (
    <div>
      <ListHeader />
      <ul>
        <li>1你好李焕英</li>
        <li>2你好李焕英</li>
        <li>3你好李焕英</li>
      </ul>
    </div>
  );
}
class App extends Component<any, IStates> {
  constructor(props) {
    super(props);
    this.state = {
      name: 'mariana',
      age: 4,
      sex: 'girl',
    };
  }
  render() {
    return (
      <MyProvider value={this.state}>
        <ColorProvider value={{ color: 'aliceblue' }}>
          <List />
        </ColorProvider>
      </MyProvider>
    );
  }
}

export default App;
