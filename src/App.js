import "./App.css";
import ContryList from "./components/contry-list";
import { Provider } from "react-redux";
import { createStore } from "redux";

const initialState = {
  countryList: [],
};

function reducer(state, action) {
  console.log(action);
  switch (action.type) {
    case "SET_COUNTRY_LIST": {
      return { ...state, countryList: action.payload };
    }
    default: {
      return state;
    }
  }
}

const store = createStore(reducer, initialState);

function App() {
  return (
    <Provider store={store}>
      <ContryList />
    </Provider>
  );
}

export default App;
