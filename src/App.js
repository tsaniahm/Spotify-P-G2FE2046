import React from "react";
import { Provider } from "react-redux";
import store from "./redux/store.jsx";
import Homepage from "./pages/homepage.jsx";
import { BrowserRouter as Router } from "react-router-dom";
import { Switch } from "react-router-dom";
import { Route } from "react-router-dom";
import CreatePlaylistPage from "./pages/createPlaylistPage.jsx";
import { createTheme } from "@mui/material";
import { ThemeProvider } from "styled-components";

const theme = createTheme();

function App() {
  return (
    <React.Fragment>
     <ThemeProvider theme={theme}>
     <Provider store={store}>
        <Router>
          <Switch>
            <Route exact path="/">
              <Homepage />
            </Route>
            <Route path="/create-playlist">
              <CreatePlaylistPage />
            </Route>
          </Switch>
        </Router>
      </Provider>
     </ThemeProvider>
    </React.Fragment>
  )
}

export default App;
