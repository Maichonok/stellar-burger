import { ChangeEvent, useState } from "react";

type Values = {
  [key: string]: string;
};

export function useForm(inputValues: Values): {
  handleChange: (event: ChangeEvent<HTMLInputElement>) => void;
  setValues: (values: Values) => void;
  values: Values;
} {
  const [values, setValues] = useState(inputValues);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value, name } = event.target;
    setValues({ ...values, [name]: value });
  };
  return { values, handleChange, setValues };
}
