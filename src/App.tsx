import React, { Fragment, PureComponent } from 'react';

export class App extends PureComponent {
  constructor(props) {
    super(props);
    console.log('App constructor');
  }
  render() {
    return (
      // 短语法<> </>
      <Fragment>
        <h2>Hello React</h2>
      </Fragment>
    );
  }
}

export default App;
