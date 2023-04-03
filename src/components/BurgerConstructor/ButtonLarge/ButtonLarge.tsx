import React, { FC } from "react";
import { Button } from "@ya.praktikum/react-developer-burger-ui-components";

interface Props {
  onClick: () => void;
  text: string;
  loading: boolean;
  loadingText: string;
  disabled?: boolean;
}

const ButtonLarge: FC<Props> = ({
  onClick,
  disabled,
  loading,
  text,
  loadingText,
}) => {
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

ButtonLarge.defaultProps = {
  text: "",
  loadingText: "",
  loading: false,
  disabled: false,
};

export { ButtonLarge };
