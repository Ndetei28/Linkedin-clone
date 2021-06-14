import styled from "styled-components";
import PostModal from "./PostModal";

const Main = (props) => {
  return (
    <Container>
      <ShareBox>
        <div>
          <img src="/images/user.svg" alt="user" />
          <button>
            <span>What do you want to talk about?</span>
          </button>
        </div>
        <div>
          <button>
            <img src="/images/camera.svg" alt="icon" />
            <span>Photo</span>
          </button>
          <button>
            <img src="/images/video.svg" alt="video-icon" />
            <span>Video</span>
          </button>
          <button>
            <img src="/images/calendar.svg" alt="event-icon" />
            <span>Event</span>
          </button>
          <button>
            <img src="/images/copywriting.svg" alt="event-icon" />
            <span>Write Article</span>
          </button>
        </div>
      </ShareBox>

      <div>
        <Article>
          <SharedActor>
            <a>
              <img src="/images/user.svg" alt="user" />
              <div>
                <span>Title</span>
                <span>Info</span>
                <span>Date</span>
              </div>
            </a>
            <button>
              <img src="/images/ellipsis.svg" alt="ellipsis" />
            </button>
          </SharedActor>
          <Description>Description</Description>
          <SharedImage>
            <a>
              <img src="/images/shared-image.jpg" alt="shared-image" />
            </a>
          </SharedImage>
          <SocialCounts>
            <li>
              <button>
                <img src="/images/thumb-up.svg" alt="thumbs-up" />
                <img src="/images/clap.svg" alt="clap" />
                <span>75</span>
              </button>
            </li>
            <li>
              <a>2 comments</a>
            </li>
          </SocialCounts>
          <SocialButtons>
            <button>
              <img src="/images/like.svg" alt="like" />
              <span>Like</span>
            </button>
            <button>
              <img src="/images/message.svg" alt="comment" />
              <span>Comment</span>
            </button>
            <button>
              <img src="/images/share.svg" alt="share" />
              <span>Share</span>
            </button>
            <button>
              <img src="/images/send.svg" alt="send" />
              <span>Send</span>
            </button>
          </SocialButtons>
        </Article>
      </div>
      <PostModal />
    </Container>
  );
};

const Container = styled.div``;

const CommonCard = styled.div`
  text-align: center;
  overflow: hidden;
  margin-bottom: 8px;
  background-color: #fff;
  border-radius: 5px;
  border-radius: 5px;
  position: relative;
  border: none;
  box-shadow: 0 0 0 1px rgb(0 0 0 / 15%), 0 0 0 rgb(0 0 0 / 20%);
`;

const ShareBox = styled(CommonCard)`
  display: flex;
  flex-direction: column;
  color: #958b7b;
  margin: 0 0 8px;
  background: white;

  div {
    button {
      outline: none;
      color: rgba(0, 0, 0, 0.6);
      font-size: 14px;
      line-height: 1.5;
      min-height: 48px;
      background: transparent;
      border: none;
      display: flex;
      align-items: center;
      font-weight: 600;
    }

    &:first-child {
      display: flex;
      align-items: center;
      padding: 8px 16px 0px 16px;

      img {
        width: 48px;
        border-radius: 50%;
        margin-right: 8px;
      }

      button {
        margin: 4px 0;
        flex-grow: 1;
        border-radius: 35px;
        padding-left: 16px;
        border: 1px solid rgba(0, 0, 0, 0.15);
        background-color: white;
        text-align: left;
      }
    }

    &:nth-child(2) {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-around;
      padding-bottom: 4px;

      button {
        img {
          width: 24px;
          height: 24px;
          margin: 0 4px 0 -2px;
        }

        span {
          color: grey;
        }
      }
    }
  }
`;

const Article = styled(CommonCard)`
  padding: 0;
  margin: 0 0 8px;
  overflow: visible;
`;

const SharedActor = styled.div`
  padding-right: 40px;
  flex-wrap: nowrap;
  padding: 12px 16px 0;
  margin-bottom: 8px;
  align-items: center;
  display: flex;

  a {
    margin-right: 12px;
    flex-grow: 1;
    overflow: hidden;
    display: flex;

    img {
      width: 48px;
      height: 48px;
    }

    & > div {
      display: flex;
      flex-direction: column;
      flex-grow: 1;
      flex-basis: 0;
      margin-left: 8px;
      overflow: hidden;
      span {
        text-align: left;
        &:first-child {
          font-size: 14px;
          font-weight: 700;
          color: rgba(0, 0, 0, 1);
        }
        &:nth-child(n + 1) {
          font-size: 12px;
          color: rgba(0, 0, 0, 0.6);
        }
      }
    }
  }

  button {
    position: absolute;
    right: 12px;
    top: 0;
    background: transparent;
    border: none;
    outline: none;

    img {
      width: 18px;
      height: auto;
    }
  }
`;

const Description = styled.div`
  padding: 0 15px;
  overflow: hidden;
  font-size: 14px;
  color: rgba(0, 0, 0, 0.9);
  text-align: left;
`;

const SharedImage = styled.div`
  margin-top: 8px;

  img {
    object-fit: contain;
    width: 100%;
  }
`;

const SocialCounts = styled.ul`
  line-height: 1.3;
  display: flex;
  align-items: flex-start;
  overflow: auto;
  margin: 0 16px;
  padding: 8px 0;
  border-bottom: 1px solid #e9e5df;
  list-style: none;

  li {
    margin-right: 5px;
    font-size: 12px;

    & > a {
      font-weight: 700;
      margin-left: 12px;
    }
  }

  button {
    display: flex;
    img {
      width: 18px;
      height: auto;
    }
  }
`;

const SocialButtons = styled.div`
  display: flex;
  padding: 8px 16px;

  button {
    margin-right: 16px;
    display: inline-flex;
    text-align: center;
    align-items: center;
    justify-content: center;
    padding: 2px;
    color: grey;

    img {
      width: 20px;
      height: auto;
      margin-right: 4px;
      color: grey;
    }

    span {
      font-size: 13px;
    }
  }
`;

export default Main;
