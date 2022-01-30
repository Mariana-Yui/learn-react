import styled from 'styled-components';

export const ProfileWrapper = styled.div`
  font-size: 16px;
  ul {
    list-style: none;
  }
`;

export const MyInput = styled.input.attrs({
  inputColor: 'pink',
  placeholder: '输入用户名',
})`
  outline: none;
  font-size: 20px;
  color: ${(props) => props.inputColor};
  background-color: aliceblue;
  border: 1px solid #eee;
`;
