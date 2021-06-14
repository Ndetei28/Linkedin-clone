import styled from "styled-components";

const PostModal = (props) => {
  return (
    <Container>
      <Content>
        <Header>
          <h2>Share your thoughts</h2>
          <button>
            <img src="/images/cancel.svg" alt="close-icon" />
          </button>
        </Header>
        <SharedContent>
          <UserInfo>
            {props.user && props.user.photoURL ? (
              <img src={props.user.photoURL} alt="photoURL" />
            ) : (
              <img src="/images/user.svg" alt="user-default" />
            )}
            <span>{props.user ? props.user.displayName : "Name"}</span>
          </UserInfo>
        </SharedContent>
      </Content>
    </Container>
  );
};

const Container = styled.div`
  position: fixed;
  /* The styling below makes the modal come forward, taking over the entire screen */
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1000;
  color: black;
`;

const Content = styled.div`
  width: 100%;
  max-width: 552px;
  background-color: white;
  max-height: 90%;
  overflow: initial;
  border-radius: 5px;
  position: relative;
  display: flex;
  flex-direction: column;
  top: 32px;
  margin: 0 auto;
`;

const Header = styled.div`
  display: block;
  padding: 16px 20px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.15);
  font-size: 16px;
  line-height: 1.5;
  color: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: space-between;
  align-items: center;

  button {
    width: 20px;
    height: 20px;
    min-width: auto;
    color: rgba(0, 0, 0, 0.15);
    img {
      width: 20px;
    }
    svg {
      pointer-events: none;
    }
  }
`;

const SharedContent = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  overflow-y: auto;
  vertical-align: baseline;
  background: transparent;
  padding: 8px 12px;
`;

const UserInfo = styled.div`
  display: flex;
  align-items: center;
  padding: 12px 24px;

  svg,
  img {
    width: 48px;
    height: 48px;
    background-clip: content-box;
    border: 2px solid transparent;
    border-radius: 50%;
  }

  span {
    font-weight: 600;
    font-size: 16px;
    line-height: 1.5;
    margin-left: 5px;
  }
`;

export default PostModal;
