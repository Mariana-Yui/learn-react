import { decrementAction, subNumAction } from '@/store/actionCreator';
import { connect } from '@/utils/connect';

function Profile(props: any) {
  return (
    <div>
      <h2>Home</h2>
      <h2>当前计数: {props.counter}</h2>
      <div>
        <button onClick={() => props.decrement()}>-1</button>
        <button onClick={() => props.subNum(5)}>-5</button>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  counter: state.counter,
});

const mapDispatchToProps = (dispatch) => ({
  decrement() {
    dispatch(decrementAction());
  },
  subNum(num) {
    dispatch(subNumAction(num));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
