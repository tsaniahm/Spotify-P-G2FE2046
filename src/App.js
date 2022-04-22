import React from "react";

import { BrowserRouter as Router } from "react-router-dom";
import { Switch } from "react-router-dom";
import { Route } from "react-router-dom";

import { Provider } from "react-redux";
import store from "./redux/store.tsx";

import { ThemeProvider } from '@mui/material/styles';
import { theme } from "./styles/theme.js";

import CreatePlaylistPage from "./pages/createPlaylistPage.tsx";
import ProfilePage from "./pages/ProfilePage.jsx";
import LandingPage from "./pages/landingPage";

function App() {
  return (
    <React.Fragment>
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          <Router>
            <Switch>
              <Route exact path="/">
                <LandingPage />
              </Route>
              <Route path="/create-playlist">
                <CreatePlaylistPage />
              </Route>
              <Route path="/Profile">
                <ProfilePage />
              </Route>
            </Switch>
          </Router>
        </Provider>
      </ThemeProvider>
    </React.Fragment>
  )
}

export default App;


window.onbeforeunload = () => {
  localStorage.removeItem('accessToken');
}