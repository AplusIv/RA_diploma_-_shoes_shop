import { useState } from "react";
import { Nav, Form } from "react-bootstrap";
import { connect } from "react-redux";
import { TOGGLE_VISIBILITY } from "../constants/actions";
import NavbarControls from "./NavbarControls";
import NavbarSearchForm from "./NavbarSearchForm";

const NavbarControlsSearchForm = () => {
  // const [isInvisible, setIsInvisible] = useState(true);

  // const handleShowSearchForm = () => {
  //   setIsInvisible(!isInvisible);
  // };

  // const handleShowSearchForm = () => {
  //   console.log("toggle searchForm");
  //   toggleVisibility();
  // };
  return (
    <>
      {/* <NavbarControls handleShowSearchForm={handleShowSearchForm} /> */}
      <NavbarControls />
      <NavbarSearchForm />
    </>
  );
};

// const mapStateToProps = (state) => {
//   return {
//     invisibleSearchField: state.search.invisibleSearchField,
//   };
// };

// const mapDispatchToProps = (dispatch) => {
//   return {
//     toggleVisibility: () => {
//       dispatch({ type: TOGGLE_VISIBILITY });
//     },
//   };
// };

// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(NavbarControlsSearchForm);

export default NavbarControlsSearchForm;
