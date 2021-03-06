/* eslint-disable jsx-a11y/anchor-is-valid */
import { connect } from "react-redux";
import styled from "styled-components";
import { signOutAPI } from "../actions";

const Header = (props) => {
  return (
    <Container>
      <Content>
        <Logo>
          <a href="/home">
            <img src="/images/home-logo.svg" alt="home-logo" />
          </a>
        </Logo>
        <Search>
          <div>
            <input type="text" placeholder="Search" />
          </div>
          <SearchIcon>
            <img src="/images/search-icon.svg" alt="search-icon" />
          </SearchIcon>
        </Search>
        <Nav>
          <NavListWrap>
            <NavList className="active">
              <a>
                <img src="/images/nav-home.svg" alt="nav-home" />
                <span>Home</span>
              </a>
            </NavList>
            <NavList>
              <a>
                <img src="/images/nav-network.svg" alt="nav-home" />
                <span>My Networks</span>
              </a>
            </NavList>
            <NavList>
              <a>
                <img src="/images/nav-jobs.svg" alt="nav-home" />
                <span>Jobs</span>
              </a>
            </NavList>
            <NavList>
              <a>
                <img src="/images/nav-messaging.svg" alt="nav-home" />
                <span>Messaging</span>
              </a>
            </NavList>
            <NavList>
              <a>
                <img src="/images/nav-notifications.svg" alt="nav-home" />
                <span>Notifications</span>
              </a>
            </NavList>
            <User>
              <a>
                {props.user && props.user.photoURL ? (
                  <img src={props.user.photoURL} alt="photoURL" />
                ) : (
                  <img src="/images/user.svg" alt="user-default" />
                )}
                <span>
                  <img src="/images/down-icon.svg" alt="drop-down" />
                </span>
              </a>

              <SignOut>
                <a onClick={() => props.signOut()}>Sign out</a>
              </SignOut>
            </User>
            <Work>
              <a>
                <img src="/images/nav-work.svg" alt="drop-down" />
                <img src="/images/down-icon.svg" alt="drop-down" />
              </a>
            </Work>
          </NavListWrap>
        </Nav>
      </Content>
    </Container>
  );
};

const Container = styled.div`
  background-color: white;
  border-bottom: 1px solid rgba(0, 0, 0, 0.08);
  left: 0;
  padding: 0 24px;
  position: fixed;
  top: 0;
  width: 100vw;
  z-index: 10;
`;

const Content = styled.div`
  display: flex;
  align-items: center;
  margin: 0 auto;
  min-height: 100%;
  max-width: 1128px;
`;

const Logo = styled.span`
  margin-right: 8px;
  font-size: 0;
  padding: 5px;
`;

const Search = styled.div`
  opacity: 1;
  flex-grow: 1;
  position: relative;

  & > div {
    max-width: 280px;
    input {
      border: none;
      box-shadow: none;
      background-color: #eef3f8;
      border-radius: 2px;
      color: rgba(0, 0, 0, 0.9);
      width: 325px;
      padding: 0 8px 0 40px;
      line-height: 1.75;
      font-weight: 400;
      font-size: 14px;
      height: 34px;
      border-color: #dce6f1;
      font-family: "Noto Sans JP", sans-serif;
      vertical-align: text-top;
    }
  }
`;

const SearchIcon = styled.div`
  width: 40px;
  position: absolute;
  z-index: 1;
  top: 10px;
  left: 2px;
  border-radius: 0 2px 2px 0;
  margin: 0;
  pointer-events: none;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Nav = styled.nav`
  margin-left: auto;
  display: block;
  cursor: pointer;
  @media (max-width: 768px) {
    position: fixed;
    left: 0;
    bottom: 0;
    background: white;
    width: 100%;
  }
`;

const NavListWrap = styled.ul`
  display: flex;
  flex-wrap: nowrap;
  list-style-type: none;

  .active {
    span:after {
      content: "";
      transform: scaleX(1);
      bottom: 0;
      left: 0;
      position: absolute;
      transition: transform 0.2s ease-in-out;
      width: 100%;
      border-color: rgba(0, 0, 0, 0.9);
      color: rgba(0, 0, 0, 0.9);
    }
  }
`;

const NavList = styled.li`
  display: flex;
  align-items: center;

  a {
    align-items: center;
    background: transparent;
    display: flex;
    flex-direction: column;
    font-size: 12px;
    font-weight: 400;
    justify-content: center;
    line-height: 1.5;
    min-height: 42px;
    min-width: 80px;
    text-decoration: none;
  }

  span {
    color: rgba(0, 0, 0, 0.6);
    display: flex;
    align-items: center;
  }

  @media (max-width: 768px) {
    min-width: 70px;
    padding: 0;
    margin: 0;

    img {
      display: flex;
      text-align: center;
      align-items: center;
    }

    span {
      font-size: 12px;
    }
  }

  &:hover,
  &:active {
    a {
      span {
        color: rgba(0, 0, 0, 0.9);
      }
    }
  }
`;

const SignOut = styled.div`
  position: absolute;
  top: 45px;
  background: white;
  border-radius: 0 0 5px 5px;
  width: 100px;
  height: 40px;
  font-size: 14px;
  transition-duration: 167ms;
  text-align: center;
  display: none;
`;

const User = styled(NavList)`
  a > img {
    width: 24px;
    height: 24px;
    border-radius: 50%;
  }

  span {
    display: flex;
    align-items: center;
  }

  &:hover {
    ${SignOut} {
      align-items: center;
      display: flex;
      justify-content: center;
    }
  }
`;

const Work = styled.div`
  display: none;
`;

const mapStateToProps = (state) => {
  return {
    user: state.userState.user,
  };
};

const mapDispatchToProps = (dispatch) => ({
  signOut: () => dispatch(signOutAPI()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
