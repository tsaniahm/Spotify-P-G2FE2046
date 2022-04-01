import React from "react";
import Index from "./pages/index.jsx"

import { SelectedTrackContextProvider } from "./context/selectedTrackContext.jsx";

function App() {
  return (
    <React.Fragment>
      <SelectedTrackContextProvider>
        <Index />
      </SelectedTrackContextProvider>
    </React.Fragment>
  )
}

export default App;
