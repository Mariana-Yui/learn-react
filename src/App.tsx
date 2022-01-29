import React, { createRef, forwardRef, PureComponent } from 'react';

const MyCpn = forwardRef<HTMLHeadingElement>(function FuncCpn(props, ref) {
  return <h2 ref={ref}>MyCpn</h2>;
});
export class App extends PureComponent {
  private myRef = createRef<HTMLHeadingElement>();
  render() {
    return (
      <div>
        <MyCpn ref={this.myRef} />
        <button onClick={() => this.handleClick()}>按钮</button>
      </div>
    );
  }
  handleClick() {
    console.log(this.myRef.current);
  }
}

export default App;
