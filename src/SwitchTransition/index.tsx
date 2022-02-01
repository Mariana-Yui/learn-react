import React, { PureComponent } from 'react';
import { CSSTransition, SwitchTransition } from 'react-transition-group';
import './style.css';

export class ButtonTransition extends PureComponent<any, any> {
  state = {
    isOn: true,
  };
  render() {
    const { isOn } = this.state;
    return (
      <div style={{ textAlign: 'center' }}>
        <SwitchTransition mode="out-in">
          <CSSTransition key={isOn ? 'on' : 'off'} classNames="slide" timeout={300}>
            <button onClick={() => this.setState({ isOn: !isOn })}>{isOn ? 'on' : 'off'}</button>
          </CSSTransition>
        </SwitchTransition>
      </div>
    );
  }
}

export default ButtonTransition;
