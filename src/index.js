import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { Route, BrowserRouter as Router } from "react-router-dom";
import store from "./app/store";
import App from "./app";
import * as serviceWorker from "./serviceWorker";
import {
  createTheme,
  CssBaseline,
  ThemeProvider,
} from "@mui/material";
import "./index.css";

const Routes = () => {

  const theme = createTheme({
    palette: {
      secondary: {
        light: "#d6eafb",
        main: "#7FB2F0",
        dark: "#4E7AC7",
        contrastText: "#fff",
      },
      primary: {
        light: "#4E7AC7",
        main: "#35478C",
        dark: "#16193B",
        contrastText: "#fff",
      },
    },
    components: {
      MuiPaper: {
        defaultProps: {
          elevation: 3,
        },
        styleOverrides: {
          root: {
            borderRadius: "16px",
          },
        },
      },
      MuiAccordion: {
        defaultProps: {
          elevation: 0,
        },
      },
      MuiBackdrop: {
        styleOverrides: {
          root: {
            backgroundColor: "rgba(0,0,0,0.2)",
          },
        },
      },
      MuiButton: {
        defaultProps: {
          variant: "contained",
        },
      },
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <RouterComp />
    </ThemeProvider>
  );
};

const RouterComp = React.memo(() => (
  <Router>
    <div>
      <Route path="/" component={App} />
    </div>
  </Router>
));

ReactDOM.render(
  <Provider store={store}>
    <Routes />
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
