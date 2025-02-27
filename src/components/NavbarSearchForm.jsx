import { Form } from "react-bootstrap";
import { connect } from "react-redux";
import { CHANGE_SEARCHFIELD, TOGGLE_VISIBILITY } from "../constants/actions";

const NavbarSearchForm = ({
  invisibleSearchField,
  searchField,
  changeSearchField,
}) => {
  const handleChange = (e) => {
    const { value } = e.target;
    console.log(value);
    changeSearchField(value);
  };

  return invisibleSearchField ? (
    <Form
      data-id="search-form"
      className="header-controls-search-form d-inline invisible"
    >
      {/* <input className="form-control" placeholder="Поиск" /> */}
      <Form.Control
        type="search"
        placeholder="Поиск"
        className="form-control"
        aria-label="Search"
        onChange={handleChange}
        value={searchField}
      />
    </Form>
  ) : (
    <Form
      data-id="search-form"
      className="header-controls-search-form d-inline"
    >
      {/* <input className="form-control" placeholder="Поиск" /> */}
      <Form.Control
        type="search"
        placeholder="Поиск"
        className="form-control"
        aria-label="Search"
        onChange={handleChange}
        value={searchField}
      />
    </Form>
  );
};

const mapStateToProps = (state) => {
  return {
    searchField: state.search.searchField,
    invisibleSearchField: state.search.invisibleSearchField,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    changeSearchField: (text) => {
      dispatch({ type: CHANGE_SEARCHFIELD, text });
    },
    toggleVisibility: () => {
      dispatch({ type: TOGGLE_VISIBILITY });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NavbarSearchForm);
