import React from "react";
import styled from "styled-components";

const Content = ({ placeholder }) => {
  return (
    <Paragraph>
      {placeholder} <br />
    </Paragraph>
  );
};

export default Content;

const Paragraph = styled.p`
  text-align: center;
  font-size: 1rem;
  padding: 0 2rem;
`;
