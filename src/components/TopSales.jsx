import { Row, Col, Card, CardGroup } from "react-bootstrap";
import ProductCard from "./ProductCard";

const TopSales = ({ products = [] }) => {
  return products.length > 0 ? (
    <section className="top-sales">
      <h2 className="text-center">Хиты продаж!</h2>
      <div class="preloader">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <Row className="g-4 d-flex">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            cardClassName="card"
            basePath={"catalog/"}
          />
        ))}
        {/* <CardGroup> */}
        {/* <Col sm="4">
          <Card className="card">
            <Card.Img
              variant="top"
              src="./img/products/sandals_myer.jpg"
              className="card-img-top img-fluid"
              alt="Босоножки 'MYER'"
            />
            <Card.Body className="card-body">
              <Card.Title as="h6" className="card-text">
                Босоножки 'MYER' Босоножки 'MYER' Босоножки 'MYER' Босоножки
                'MYER' Босоножки 'MYER'Босоножки 'MYER'Босоножки 'MYER'
              </Card.Title>
              <Card.Text className="card-text">34 000 руб.</Card.Text>
              <Card.Link href="/products/1" className="btn btn-outline-primary">
                Заказать
              </Card.Link>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
          </Card>
        </Col>
        <Col sm="4">
          <Card className="card">
            <Card.Img
              src="./img/products/sandals_keira.jpg"
              variant="top"
              className="card-img-top img-fluid"
              alt="Босоножки 'Keira'"
            />
            <Card.Body className="card-body">
              <Card.Title as="h6" className="card-text">
                Босоножки 'Keira'
              </Card.Title>
              <Card.Text className="card-text">7 600 руб.</Card.Text>
              <Card.Link href="/products/1" className="btn btn-outline-primary">
                Заказать
              </Card.Link>
            </Card.Body>
          </Card>
        </Col>
        <Col sm="4">
          <Card className="card">
            <Card.Img
              src="./img/products/superhero_sneakers.jpg"
              variant="top"
              className="card-img-top img-fluid"
              alt="Супергеройские кеды"
            />
            <Card.Body className="card-body">
              <Card.Title as="h6" className="card-text">
                Супергеройские кеды
              </Card.Title>
              <Card.Text className="card-text">1 400 руб.</Card.Text>
              <Card.Link href="/products/1" className="btn btn-outline-primary">
                Заказать
              </Card.Link>
            </Card.Body>
          </Card>
        </Col>
        <Col sm="4">
          <Card className="card">
            <Card.Img
              variant="top"
              src="./img/products/sandals_myer.jpg"
              className="card-img-top img-fluid"
              alt="Босоножки 'MYER'"
            />
            <Card.Body className="card-body">
              <Card.Title as="h6" className="card-text">
                Босоножки 'MYER' Босоножки 'MYER' Босоножки 'MYER' Босоножки
                'MYER' Босоножки 'MYER'Босоножки 'MYER'Босоножки 'MYER'
              </Card.Title>
              <Card.Text className="card-text">34 000 руб.</Card.Text>
              <Card.Link href="/products/1" className="btn btn-outline-primary">
                Заказать
              </Card.Link>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
          </Card>
        </Col> */}
        {/* </CardGroup> */}
      </Row>
    </section>
  ) : null;
};

export default TopSales;
