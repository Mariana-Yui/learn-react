import React, { PureComponent } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import './style.css';

export class ListTransition extends PureComponent<any, any> {
  state = {
    list: [{ id: 0, name: 'lilei' }],
  };
  render() {
    return (
      <div style={{ textAlign: 'center', marginTop: 20 }}>
        <TransitionGroup>
          {this.state.list.map((item, index) => {
            return (
              <CSSTransition key={item.id} timeout={300} classNames="name">
                <div>
                  <span style={{ marginRight: 5 }}>{item.name}</span>
                  <button onClick={() => this.removeName(index)}>删除</button>
                </div>
              </CSSTransition>
            );
          })}
        </TransitionGroup>
        <button onClick={() => this.addName()}>add name</button>
      </div>
    );
  }
  addName() {
    this.setState({
      list: [...this.state.list, { id: this.state.list.length, name: 'hanmeimei' }],
    });
  }
  removeName(index) {
    console.log(index);
    this.setState({
      list: this.state.list.filter((v, indey) => indey !== index),
    });
  }
}

export default ListTransition;
