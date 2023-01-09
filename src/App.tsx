import React from 'react';
import { Route, Routes } from "react-router";

import { Landing } from "./pages/Home/landing";
import VaultInfo from "./pages/Home/vault-info";
import { GlobalStateProvider } from "./context/GlobalStateProvider";

const App = () => {
  return (
    <>
      <GlobalStateProvider>
        <Routes>
          <Route path={"/"} element={<Landing />} />
          <Route path={"/VaultInfo"} element={<VaultInfo />} />
        </Routes>
      </GlobalStateProvider>
    </>
  );
}

export default App;
