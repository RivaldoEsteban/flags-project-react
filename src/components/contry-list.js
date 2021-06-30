import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Contry from "./contry";
import { useSelector, useDispatch } from "react-redux";
import CountryByName from "./country-by-name";
import Region from "./country-by-region";

const ContryListStyled = styled.div`
  display: grid;
  padding: 4rem 2rem;
  grid-row-gap: 2.3rem;
  justify-content: center;
`;

function ContryList() {
  const dispatch = useDispatch();
  const countryList = useSelector((state) => state.countryList);
  const [countries, setCountries] = useState({});
  useEffect(() => {
    async function getCountries() {
      const datacountrys = await fetch("https://restcountries.eu/rest/v2/all");
      const response = datacountrys.json();
      return response;
    }
    getCountries()
      .then((list) => {
        setCountries(list);
        dispatch({
          type: "SET_COUNTRY_REGION",
          payload: list,
        });
      })
      .catch((error) => {
        console.log(`hubo un error en el fetch ${error}`);
      });
  }, []);

  return (
    <ContryListStyled>
      <CountryByName placeholder="search name" />
      <Region countries={countries} />
      {countryList.map((country) => {
        return (
          <Contry
            flag={country.flag}
            name={country.name}
            population={country.population}
            region={country.region}
            capital={country.capital}
            key={country.name}
          />
        );
      })}
    </ContryListStyled>
  );
}

export default ContryList;
