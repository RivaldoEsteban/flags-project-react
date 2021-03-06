import React from "react";
import styled from "styled-components";
import "./App.css";
import Header from "./components/header";
import ContryList from "./components/contry-list";
import "./icoMoon.css";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { BrowserRouter as Router } from "react-router-dom";
const initialState = {
  countryList: [],
};

function reducer(state = {}, action) {
  switch (action.type) {
    case "SET_COUNTRY_LIST": {
      return { ...state, countryList: action.payload };
    }
    case "SET_COUNTRY_REGION": {
      return { ...state, countryList: action.payload };
    }
    case "SET_COUNTRY_NAME": {
      return { ...state, countryList: action.payload };
    }
    default: {
      return state;
    }
  }
}

const store = createStore(reducer, initialState);

const AppStyled = styled.div`
  .wrapper {
    max-width: 1366px;
    margin: auto;
    padding: 0 20px;
  }
`;

function App() {
  return (
    <AppStyled>
      <Router>
        <Provider store={store}>
          <Header />
          <ContryList />
        </Provider>
      </Router>
    </AppStyled>
  );
}

export default App;
