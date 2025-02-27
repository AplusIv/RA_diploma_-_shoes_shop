import { Card, Col, Row } from "react-bootstrap";
import { Outlet } from "react-router-dom";

const BannerLayout = () => {
  return (
    <main class="container">
      <Row>
        <Col>
          {/* <div class="banner">
            <img
              src="./img/banner.jpg"
              class="img-fluid"
              alt="К весне готовы!"
            />
            <h2 class="banner-header">К весне готовы!</h2>
          </div> */}
          <Card className="banner">
            <Card.Img
              src="./img/banner.jpg"
              className="img-fluid"
              alt="К весне готовы!"
            />
            <Card.ImgOverlay>
              <Card.Body>
                <Card.Text as="h2" className="banner-header">
                  К весне готовы!
                </Card.Text>
              </Card.Body>
            </Card.ImgOverlay>
          </Card>

          <Outlet />
        </Col>
      </Row>
    </main>
  );
};

export default BannerLayout;
