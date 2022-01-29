import React, { PureComponent } from 'react';
import { IStates } from './types/App';

type KeyOfIState = keyof IStates;

export class App extends PureComponent<any, IStates> {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      fruit: '',
      check: false,
    };
  }
  render() {
    const { username, password, fruit } = this.state;
    return (
      <form>
        <div>
          <label htmlFor="username">用户:</label>
          <input type="text" name="username" id="username" value={username} onChange={(e) => this.handleChange(e)} />
        </div>
        <div>
          <label htmlFor="password">密码:</label>
          <input
            type="password"
            name="password"
            id="password"
            value={password}
            onChange={(e) => this.handleChange(e)}
          />
        </div>
        <div>
          <label htmlFor="fruit">水果:</label>
          <select name="fruit" id="fruit" value={fruit} onChange={(e) => this.handleChange(e)}>
            <option value="apple">苹果</option>
            <option value="banana">香蕉</option>
            <option value="orange">橘子</option>
          </select>
        </div>
        <button type="submit" onClick={(e) => this.handleSubmit(e)}>
          提交
        </button>
      </form>
    );
  }
  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    } as Pick<IStates, KeyOfIState>);
  }
  handleSubmit(e) {
    e.preventDefault();
    const { username, password, fruit } = this.state;
    console.log(username, password, fruit);
  }
}

export default App;
