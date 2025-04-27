import React from "react";
import "./stiloInput";
import { Input } from "./stiloInput";

interface InputProps {
  type?: "email" | "password" | "date" | "time" | "radio" | "text";
  placeholder?: string;
  value?: string;
  id?: string;
  name?: string;
  className?: string; // <- importante pro styled-components aplicar classe!
}

const Inputs: React.FC<InputProps> = ({ type, placeholder, value, id, name, className }) => {
  return (
    <>
      <Input
        type={type}
        placeholder={placeholder}
        value={value}
        id={id}
        name={name}
        className={className} // <- passa o className pro styled-components aplicar o estilo
      />
    </>
  );
};

export default Inputs;
