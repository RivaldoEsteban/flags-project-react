import React, { useRef, useEffect, useState } from "react";
import styled from "styled-components";

const HeaderStyled = styled.header`
  background: white;
  box-shadow: rgb(0 0 0 / 6%) 0px 2px 4px 0px;

  .header-content {
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  h1 {
    font: 700 normal 24px/2.4rem var(--font);
    margin: 0;
  }
  .mode {
    display: flex;
    align-items: center;
    text-transform: capitalize;
  }
  .icono {
    font-size: 3rem;
  }
  p {
    font-size: 14px;
    font-weight: 600;
  }
`;

function Header() {
  const [value, setValue] = useState("");
  const iconMoon = useRef(null);
  const header = useRef(null);
  const body = document.getElementById("body");
  const container = document.getElementById("container");
  const input = document.getElementById("input");
  const region = document.getElementById("region");
  const text = document.getElementById("text");
  useEffect(() => {
    const text = document.getElementById("text");
    setValue(text.textContent);
    console.log(value);
  }, []);

  function darkMode() {
    text.textContent = "Ligth Mode";
    container.classList.add("country-list");
    header.current.style.background = "#273542";
    input.classList.add("inputStyle");
    body.classList.add("bodyStyle");
    region.classList.add("button-region-filter");
  }
  function ligthMode() {
    container.classList.remove("country-list");
    header.current.style.background = "";
    input.classList.remove("inputStyle");
    body.classList.remove("bodyStyle");
    region.classList.remove("button-region-filter");
    text.textContent = "Dark Mode";
  }

  function changeMode() {
    if (value == "dark mode") {
      setValue("");
      darkMode();
    } else {
      setValue("dark mode");
      ligthMode();
    }
  }
  return (
    <HeaderStyled ref={header} id="header">
      <div className="wrapper">
        <div className="header-content">
          <h1>Where in the world?</h1>
          <div className="mode" onClick={changeMode}>
            <i className="icon-moon1 icono"></i>
            <p id="text">dark mode</p>
          </div>
        </div>
      </div>
    </HeaderStyled>
  );
}

export default Header;
