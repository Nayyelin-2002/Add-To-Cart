import React from "react";
import Main from "./layout/Main";
import ItemContextProvider from "./itemContext";
function App() {
  return (
    <ItemContextProvider>
      <Main />
    </ItemContextProvider>
  );
}

export default App;
