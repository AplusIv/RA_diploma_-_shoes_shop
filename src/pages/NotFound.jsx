import { Card, Col, Row } from "react-bootstrap";
import Banner from "../components/Banner";

const NotFound = () => {
  return (
    <main class="container">
      <Row>
        <Col>
          <Banner
            src="https://raw.githubusercontent.com/netology-code/ra16-diploma/refs/heads/master/html/img/banner.jpg"
            text="К весне готовы!"
          />
          <section class="top-sales">
            <h2 class="text-center">Страница не найдена</h2>
            <p>Извините, такая страница не найдена!</p>
          </section>
        </Col>
      </Row>
    </main>
  );
};

export default NotFound;
