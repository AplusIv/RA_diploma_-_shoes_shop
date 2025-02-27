import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { SEARCH_PRODUCTS, TOGGLE_VISIBILITY } from "../constants/actions";
import { useNavigate } from "react-router-dom";

const NavbarControls = ({
  searchField,
  invisibleSearchField,
  toggleVisibility,
  products,
}) => {
  console.log(products); // товары в корзине (глобальный стейт)

  const navigate = useNavigate();

  const handleSearch = () => {
    if (searchField && invisibleSearchField == false) {
      console.log("navigate to Catalog");
      navigate("/catalog");
    }
    toggleVisibility();
  };

  return (
    <Nav className="header-controls-pics">
      <Nav.Link
        data-id="search-expander"
        className="header-controls-pic header-controls-search"
        // onClick={handleShowSearchForm}
        onClick={handleSearch}
      ></Nav.Link>
      {/* <!-- Do programmatic navigation on click to /cart.html --> */}
      <Nav.Link
        as={Link}
        to="/cart"
        className="header-controls-pic header-controls-cart"
      >
        {/* <div className="header-controls-cart-full">4</div> */}
        {products.length > 0 ? (
          <div className="header-controls-cart-full">{products.length}</div>
        ) : null}
        <div className="header-controls-cart-menu"></div>
      </Nav.Link>
    </Nav>
  );
};

const mapStateToProps = (state) => {
  return {
    products: state.cart.products,
    searchField: state.search.searchField,
    invisibleSearchField: state.search.invisibleSearchField,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    toggleVisibility: () => {
      dispatch({ type: TOGGLE_VISIBILITY });
    },
    // searchProducts: () => {
    //   dispatch({ type: SEARCH_PRODUCTS });
    // },
  };
};

// export default NavbarControls;
export default connect(mapStateToProps, mapDispatchToProps)(NavbarControls);
