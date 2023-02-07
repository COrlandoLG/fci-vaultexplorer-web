import { Route, Routes } from "react-router";

import VaultInfo from "./pages/Home/vault-info";
import { GlobalStateProvider } from "./context/GlobalStateProvider";
import { Landing } from "./pages/Home/landing";
import { Vault } from "./pages/Home/vault";

const App = () => {
  return (
    <>
      <GlobalStateProvider>
        <Routes>
          <Route path={"/"} element={<Landing />} />
          <Route path={"/VaultInfo"} element={<VaultInfo />} />
          <Route path={"/vault"} element={<Vault />} />
        </Routes>
      </GlobalStateProvider>
    </>
  );
}

export default App;
