import styled from 'styled-components';

export const ButtonWrapper = styled.div`
  margin-top: 10px;
`;

export const MyButton = styled.button`
  padding: 20px 30px;
  background-color: aliceblue;
  border: 1px solid #eee;
  font-size: 20px;
  color: pink;
`;

export const MyInheritButton = styled(MyButton)`
  background-color: pink;
  color: aliceblue;
`;
