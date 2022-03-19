import React from "react";
import styled from "styled-components";

const Button = ({ onClickhandler, placeholder }) => {
  return <ButtonStyle onClick={onClickhandler}>{placeholder}</ButtonStyle>;
};

export default Button;

const ButtonStyle = styled.button`
  font-family: "Bungee", sans-serif;
  border: none;
  outline: none;
  padding: 0.5rem 1rem;
  border-radius: 1rem;
  background: linear-gradient(9.34deg, #ff9ef6 19.28%, #07e0d6 106.03%);
  color: white;
  letter-spacing: 2px;
  box-shadow: 0 2px 0 rgba(0, 0, 0, 0.045);
  cursor: pointer;
  :hover {
    color: #5152fb;
    transition: all 0.3s ease-in;
  }
`;
