import React, { PureComponent } from 'react';
import CommentInput from './CommentInput';
import CommentItem from './CommentItem';

export class App extends PureComponent {
  state = {
    comments: [],
  };

  render() {
    return (
      <div style={{ padding: '20px' }}>
        {this.state.comments.map((comment: any, index) => {
          return <CommentItem key={comment.id} comment={comment} deleteComment={() => this.deleteComment(index)} />;
        })}
        <CommentInput addComment={(info) => this.addComment(info)} />
      </div>
    );
  }
  addComment(info) {
    this.setState({
      comments: [...this.state.comments, info],
    });
  }
  deleteComment(index) {
    const newComments = [...this.state.comments];
    newComments.splice(index, 1);
    this.setState({
      comments: newComments,
    });
  }
}

export default App;
