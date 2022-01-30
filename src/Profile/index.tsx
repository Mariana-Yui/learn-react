import React, { PureComponent } from 'react';
import { MyInput, ProfileWrapper } from './style';

export class Profile extends PureComponent {
  render() {
    return (
      <ProfileWrapper>
        <h2>我是Profile信息</h2>
        <ul>
          <li>设置1</li>
          <li>设置2</li>
          <li>设置3</li>
          <li>设置4</li>
        </ul>
        <MyInput type="text" />
      </ProfileWrapper>
    );
  }
}

export default Profile;
