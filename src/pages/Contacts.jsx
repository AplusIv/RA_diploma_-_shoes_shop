import { Card, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import Banner from "../components/Banner";

const Contacts = () => {
  return (
    <main class="container">
      <Row>
        <Col>
          <Banner
            src="https://raw.githubusercontent.com/netology-code/ra16-diploma/refs/heads/master/html/img/banner.jpg"
            text="К весне готовы!"
          />
          <section class="top-sales">
            <h2 class="text-center">Контакты</h2>
            <p>
              Наш головной офис расположен в г.Москва, по адресу: Варшавское
              шоссе, д. 17, бизнес-центр W Plaza.
            </p>
            <h5 class="text-center">Координаты для связи:</h5>
            <p>
              Телефон: <Link to="tel:+7-495-790-35-03">+7 495 79 03 5 03</Link>{" "}
              (ежедневно: с 09-00 до 21-00)
            </p>
            <p>
              Email:{" "}
              <Link to="mailto:office@bosanoga.ru">office@bosanoga.ru</Link>
            </p>
          </section>
        </Col>
      </Row>
    </main>
  );
};

export default Contacts;
