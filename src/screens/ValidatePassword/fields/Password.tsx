import { useRef } from "react";
import Input from "../../../components/Input/Input";
import { IField } from "./types";

const Password = ({ value, onChange, onBlur, disabled }: IField) => {
  const ref = useRef(null);
  return (
    <Input
      ref={ref}
      name="password"
      id="password"
      disabled={disabled}
      placeholder="Senha"
      value={value}
      type="number"
      onChange={onChange}
      onBlur={onBlur}
    />
  );
};

export default Password;
