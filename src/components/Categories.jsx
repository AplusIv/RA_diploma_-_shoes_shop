import { useState } from "react";
import { Nav } from "react-bootstrap";

const Categories = ({ categories, activeKey, handleSelect }) => {
  return (
    <Nav
      as="ul"
      className="catalog-categories justify-content-center"
      activeKey={activeKey}
      // onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
      onSelect={handleSelect}
    >
      <Nav.Item as="li">
        {/* <Nav.Link className="active" href="#"> */}
        <Nav.Link eventKey="all" href="#">
          Все
        </Nav.Link>
      </Nav.Item>
      {categories.map((category, index) => (
        <Nav.Item key={category.id} as="li">
          {/* <Nav.Link eventKey={`${++index}`} href="#"> */}
          <Nav.Link eventKey={`${category.id}`} href="#">
            {category.title}
          </Nav.Link>
        </Nav.Item>
      ))}
    </Nav>
  );
};

export default Categories;
