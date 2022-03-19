import React from "react";
import styled from "styled-components";

const SearchBar = ({ placeholder, onChangeHandler }) => {
  return (
    <Input type="search" placeholder={placeholder} onChange={onChangeHandler} />
  );
};

export default SearchBar;

const Input = styled.input`
  font-family: "Bungee", sans-serif;
  border: none;
  outline: none;
  padding: 0.5rem 1rem;
  border-radius: 1rem;
  color: #5152fb;
  letter-spacing: 2px;
  box-shadow: 0 2px 0 rgba(0, 0, 0, 0.045);
  cursor: pointer;
  :hover {
    color: #07e0d6;
    transition: all 0.3s ease-in;
  }
`;
