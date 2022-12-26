import styled from "styled-components";
import { Fade } from "react-awesome-reveal";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import "./suggest.css";

const Suggest = () => {
  return (
    <Tabs>
      <TabList>
        <Tab>낮</Tab>
        <Tab style={{ backgroundColor: "black", color: "white" }}>밤</Tab>
      </TabList>
      <TabPanel>
        <DayDiv>
          <ImgDiv>
            <Fade direction="down">
              <TravelImg src="/img/seoul/seoul2.jpg" />
            </Fade>
            <Fade direction="down" delay={200}>
              <TravelImg src="/img/seoul/seoul3.jpg" />
            </Fade>
            <Fade direction="down" delay={300}>
              <TravelImg src="/img/seoul/seoul4.jpg" />
            </Fade>
            <Fade direction="down" delay={400}>
              <TravelImg src="/img/seoul/seoul5.jpg" />
            </Fade>
            <Fade direction="down" delay={500}>
              <TravelImg src="/img/seoul/seoul1.jpg" />
            </Fade>
          </ImgDiv>
        </DayDiv>
      </TabPanel>
      <TabPanel>
        <NightDiv>
          <ImgDiv>
            <Fade direction="down">
              <TravelImg src="/img/seoul/seoul2.jpg" />
            </Fade>
            <Fade direction="down" delay={200}>
              <TravelImg src="/img/seoul/seoul3.jpg" />
            </Fade>
            <Fade direction="down" delay={300}>
              <TravelImg src="/img/seoul/seoul4.jpg" />
            </Fade>
            <Fade direction="down" delay={400}>
              <TravelImg src="/img/seoul/seoul5.jpg" />
            </Fade>
            <Fade direction="down" delay={500}>
              <TravelImg src="/img/seoul/seoul1.jpg" />
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
  font-size: 100px;
  flex-direction: column;
`;
const NightDiv = styled.div`
  display: flex;
  width: 100%;
  background-color: black;
  color: white;
  height: 100vh;
  font-size: 100px;
  flex-direction: column;
`;

const TravelImg = styled.img`
  width: 250px;
  height: 200px;
`;

const ImgDiv = styled.div`
  display: flex;
  justify-content: space-around;
  margin: 8rem 0 0 0;
`;
