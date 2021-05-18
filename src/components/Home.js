import styled from "styled-components";
import LeftSide from "./LeftSide";
import Main from "./Main";
import RightSide from "./RightSide";

const Home = (props) => {
    return (
        <Container>
            <Section>
                <h5>
                    <a href="/">
                        In need of quality talent? - 
                    </a>                    
                </h5>
                <p>
                    Find amazing individuals in record time in UpWork
                    and give your business the best.
                </p>
            </Section>

            <Layout>
                <LeftSide />
                <Main />
                <RightSide />
            </Layout>
        </Container>
    );
};

const Container = styled.div`
    padding-top: 52px;
    max-width:100%;

`;

// const Content  = styled.div`
//     max-width: 1128px;
//     text-align:center
// `;

const Section = styled.section`
    min-height: 10px;
    margin-top:10px;
    padding: 16px 0;
    box-sizing: content-box;
    text-align: center;
    display: flex;
    justify-content: center;

    h5{
        color: rgba(0,0,0,0.6);
        font-size: 14px;
        a{
            color: #0a66c2;
            font-size: 700;
        }
    }

    p{
        font-size: 14px;
        font-weight: 600;
    }

    @media(max-width:768px){
        flex-direction: column;
        padding: 0 5px;
    }


`;

const Layout = styled.div`
    display: grid;
    grid-template-areas: "Leftside main rightside";
    grid-template-columns: minmax(0, 5fr) minmax(0, 12fr) minmax(300px, 7fr);
    column-gap: 25px;
    row-gap: 25px;
    margin: 25px 0;
    border: 1px solid black;
    padding: 10px;
    
    @media(max-width: 768px){
        display: flex;
        flex-direction:column;
        padding: 10px;
    }
`;


export default Home;