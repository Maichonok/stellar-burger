import React from "react";
import PropTypes from "prop-types";

function IngredientsTitle(props) {
  return <h1 className={props.textStyle}>{props.text}</h1>;
}

IngredientsTitle.propTypes = {
  textStyle: PropTypes.string,
  text: PropTypes.string.isRequired,
};

export { IngredientsTitle };
