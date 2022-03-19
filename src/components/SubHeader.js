import React from "react";
import styled from "styled-components";

const SubHeader = ({ placeholder }) => {
  return <SubTitle>{placeholder}</SubTitle>;
};

export default SubHeader;

const SubTitle = styled.h2`
  margin: 1rem 0 0 0;
`;
