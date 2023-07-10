import { useRef } from "react";
import Input from "../../../components/Input/Input";
import { IField } from "./types";

const Email = ({ value, onChange, onBlur, disabled }: IField) => {
  const ref = useRef(null);
  return (
    <Input
      ref={ref}
      name="email"
      id="email"
      disabled={disabled}
      placeholder="Email"
      value={value}
      type="email"
      onChange={onChange}
      onBlur={onBlur}
    />
  );
};

export default Email;
