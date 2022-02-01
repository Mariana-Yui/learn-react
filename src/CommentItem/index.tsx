import React, { PureComponent } from 'react';
import { Comment, Avatar, Tooltip } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';

export class CommentItem extends PureComponent<any, any> {
  render() {
    const { avatar, author, content, datetime } = this.props.comment;
    return (
      <Comment
        author={<a>{author}</a>}
        avatar={<Avatar src={avatar} />}
        content={<p>{content}</p>}
        datetime={
          <Tooltip title={datetime.format('YYYY-MM-DD HH:mm:ss')}>
            <span>{datetime.fromNow()}</span>
          </Tooltip>
        }
        actions={[
          <span key="comment-delete" onClick={() => this.handleClickDeleteComment()}>
            <DeleteOutlined />
            删除
          </span>,
        ]}
      />
    );
  }
  handleClickDeleteComment() {
    this.props.deleteComment();
  }
}

export default CommentItem;
