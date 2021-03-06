import styled from "styled-components";

const RightSide = (props) => {
  return (
    <Container>
      <FollowCard>
        <Title>
          <h2>Add to your feed</h2>
          <img src="/images/feed-icon.svg" alt="feed-icon" />
        </Title>
        <FeedList>
          <li>
            <a>
              <Avatar />
            </a>
            <div>
              <span>#Linkedin</span>
              <button>Follow</button>
            </div>
          </li>
          <li>
            <a>
              <Avatar />
            </a>
            <div>
              <span>#Video</span>
              <button>Follow</button>
            </div>
          </li>
        </FeedList>
        <Recommendation>
          View all recommendations
          <img src="/images/right-icon.svg" alt="right-icon" />
        </Recommendation>
      </FollowCard>
      <BannerCard>
        <img src="/images/jobs-image.jpg" alt="banner-card" />
      </BannerCard>
    </Container>
  );
};

const Container = styled.div``;

const FollowCard = styled.div`
  text-align: center;
  overflow: hidden;
  margin-bottom: 8px;
  background-color: #fff;
  border-radius: 5px;
  position: relative;
  padding: 12px;
  border: none;
  box-shadow: 0 0 0 1px rgb(0 0 0/ 15%), 0 0 0 rgb(0 0 0/ 20%);
`;

const Title = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: space-between;
  font-size: 16px;
  width: 100%;
  color: rgba(0, 0, 0, 0.6);
`;

const FeedList = styled.ul`
  margin-top: 16px;
  li {
    display: flex;
    align-items: center;
    margin: 12px 0;
    position: relative;
    font-size: 13px;

    & > div {
      display: flex;
      flex-direction: column;
      margin-left: 10px;

      button {
        background-color: transparent;
        color: rgba(0, 0, 0, 0.6);
        box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.2);
        padding: 16px;
        align-items: center;
        border-radius: 15px;
        box-sizing: border-box;
        font-weight: 600px;
        display: inline-flex;
        justify-content: center;
        max-height: 26px;
        max-width: 480px;
        text-align: center;
        outline: none;
      }
    }
  }
`;

const Avatar = styled.div`
  background-image: url("https://static-exp1.licdn.com/sc/h/1b4vl1r54ijmrmcyxzoidwmxs");
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  width: 28px;
  height: 28px;
`;

const Recommendation = styled.a`
  color: #0a66c2;
  display: flex;
  align-items: center;
  font-size: 13px;
`;

const BannerCard = styled.div`
  text-align: center;
  overflow: hidden;
  background-color: #fff;
  border-radius: 5px;
  padding: 5px;
  margin: 0;
  border: none;
  box-shadow: 0 0 0 1px rgb(0 0 0/ 15%), 0 0 0 rgb(0 0 0/ 20%);
`;

export default RightSide;
