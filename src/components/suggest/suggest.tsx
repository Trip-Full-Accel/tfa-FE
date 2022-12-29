import styled from "styled-components";
import { Fade } from "react-awesome-reveal";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import "./suggest.css";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch, RootState } from "store/store";
import { fetchGetSuggest } from "store/pyReducer/suggestReducer";
import Photo from "./../photo/Photo";
import ThreedPhoto from "./Threed";
import { useSSR, useTranslation } from "react-i18next";
import { tab } from "@testing-library/user-event/dist/tab";
import { useSelector } from "react-redux";

const Suggest = () => {
  const [dayImg, setDayImg] = useState([]);
  const [nightImg, setNightImg] = useState([]);
  // const [suggestImg, setSuggestImg] = useState([]);
  const suggestImg = useSelector((state: RootState) => state.suggest.suggest);
  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    dispatch(fetchGetSuggest());
  }, []);

  console.log("cncjs", suggestImg[0]);
  const navigate = useNavigate();
  const { t } = useTranslation();
  const linkTo = (path: string) => {
    navigate(path);
  };
  return (
    <div>
      <Tabs>
        <TabList>
          <Tab
            selectedClassName={"react-tabs__tab-click"}
            style={{ width: "33%" }}
          >
            {t("tourlistattraction")}
          </Tab>
          <Tab
            selectedClassName={"react-tabs__tab-click"}
            style={{ width: "33%" }}
          >
            {t("daynight")}
          </Tab>
          <Tab
            selectedClassName={"react-tabs__tab-click"}
            style={{ width: "33%" }}
          >
            {t("360panorama")}
          </Tab>
        </TabList>
        <TabPanel>
          <Photo></Photo>
        </TabPanel>
        <TabPanel>
          <Tabs>
            <TabList>
              <Tab selectedClassName={"default"}>{t("day1")}</Tab>
              <Tab
                selectedClassName={"react-tabs__tab-night"}
                style={{
                  backgroundColor: "black",
                  color: "white",
                }}
              >
                {t("night")}
              </Tab>
            </TabList>
            <TabPanel>
              <DayDiv>
                <TitleDiv>{t("suggesttitle")}</TitleDiv>
                <ImgDiv>
                  {suggestImg.length > 0 &&
                    suggestImg[0].map((data: any) => {
                      return (
                        <Fade direction="down">
                          asdf
                          <TravelImg
                            onClick={() => {
                              linkTo("/board");
                            }}
                            src={`${data.image}`}
                          />
                        </Fade>
                      );
                    })}
                </ImgDiv>
              </DayDiv>
            </TabPanel>
            <TabPanel>
              <NightDiv>
                <TitleDiv>{t("suggesttitle")}</TitleDiv>
                <ImgDiv>
                  {suggestImg.length > 1 &&
                    suggestImg[1].map((data: any) => {
                      return (
                        <Fade direction="down">
                          asdf
                          <TravelImg
                            onClick={() => {
                              linkTo("/board");
                            }}
                            src={`${data.image}`}
                          />
                        </Fade>
                      );
                    })}
                </ImgDiv>
              </NightDiv>
            </TabPanel>
          </Tabs>
        </TabPanel>
        <TabPanel>
          <ThreedPhoto></ThreedPhoto>
        </TabPanel>
      </Tabs>
    </div>
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
