import React, { PureComponent } from 'react';
import { createPortal } from 'react-dom';
import './style.css';

class Modal extends PureComponent<any, any> {
  private el: HTMLDivElement = document.createElement('div');
  componentDidMount() {
    document.body.appendChild(this.el);
  }
  componentWillUnmount() {
    document.body.removeChild(this.el);
  }

  render(): React.ReactNode {
    return createPortal(this.props.children, this.el);
  }
}
export class App extends PureComponent {
  render() {
    return (
      <div>
        <h2>Hello React</h2>
        <Modal>
          <h2 className="center">Modal</h2>
        </Modal>
      </div>
    );
  }
}

export default App;
