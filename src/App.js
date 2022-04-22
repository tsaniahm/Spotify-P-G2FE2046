import React from "react";
import { Provider } from "react-redux";
import store from "./redux/store.jsx";
import { BrowserRouter as Router } from "react-router-dom";
import { Switch } from "react-router-dom";
import { Route } from "react-router-dom";
import CreatePlaylistPage from "./pages/createPlaylistPage.jsx";
import { ThemeProvider } from '@mui/material/styles';
import { theme } from "./styles/theme.js";
import LandingPage from "./pages/landingPage";
import ProfilePage from "./pages/ProfilePage.jsx";

function App() {
  window.onbeforeunload = () => {
    localStorage.removeItem('accessToken')
  }
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
