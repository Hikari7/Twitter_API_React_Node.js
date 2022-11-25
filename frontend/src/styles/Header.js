import styled from "styled-components";

export const Header = styled.div`
  background: #14171a;
  width: 100%;
  height: 120px;
`;

export const HeaderContent = styled.div`
  display: flex;
  width: 80%;
  margin: 0 auto;
  padding: 36px;
  justify-content: center;

  .logo {
    height: 60px;
  }

  .title {
    color: #f5f8fa;
    text-align: center;
    line-height: 60px;
  }
`;
