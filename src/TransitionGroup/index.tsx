import React, { PureComponent } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import './style.css';

export class ListTransition extends PureComponent<any, any> {
  state = {
    list: ['lilei'],
  };
  render() {
    return (
      <div style={{ textAlign: 'center', marginTop: 20 }}>
        <TransitionGroup>
          {this.state.list.map((item, index) => {
            return (
              <CSSTransition key={index} timeout={300} classNames="name">
                <div>{item}</div>
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
      list: [...this.state.list, 'hanmeimei'],
    });
  }
}

export default ListTransition;
