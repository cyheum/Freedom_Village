import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "styled-components";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "./modules";
import GlobalStyle from "./styles/GlobalStyle";
import theme from "./styles/theme";
import Routes from "./Routes";

const store = createStore(rootReducer, composeWithDevTools());

ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Routes />
    </ThemeProvider>
  </Provider>,
  document.getElementById("root")
);
