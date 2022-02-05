import { PureComponent } from 'react';
import { storeContext } from './context';

export const connect = (mapStateToProps, mapDispatchToProps) => {
  return function enhanceHOC(WrappedComponent) {
    // storeState在这里没什么用 只是用来触发re render
    class EnhanceComponent extends PureComponent<any, any> {
      unsubscribe;
      constructor(props, context) {
        super(props, context);
        this.state = {
          storeState: mapStateToProps(context.getState()),
        };
      }
      componentDidMount() {
        this.unsubscribe = this.context.subscribe(() => {
          this.setState({
            storeState: mapStateToProps(this.context.getState()),
          });
        });
      }
      componentWillUnmount() {
        this.unsubscribe();
      }
      render() {
        return (
          <WrappedComponent
            {...this.props}
            {...mapStateToProps(this.context.getState())}
            {...mapDispatchToProps(this.context.dispatch)}
          />
        );
      }
    }

    EnhanceComponent.contextType = storeContext;

    return EnhanceComponent;
  };
};
