import React from "react";
import styled from "styled-components";

export const Input = styled.input`
  border: solid 1px black;
  background-color: white;
  border-radius: 4px;
  color: black;

  &::-webkit-calendar-picker-indicator {
   filter: brightness(0%);
  }
`

interface InputProps {
  type?: "email" | "password" | "date" | "time" | "radio" | "text" | "file";
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
