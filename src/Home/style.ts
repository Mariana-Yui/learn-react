import styled from 'styled-components';

export const HomeWrapper = styled.div`
  font-size: 30px;
  color: pink;
  text-decoration: underline;

  h2,
  h3 {
    margin: 0;
  }
  .banner {
    display: flex;
    span {
      flex: 1;
      text-align: center;
      &.active {
        background-color: aliceblue;
      }
    }
  }
`;

export const TitleWrapper = styled.h3`
  font-size: ${(props) => props.theme.fontSize};
  color: ${(props) => props.theme.themeColor};
  background-color: ${(props) => props.theme.themeBgColor};
`;
