import React from "react";
import styled from "styled-components";

const CountryByNameStyled = styled.label`
  position: relative;
  display: inline-flex;
  align-items: center;
  height: 24px;
  input {
    flex: 1;
    border-radius: 5px;
    border: none;
    box-sizing: border-box;
    box-shadow: 0 2px 9px rgba(0, 0, 0, 0.05);
    padding: 15px 10px 15px 3rem;
    &::-webkit-input-placeholder {
      color: #c4c4c4;
    }
  }
  img {
    position: absolute;
    left: 0;
    height: 18px;
    margin: 0 1rem;
    opacity: 0.2;
  }
`;

function CountryByName({ ...props }) {
  return (
    <CountryByNameStyled type="text" placeholder="search name">
      <img
        src="./icons/search.svg"
        alt="icon search"
        width="20px"
        height="20px"
      />
      <input type="text" {...props} />
    </CountryByNameStyled>
  );
}

export default CountryByName;
