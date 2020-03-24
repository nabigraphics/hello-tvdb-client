import React from "react";
import AppGlobalStyle from "components/common/AppGlobalStyle";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MainPage from "pages/Main";
import { ThemeProvider } from "emotion-theming";
import theme from "lib/styles/theme";
import SearchSeriesProvider from "components/search/SearchSeriesProvider";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <SearchSeriesProvider>
        <AppGlobalStyle />
        <Router>
          <Switch>
            <Route path={"/"} exact>
              <MainPage />
            </Route>
          </Switch>
        </Router>
      </SearchSeriesProvider>
    </ThemeProvider>
  );
}

export default App;
