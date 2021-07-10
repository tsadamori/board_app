import styled from 'styled-components';

export const Header = () => {
  return (
    <SHeader>
      <SHeaderIcon href="/">なんでも書いていい掲示板</SHeaderIcon>
      <SHeaderMenu>
        <SHeaderMenuItem>
          <a href="/about">About</a>
        </SHeaderMenuItem>
        <SHeaderMenuItem>
          <a href="/contact">Contact</a>
        </SHeaderMenuItem>
      </SHeaderMenu>
    </SHeader>
  );
};

const SHeader = styled.header`
  background-color: #2f4f4f;
  padding: 5px 30px;
  margin: 0;
  height: 60px;
  width: 100%;
  font-size: 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  top: 0;
`;

const SHeaderIcon = styled.a`
  color: #fff;
`;

const SHeaderMenu = styled.ul`
  display: flex;
  margin-top: 20px;
  padding-right: 50px;
`;

const SHeaderMenuItem = styled.li`
  margin-right: 20px;
  font-size: 18px;
  & a {
    color: #fff;
  }
`;
