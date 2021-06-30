import React, { useRef } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";

const CountryByNameStyled = styled.form`
  position: relative;
  display: inline-flex;
  align-items: center;
  height: 24px;
  flex: 1;
  max-width: 500px;
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
  i {
    position: absolute;
    left: 0;
    margin: 0 1rem;
    font-size: 1.5rem;
    color: #c4c4c4;
  }
`;

function CountryByName({ countries }) {
  const search = useRef(null);
  const countryList = useSelector((state) => state.countryList);
  const dispatch = useDispatch();

  function searchCountryName() {
    const country = countries.filter((country) => {
      if (country.name.toLowerCase().startsWith(search.current.value)) {
        return true;
      }
    });
    dispatch({
      type: "SET_COUNTRY_NAME",
      payload: country,
    });
  }
  return (
    <CountryByNameStyled onChange={searchCountryName}>
      <i className="icon-search"></i>
      <input type="text" placeholder="search country" ref={search} id="input" />
    </CountryByNameStyled>
  );
}

export default CountryByName;
