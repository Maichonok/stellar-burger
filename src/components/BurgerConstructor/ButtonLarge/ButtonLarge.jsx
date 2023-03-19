import React from "react";
import { Button } from "@ya.praktikum/react-developer-burger-ui-components";
import PropTypes from "prop-types";

const ButtonLarge = ({ onClick, disabled, loading, text, loadingText }) => {
  return (
    <Button 
      type="primary" 
      size="large" 
      onClick={onClick} 
      htmlType="button"
      disabled={disabled || loading}
    >
      {loading ? loadingText : text}
    </Button>
  );
};

ButtonLarge.propTypes = {
  onClick: PropTypes.func.isRequired,
  text: PropTypes.string,
  loading: PropTypes.bool,
  loadingText: PropTypes.string,
  disabled: PropTypes.bool
};

ButtonLarge.defaultProps = {
  text: '',
  loadingText: '',
  loading: false,
  disabled: false
};


export { ButtonLarge };
