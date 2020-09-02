import React from "react";
import styled from "styled-components";

export const Layout = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 10px;
  padding-top: 24px;
  text-align: center;

  > * {
    flex: 1;
  }
`;
