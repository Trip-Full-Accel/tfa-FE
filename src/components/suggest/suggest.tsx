import styled from "styled-components";
import { Fade } from "react-awesome-reveal";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import "./suggest.css";
import { useNavigate } from "react-router-dom";

const Suggest = () => {
  const navigate = useNavigate();

  const linkTo = (path: string) => {
    navigate(path);
  };
  return (
    <Tabs>
      <TabList>
        <Tab>낮</Tab>
        <Tab style={{ backgroundColor: "black", color: "white" }}>밤</Tab>
      </TabList>
      <TabPanel>
        <DayDiv>
          <TitleDiv>사용자들이 최근에 간 여행지예요!</TitleDiv>
          <ImgDiv>
            <Fade direction="down">
              <TravelImg
                onClick={() => {
                  linkTo("/board");
                }}
                src="/img/seoul/seoul2.jpg"
              />
            </Fade>
            <Fade direction="down" delay={200}>
              <TravelImg
                onClick={() => {
                  linkTo("/board");
                }}
                src="/img/seoul/seoul3.jpg"
              />
            </Fade>
            <Fade direction="down" delay={300}>
              <TravelImg
                onClick={() => {
                  linkTo("/board");
                }}
                src="/img/seoul/seoul4.jpg"
              />
            </Fade>
            <Fade direction="down" delay={400}>
              <TravelImg
                onClick={() => {
                  linkTo("/board");
                }}
                src="/img/seoul/seoul5.jpg"
              />
            </Fade>
            <Fade direction="down" delay={500}>
              <TravelImg
                onClick={() => {
                  linkTo("/board");
                }}
                src="/img/seoul/seoul1.jpg"
              />
            </Fade>
          </ImgDiv>
        </DayDiv>
      </TabPanel>
      <TabPanel>
        <NightDiv>
          <TitleDiv>사용자들이 최근에 간 여행지예요!</TitleDiv>
          <ImgDiv>
            <Fade direction="down">
              <TravelImg
                onClick={() => {
                  linkTo("/board");
                }}
                src="/img/seoul/seoul2.jpg"
              />
            </Fade>
            <Fade direction="down" delay={200}>
              <TravelImg
                onClick={() => {
                  linkTo("/board");
                }}
                src="/img/seoul/seoul3.jpg"
              />
            </Fade>
            <Fade direction="down" delay={300}>
              <TravelImg
                onClick={() => {
                  linkTo("/board");
                }}
                src="/img/seoul/seoul4.jpg"
              />
            </Fade>
            <Fade direction="down" delay={400}>
              <TravelImg
                onClick={() => {
                  linkTo("/board");
                }}
                src="/img/seoul/seoul5.jpg"
              />
            </Fade>
            <Fade direction="down" delay={500}>
              <TravelImg
                onClick={() => {
                  linkTo("/board");
                }}
                src="/img/seoul/seoul1.jpg"
              />
            </Fade>
          </ImgDiv>
        </NightDiv>
      </TabPanel>
    </Tabs>
  );
};

export default Suggest;

const DayDiv = styled.div`
  display: flex;
  background-color: transparent;
  height: 100vh;
  font-size: 40px;
  flex-direction: column;
`;
const NightDiv = styled.div`
  display: flex;
  width: 100%;
  background-color: black;
  color: white;
  height: 100vh;
  font-size: 40px;
  flex-direction: column;
`;

const TravelImg = styled.img`
  width: 250px;
  height: 200px;
  border-radius: 50px;
  cursor: pointer;
`;

const ImgDiv = styled.div`
  display: flex;
  justify-content: space-around;
  margin: 5rem 0 0 0;
`;

const TitleDiv = styled.div`
  padding-top: 4rem;
`;
