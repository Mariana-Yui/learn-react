import React, { PureComponent } from 'react';
import { Button, Card, Avatar } from 'antd';
import { CSSTransition } from 'react-transition-group';
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import './style.css';

export class CardTransition extends PureComponent<any, any> {
  state = {
    isShow: true,
  };
  render() {
    const { isShow } = this.state;
    return (
      <div>
        <Button type="primary" onClick={() => this.setState({ isShow: !isShow })}>
          显示/隐藏
        </Button>
        <CSSTransition
          in={isShow}
          timeout={500}
          classNames="fade"
          appear
          unmountOnExit={true}
          onEnter={(el) => console.log('我要进来咯')}
          onEntering={(el) => console.log('我正在进来哦')}
          onEntered={(el) => console.log('我已经进来了哦')}
          onExit={(el) => console.log('我要出来咯')}
          onExiting={(el) => console.log('我正在出来哦')}
          onExited={(el) => console.log('我已经出来了哦')}>
          <Card
            style={{ width: 300, marginTop: 10 }}
            cover={<img alt="example" src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png" />}
            actions={[
              <SettingOutlined key="setting" />,
              <EditOutlined key="edit" />,
              <EllipsisOutlined key="ellipsis" />,
            ]}>
            <Card.Meta
              avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
              title="Card title"
              description="This is the description"
            />
          </Card>
        </CSSTransition>
      </div>
    );
  }
}

export default CardTransition;
