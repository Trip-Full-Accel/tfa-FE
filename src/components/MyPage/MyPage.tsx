import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import Row from "react-bootstrap/Row";
import Tab from "react-bootstrap/Tab";
import UserInfo from "./UserInfo";
import TravelRoute from "./TravelRoute";
import TravelCost from "./TravelCost";

interface myPageType {
  pageKey: string;
  pageKorName: string;
}
const MyPage = () => {
  const myPageList: myPageType[] = [
    { pageKey: "userInfo", pageKorName: "회원정보수정" },
    { pageKey: "travelRoute", pageKorName: "내 여행 플랜" },
    { pageKey: "travelCost", pageKorName: "여행 경비계산" },
  ];

  return (
    <Tab.Container id="left-tabs-example" defaultActiveKey="first">
      <Row>
        <Col sm={3}>
          <Nav variant="pills" className="flex-column">
            <Nav.Item>
              {myPageList.map((el) => {
                return (
                  <Nav.Link key={el.pageKey} eventKey={el.pageKey}>
                    {el.pageKorName}
                  </Nav.Link>
                );
              })}
            </Nav.Item>
          </Nav>
        </Col>
        <Col sm={9}>
          <Tab.Content>
            <Tab.Pane eventKey="userInfo">
              <UserInfo></UserInfo>
            </Tab.Pane>
            <Tab.Pane eventKey="travelRoute">
              <TravelRoute></TravelRoute>
            </Tab.Pane>
            <Tab.Pane eventKey="travelCost">
              <TravelCost></TravelCost>
            </Tab.Pane>
          </Tab.Content>
        </Col>
      </Row>
    </Tab.Container>
  );
};

export default MyPage;
