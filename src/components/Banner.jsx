import { Card, Col, Image, Row } from "react-bootstrap";

const Banner = ({ src, text }) => {
  return (
    <div className="banner">
      <Image
        // src="./img/banner.jpg"
        // src="https://raw.githubusercontent.com/netology-code/ra16-diploma/refs/heads/master/html/img/banner.jpg"
        src={src}
        className="img-fluid"
        alt={text}
      />
      {/* <h2 class="banner-header">К весне готовы!</h2> */}
      <h2 className="banner-header">{text}</h2>
    </div>
    /* <Card className="banner">
        <Card.Img
          // src="./img/banner.jpg"
          src="https://raw.githubusercontent.com/netology-code/ra16-diploma/refs/heads/master/html/img/banner.jpg"
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
      </Card> */
  );
};

export default Banner;
