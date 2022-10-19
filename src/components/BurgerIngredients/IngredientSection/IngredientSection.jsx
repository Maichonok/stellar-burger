import React from "react";
import PropTypes from "prop-types";

function IngredientSection(props) {
  return <section className={props.sectionStyle}>{props.children}</section>;
}

IngredientSection.propTypes = {
  sectionStyle: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export { IngredientSection };
