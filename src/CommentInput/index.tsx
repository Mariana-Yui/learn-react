import React, { PureComponent } from 'react';
import { Input, Button } from 'antd';
import moment from 'moment';

export class CommentInput extends PureComponent<any, any> {
  state = {
    comment: '',
  };

  render() {
    return (
      <div style={{ width: '30%' }}>
        <Input.TextArea rows={4} cols={30} value={this.state.comment} onChange={(e) => this.handleInputComment(e)} />
        <Button style={{ marginTop: '10px' }} type="primary" onClick={() => this.handleClickSubmitComment()}>
          发表评论
        </Button>
      </div>
    );
  }
  handleInputComment(e) {
    this.setState({
      comment: e.target.value,
    });
  }
  handleClickSubmitComment() {
    const info = {
      id: moment().valueOf(), // === Date.now()
      avatar: 'https://joeschmoe.io/api/v1/random',
      author: 'mariana',
      content: this.state.comment,
      datetime: moment(),
    };
    this.props.addComment(info);
    this.setState({
      comment: '',
    });
  }
}

export default CommentInput;
