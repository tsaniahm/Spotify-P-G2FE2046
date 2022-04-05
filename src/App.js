import React from "react";
import Index from "./pages/index.jsx"
import { Provider } from "react-redux";
import store from "./redux/store.jsx";

function App() {
  return (
    <React.Fragment>
      <Provider store={store}>
        <Index />
      </Provider>
    </React.Fragment>
  )
}

export default App;
