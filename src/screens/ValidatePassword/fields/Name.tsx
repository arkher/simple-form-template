import { useRef } from "react";
import Input from "../../../components/Input/Input";
import { IField } from "./types";

const Name = ({ value, onChange, onBlur, disabled }: IField) => {
  const ref = useRef(null);
  return (
    <Input
      ref={ref}
      name="name"
      id="name"
      disabled={disabled}
      placeholder="Nome"
      value={value}
      type="text"
      onChange={onChange}
      onBlur={onBlur}
    />
  );
};

export default Name;
