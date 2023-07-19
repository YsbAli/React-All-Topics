import styled from "styled-components";

const NavBarWrapper = styled.header`
  position: relative;
  height: 100px;
  background-color: black;
`;

const Logo = styled.div`
  position: absolute;
  height: 60px;
  top: 20px;
  left: 10px;
`;

const ResourcesLinks = styled.div`
  font-weight: 300;
  position: absolute;
  top: 24px;
  right: 40px;
  letter-spacing: 1px;
`;

const Button = styled.button`
  font-size: 14px;
  font-weight: 700;
  cursor: pointer;
  padding: 15px 30px;
  border-radius: 2px;
  margin-left: 50px;
  color: #fff;
  background: blue;
  border: 0px;
  text-align: center;

  @media all and (max-width: 620px) {
    padding: 10px 9px;
    font-size: 10px;
    background: teal;
  }

  @media all and (max-width: 390px) {
    display: none;
  }
`;

const A = styled.a`
  text-decoration: none;
  color: #fff;
  cursor: pointer;
  margin-left: 50px;

  @media all and (max-width: 460px) {
    margin-left: 20px;
  }
`;

export const NavBar = () => {
  return (
    <>
      <div>
        <NavBarWrapper>
          <Logo>
            <img height="60px" src="https://styled-components.com/nav-logo.png" alt="logo" />
          </Logo>
          <ResourcesLinks>
            <Button>TRY NOW</Button>
            <A>About Us</A>
            <A>Help</A>
            <A>FAQ</A>
          </ResourcesLinks>
        </NavBarWrapper>
      </div>
    </>
  );
};
