import React from "react";
import styled from "styled-components";

const ContryStyled = styled.div`
  width: 16.5rem;
  border: 1px solid blue;
  cursor: pointer;
  border-radius: 5px;
  box-shadow: 0px 0px 7px 2px rgb(0, 0, 0, 0.1);
  overflow: hidden;
  img {
    max-width: 100%;
    object-fit: cover;
  }
  .details {
    padding: 1.5rem;
    text-transform: capitalize;
  }
  .details h2 {
    margin: 0;
    font: 700 normal 1rem/1.5rem var(--font);
    font-size: 18px;
  }
  .details p {
    margin-bottom: 0.5rem;
    font-size: 0.9rem;
  }
`;

function Contry({ flag, name, population, region, capital }) {
  return (
    <ContryStyled>
      <div>
        <img loading="lazy" src={flag} alt={`bandera de ${name}`} />
        <div className="details">
          <h2>{name}</h2>
          <p>
            <strong>Population: </strong>
            {population}
          </p>
          <p>
            <strong>Region: </strong>
            {region}
          </p>
          <p>
            <strong>Capital: </strong>
            {capital}
          </p>
        </div>
      </div>
    </ContryStyled>
  );
}

export default Contry;
