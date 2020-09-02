import React from "react";
import styled from "styled-components";

export const Button = styled.div`
  padding: 1rem;
  font-size: 20px;
  font-weight: 400;
  border-radius: 4px;
  margin: 5px;
  color: white;
  background: ${(props) =>
    props.primary ? "#20BBD5" : props.secondary ? "#000000" : "000000"};

  &:hover {
    cursor: pointer;
    background-color: #20BBD5;
  }
`;
