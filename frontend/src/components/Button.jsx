import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  background-color: #1da1f2;
  color: #fff;
  font-size: 1.5em;
  margin: 1em;
  padding: 0.5em 1em;
  border: 2px solid #1da1f2;
  border-radius: 24px;
  display: block;
  cursor: pointer;
`;

const Button = ({ label, onClick }) => {
  return (
    <StyledButton>
      <div onClick={onClick}>{label}</div>
    </StyledButton>
  );
};

export default Button;
