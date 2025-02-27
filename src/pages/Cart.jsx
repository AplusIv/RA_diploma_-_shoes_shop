import { useState } from "react";
import {
  Button,
  Card,
  Col,
  Form,
  FormLabel,
  InputGroup,
  Row,
  Table,
} from "react-bootstrap";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Banner from "../components/Banner";
import PromoCode from "../components/PromoCode";
import {
  CANCEL_PROMO,
  DELETE_FROM_CART,
  MAKE_ORDER,
  USE_PROMO,
} from "../constants/actions";

const Cart = (props) => {
  const [promoValue, setPromoValue] = useState("");

  const [validated, setValidated] = useState(false);
  console.log({ validated });

  const [owner, setOwner] = useState({
    phone: "",
    address: "",
  });
  console.log(owner);

  const navigate = useNavigate();

  const handleChange = (event) => {
    const { value } = event.target;
    const { name } = event.target;
    setOwner({ ...owner, [name]: value });
  };

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    } else {
      event.preventDefault();
      event.stopPropagation();
      console.log("Смена маршрута");
      props.makeOrder(owner, props.products);

      navigate("/order");
      // Добавить очистку стора и локалстораджа
    }

    setValidated(true);

    // redirect("/order");
    // <Navigate to="/order" />;
    // if (form.checkValidity() === true) {
    //   console.log("Смена маршрута");
    //   navigate("/order");
    // }
  };

  const handleDelete = (id, size) => {
    console.log(id, size);
    props.deleteFromCart(id, size);
    console.log("удаление элемента");
  };

  const handlePromoCode = () => {
    console.log({ promoValue });
    props.usePromo(promoValue);
    setPromoValue(""); // очистка инпута
  };

  const deletePromoCode = () => {
    props.cancelPromo();
  };

  return (
    <main className="container">
      <Row>
        <Col>
          <Banner
            src="https://raw.githubusercontent.com/netology-code/ra16-diploma/refs/heads/master/html/img/banner.jpg"
            text="К весне готовы!"
          />
          <section className="cart">
            <h2 className="text-center">Корзина</h2>
            <Table bordered hover>
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Название</th>
                  <th scope="col">Размер</th>
                  <th scope="col">Кол-во</th>
                  <th scope="col">Стоимость</th>
                  <th scope="col">Итого</th>
                  <th scope="col">Действия</th>
                  {/* <th scope="col">Действия</th> */}
                </tr>
              </thead>
              <tbody>
                {}

                {props.products.map((product, index) => (
                  <tr>
                    <td scope="row">{index + 1}</td>
                    <td>
                      <Link to={"../catalog/" + product.id}>
                        {product.title}
                      </Link>
                    </td>
                    <td>{product.size}</td>
                    <td>{product.quantity}</td>
                    {props.promoCode.discount > 0 ? (
                      <td>
                        {(product.price * (100 - props.promoCode.discount)) /
                          100}{" "}
                        руб.
                        <td className="exPrice">{product.price} руб.</td>
                      </td>
                    ) : (
                      <td>{product.price} руб.</td>
                    )}

                    {props.promoCode.discount > 0 ? (
                      <td>
                        {((product.price * (100 - props.promoCode.discount)) /
                          100) *
                          product.quantity}{" "}
                        руб.
                        <td className="exPrice">
                          {product.price * product.quantity} руб.
                        </td>
                      </td>
                    ) : (
                      <td>{product.price * product.quantity} руб.</td>
                    )}
                    <td>
                      <Button
                        size="sm"
                        variant="outline-danger"
                        onClick={() => handleDelete(product.id, product.size)}
                      >
                        Удалить
                      </Button>
                    </td>
                  </tr>
                ))}

                <tr>
                  <td colspan="5" class="text-end">
                    Общая стоимость
                  </td>
                  <td>
                    {props.products.length > 0
                      ? props.products
                          .map(
                            (product) =>
                              ((product.price *
                                (100 - props.promoCode.discount)) /
                                100) *
                              product.quantity
                          )
                          .reduce(
                            (accumulator, currentValue) =>
                              accumulator + currentValue
                          )
                      : "0 "}{" "}
                    руб.
                  </td>
                </tr>
              </tbody>
            </Table>

            <Form.Label htmlFor="promo">Промокод</Form.Label>
            <InputGroup className="mb-3">
              <Form.Control
                id="promo"
                placeholder="Введите промокод"
                // aria-label="Recipient's username"
                // aria-describedby="basic-addon2"
                value={promoValue}
                onChange={(e) => setPromoValue(e.target.value)}
                disabled={props.promoCode.status === "accepted"}
              />
              <Button
                variant="outline-secondary"
                onClick={handlePromoCode}
                disabled={props.promoCode.status === "accepted"}
              >
                Применить
              </Button>
            </InputGroup>
            {props.promoCode.status === "accepted" ? (
              <PromoCode
                title={props.promoCode.value}
                deletePromoCode={deletePromoCode}
              />
            ) : null}

            {!props.promoCode.status ? null : props.promoCode.status ===
              "accepted" ? (
              <p>Промокод успешно применён.</p>
            ) : (
              <p>Промокод отсутствует. Попробуйте ввести новый.</p>
            )}
          </section>

          {/* <section class="order row justify-content-center"> */}
          <section className="order row">
            <h2 className="text-center">Оформить заказ</h2>
            {/* <div class="card" > */}
            {/* style="max-width: 30rem; margin: 0 auto;" */}
            {/* <Col sm="5"> */}
            <Card style={{ width: "30rem" }} className="mx-auto">
              <Form
                noValidate
                validated={validated}
                className="card-body"
                onSubmit={handleSubmit}
              >
                <Form.Group
                  controlId="phone" // id для всей группы
                  class="form-group"
                  className="position-relative"
                >
                  <Form.Label>Телефон</Form.Label>
                  <Form.Control
                    type="tel"
                    name="phone"
                    // pattern="^[\+]?7-[0-9]{3}-[0-9]{3}-[0-9]{4}$"
                    pattern="^9[0-9]{9}$"
                    placeholder="Ваш телефон"
                    required
                    value={owner.phone}
                    onChange={handleChange}
                  />
                  <Form.Control.Feedback type="invalid" tooltip>
                    Введите номер телефона (10 цифр, начиная с 9)
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group
                  controlId="address"
                  class="form-group"
                  className="position-relative"
                >
                  <Form.Label>Адрес доставки</Form.Label>
                  <Form.Control
                    name="address"
                    // id="address"
                    placeholder="Адрес доставки"
                    required
                    value={owner.address}
                    onChange={handleChange}
                  />
                  <Form.Control.Feedback type="invalid" tooltip>
                    Введите существующий адрес доставки
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group
                  controlId="agreement"
                  class="form-group"
                  className="position-relative"
                >
                  <Form.Check
                    // class="form-check-input"
                    id="agreement"
                    type="checkbox"
                    label="Согласен с правилами доставки"
                    feedback="Перед оформлением выразите согласие с условиями доставки"
                    feedbackType="invalid"
                    feedbackTooltip
                    required
                  />
                </Form.Group>
                {/* <button type="submit" class="btn btn-outline-secondary">
                  Оформить
                </button> */}
                <Button
                  // as={Link}
                  variant="outline-secondary"
                  // className="btn-outline-secondary"
                  // to="/order"
                  value="Оформить"
                  // as="input"
                  type="submit"
                >
                  Оформить
                </Button>
              </Form>
            </Card>
            {/* </Col> */}
          </section>
        </Col>
      </Row>
    </main>
  );
};

const mapStateToProps = (state, ownProps) => {
  return {
    products: state.cart.products,
    promoCode: state.cart.promoCode,

    orderStatus: state.orderStatus,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    deleteFromCart: (id, size) => {
      dispatch({ type: DELETE_FROM_CART, id, size });
    },
    usePromo: (promoCode) => {
      dispatch({ type: USE_PROMO, promoCode });
    },
    cancelPromo: () => {
      dispatch({ type: CANCEL_PROMO });
    },

    makeOrder: (owner, products) => {
      dispatch({ type: MAKE_ORDER, owner, products });
    },
  };
};

// const mapStateToProps = (state, ownProps) => {
//   return {
//     products: state.products,
//     promoCode: state.promoCode,

//     // order: state.order,
//   };
// };

// const mapDispatchToProps = (dispatch) => {
//   return {
//     deleteFromCart: (id, size) => {
//       dispatch({ type: DELETE_FROM_CART, id, size });
//     },
//     usePromo: (promoCode) => {
//       dispatch({ type: USE_PROMO, promoCode });
//     },
//     cancelPromo: () => {
//       dispatch({ type: CANCEL_PROMO });
//     },
//   };
// };

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
