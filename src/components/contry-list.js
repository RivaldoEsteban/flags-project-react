import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Contry from "./contry";
import { useSelector, useDispatch } from "react-redux";
import CountryByName from "./country-by-name";
import Region from "./country-by-region";

const ContryListStyled = styled.main`
  .countries-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 80px;
  }
  .countries-container > * {
    margin: auto;
  }
  .actions {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 45px;
    margin: 2rem 0;
    flex-wrap: wrap;
  }
  @media (max-width: 500px) {
    .actions {
      display: block;
      margin-bottom: 100px;
    }
    .actions > * {
      margin-bottom: 30px;
      width: 100%;
    }
  }
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
      <div className="wrapper">
        <div className="actions" id="actions">
          <CountryByName countries={countries} />
          <Region countries={countries} />
        </div>
        <div className="countries-container" id="container">
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
        </div>
      </div>
    </ContryListStyled>
  );
}

export default ContryList;
