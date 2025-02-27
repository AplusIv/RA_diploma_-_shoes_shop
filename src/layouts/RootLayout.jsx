import { Col, Form, Nav, Navbar, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";
import NavbarControls from "../components/NavbarControls";
import NavbarControlsSearchForm from "../components/NavbarControlsSearchForm";
import NavbarSearchForm from "../components/NavbarSearchForm";

const RootLayout = () => {
  return (
    <>
      <header className="container">
        <Row>
          <Col>
            <Navbar
              collapseOnSelect
              // fixed="top"
              expand="sm"
              bg="light"
              data-bs-theme="light"
            >
              <Navbar.Brand as={Link} to="/">
                {/* <img src="../img/header-logo.png" alt="Bosa Noga" /> */}
                <img
                  src="https://raw.githubusercontent.com/netology-code/ra16-diploma/refs/heads/master/html/img/header-logo.png"
                  alt="Bosa Noga"
                />
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="navbarMain" />
              <Navbar.Collapse id="navbarMain">
                <Nav
                  as="ul"
                  className="mr-auto"
                  style={{ maxHeight: "100px" }}
                  defaultActiveKey="/"
                  navbarScroll
                >
                  <Nav.Item as="li">
                    <Nav.Link
                      as={Link}
                      className="nav-link"
                      to="/"
                      eventKey="/"
                    >
                      Главная
                    </Nav.Link>
                  </Nav.Item>
                  {/* <Nav.Item as="li">
                    <Nav.Link className="nav-link active" href="/">
                      Главная
                    </Nav.Link>
                  </Nav.Item> */}
                  <Nav.Item as="li">
                    <Nav.Link
                      as={Link}
                      className="nav-link"
                      to="/catalog"
                      eventKey="/catalog"
                    >
                      Каталог
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item as="li">
                    <Nav.Link
                      as={Link}
                      className="nav-link"
                      to="/about"
                      eventKey="/about"
                    >
                      О магазине
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item as="li">
                    <Nav.Link
                      as={Link}
                      className="nav-link"
                      to="/contacts"
                      eventKey="/contacts"
                    >
                      Контакты
                    </Nav.Link>
                  </Nav.Item>
                </Nav>

                <div>
                  {/* <div className="header-controls-pics">
                    <div
                      data-id="search-expander"
                      className="header-controls-pic header-controls-search"
                    ></div>
                    <Link to="/cart">
                      <div className="header-controls-pic header-controls-cart">
                        <div className="header-controls-cart-full">1</div>
                        <div className="header-controls-cart-menu"></div>
                      </div>
                    </Link>
                  </div> */}

                  <NavbarControlsSearchForm />
                  {/* Корректный вариант */}
                  {/* <Nav className="header-controls-pics">
                    <Nav.Link
                      data-id="search-expander"
                      className="header-controls-pic header-controls-search"
                    ></Nav.Link>
                    <Nav.Link
                      href="/cart"
                      className="header-controls-pic header-controls-cart"
                    >
                      <div className="header-controls-cart-full">1</div>
                      <div className="header-controls-cart-menu"></div>
                    </Nav.Link>
                  </Nav>

                  <Form
                    data-id="search-form"
                    className="header-controls-search-form d-inline invisible"
                  >
                    <input className="form-control" placeholder="Поиск" />
                    <Form.Control
                      type="search"
                      placeholder="Поиск"
                      className="form-control"
                      aria-label="Search"
                    />
                  </Form> */}
                </div>
              </Navbar.Collapse>
            </Navbar>
          </Col>
        </Row>
      </header>

      {/* <header class="container">
      <div class="row">
        <div class="col">
          <nav class="navbar navbar-expand-sm navbar-light bg-light">
            <a class="navbar-brand" href="/">
            <img src="./img/header-logo.png" alt="Bosa Noga"/>
            </a>
            <div class="collapase navbar-collapse" id="navbarMain">
              <ul class="navbar-nav mr-auto">
                <li class="nav-item active">
                  <a class="nav-link" href="/">Главная</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="/catalog.html">Каталог</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="/about.html">О магазине</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="/contacts.html">Контакты</a>
                </li>
              </ul>
              <div>
                <div class="header-controls-pics">
                  <div data-id="search-expander" class="header-controls-pic header-controls-search"></div>
                  <div class="header-controls-pic header-controls-cart">
                    <div class="header-controls-cart-full">1</div>
                    <div class="header-controls-cart-menu"></div>
                  </div>
                </div>
                <form data-id="search-form" class="header-controls-search-form form-inline invisible">
                  <input class="form-control" placeholder="Поиск"/>
                </form>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </header> */}

      <Outlet />

      <footer className="container bg-light footer">
        <Row>
          <Col sm="4">
            <section>
              <h5>Информация</h5>
              <Nav as="ul" className="nav flex-column">
                <Nav.Item as="li">
                  <Nav.Link as={Link} className="nav-link" to="/about">
                    О магазине
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item as="li">
                  <Nav.Link as={Link} className="nav-link" to="/catalog">
                    Каталог
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item as="li">
                  <Nav.Link as={Link} className="nav-link" to="/contacts">
                    Контакты
                  </Nav.Link>
                </Nav.Item>
              </Nav>
            </section>
          </Col>
          <Col sm="4">
            <section>
              <h5>Принимаем к оплате:</h5>
              <div className="footer-pay">
                <div className="footer-pay-systems footer-pay-systems-paypal"></div>
                <div className="footer-pay-systems footer-pay-systems-master-card"></div>
                <div className="footer-pay-systems footer-pay-systems-visa"></div>
                <div className="footer-pay-systems footer-pay-systems-yandex"></div>
                <div className="footer-pay-systems footer-pay-systems-webmoney"></div>
                <div className="footer-pay-systems footer-pay-systems-qiwi"></div>
              </div>
            </section>
            <section>
              <div className="footer-copyright">
                2009-2019 © BosaNoga.ru — модный интернет-магазин обуви и
                аксессуаров. Все права защищены.
                <br />
                Доставка по всей России!
              </div>
            </section>
          </Col>
          <Col sm="4" className="text-end">
            <section className="footer-contacts">
              <h5>Контакты:</h5>
              <Link className="footer-contacts-phone" to="tel:+7-495-790-35-03">
                +7 495 79 03 5 03
              </Link>
              <span className="footer-contacts-working-hours">
                Ежедневно: с 09-00 до 21-00
              </span>
              <Link
                className="footer-contacts-email"
                to="mailto:office@bosanoga.ru"
              >
                office@bosanoga.ru
              </Link>
              <div className="footer-social-links">
                <div className="footer-social-link footer-social-link-twitter"></div>
                <div className="footer-social-link footer-social-link-vk"></div>
              </div>
            </section>
          </Col>
        </Row>
      </footer>
    </>
  );
};

export default RootLayout;
