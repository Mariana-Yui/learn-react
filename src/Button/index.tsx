import React, { PureComponent } from 'react';
import { ButtonWrapper, MyButton, MyInheritButton } from './style';

export class Button extends PureComponent {
  render() {
    return (
      <ButtonWrapper>
        <MyButton>我是一个按钮</MyButton>
        <hr />
        <MyInheritButton>我是继承的按钮</MyInheritButton>
      </ButtonWrapper>
    );
  }
}

export default Button;
