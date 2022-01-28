import React, { PureComponent } from 'react';
import { IStates } from './types/App';

export class App extends PureComponent<any, IStates> {
  constructor(props) {
    super(props);
    this.state = {
      friends: [
        { id: 1, name: 'lilei', age: 20 },
        { id: 2, name: 'hanmei', age: 21 },
        { id: 3, name: 'lihua', age: 22 },
      ],
    };
  }
  render() {
    return (
      <div>
        <h2>用户资料</h2>
        <ul>
          {this.state.friends.map((friend, index) => {
            return (
              <li key={friend.id}>
                姓名: {friend.name}
                年龄: {friend.age}
                <button onClick={() => this.addAge(index)}>年龄+1</button>
              </li>
            );
          })}
        </ul>
        <button onClick={() => this.increment()}>新增资料</button>
      </div>
    );
  }
  increment() {
    const newFriends = [...this.state.friends];
    newFriends.push({ id: newFriends[newFriends.length - 1].id + 1, name: 'lucy', age: 23 });
    this.setState({
      friends: newFriends,
    });
  }
  addAge(index) {
    const newFriends = [...this.state.friends];
    newFriends[index].age += 1;
    this.setState({
      friends: newFriends,
    });
  }
}

export default App;
