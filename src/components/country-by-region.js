import React, { useRef } from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
const CountryByRegionStyled = styled.div`
  height: inherit;
  select {
    cursor: pointer;
    text-transform: capitalize;
    padding: 10px;
    width: 50%;
    border-radius: 5px;
    border: none;
    box-sizing: border-box;
    box-shadow: 0 2px 9px rgba(0, 0, 0, 0.05);
    width: 200px;
    height: inherit;
    color: #c4c4c4;
    font-weight: 400;
  }
`;

function Region({ countries }) {
  const select = useRef(null);

  const dispatch = useDispatch();

  function regionChange() {
    const region = select.current.value;
    if (region === "all") {
      return dispatch({
        type: "SET_COUNTRY_REGION",
        payload: countries,
      });
    }
    const regionContries = countries.filter((country) => {
      if (country.region.toLowerCase() === region) {
        return true;
      }
    });
    dispatch({
      type: "SET_COUNTRY_REGION",
      payload: regionContries,
    });
  }

  return (
    <CountryByRegionStyled>
      <select name="" onChange={regionChange} ref={select} id="region">
        <option value="all">filter by region</option>
        <option value="africa">africa</option>
        <option value="americas">americas</option>
        <option value="europe">europe</option>
        <option value="asia">asia</option>
        <option value="oceania">oceania</option>
      </select>
    </CountryByRegionStyled>
  );
}

export default Region;
