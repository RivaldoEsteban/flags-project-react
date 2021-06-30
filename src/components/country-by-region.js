import React, { useRef } from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
const CountryByRegionStyled = styled.div`
  select {
    cursor: pointer;
    text-transform: capitalize;
    padding: 10px;
    width: 50%;
    opacity: 0.9;
    border-radius: 5px;
    border: none;
    box-sizing: border-box;
    box-shadow: 0 2px 9px rgba(0, 0, 0, 0.05);
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
      <select name="" id="" onChange={regionChange} ref={select}>
        <option value="all">select region</option>
        <option value="africa">africa</option>
        <option value="americas">americas</option>
        <option value="europe">europe</option>
        <option value="asia">asia</option>
        <option value="oceania">oceania</option>
      </select>
      {/* <div name="filter by region" id="" defaultValue="filter by region">
        <option
          onClick={() => {
            region("asia");
          }}
        >
          asia
        </option>
        <option
          onClick={() => {
            region("europe");
          }}
        >
          europe
        </option>
        <option
          onClick={() => {
            region("oceania");
          }}
        >
          oceania
        </option>
        <option
          onClick={() => {
            region("americas");
          }}
        >
          americas
        </option>
        <option
          onClick={() => {
            region("africa");
          }}
        >
          africa
        </option>
      </div> */}
    </CountryByRegionStyled>
  );
}

export default Region;
