import { Route, Routes } from "react-router";

import VaultInfo from "./pages/Home/vault-info";
import { GlobalStateProvider } from "./context/GlobalStateProvider";
import { Landing } from "./pages/Home/landing";
import { Blockchain } from './pages/Home/blockchain';
import { Vault } from "./pages/Home/vault";
import { Fintech } from "./pages/Home/fintech";
import { CNFT } from "./pages/Home/cNFT";
import { Network } from "./pages/Home/network";

const App = () => {
  return (
    <>
      <GlobalStateProvider>
        <Routes>
          <Route path={"/"} element={<Landing />} />
          <Route path={"/VaultInfo"} element={<VaultInfo />} />
          <Route path={"/blockchain"} element={<Blockchain />} />
          <Route path={"/vault"} element={<Vault />} />
          <Route path={"/fintech"} element={<Fintech />} />
          <Route path={"/cNFT"} element={<CNFT />} />
          <Route path={"/network"} element={<Network />} />
        </Routes>
      </GlobalStateProvider>
    </>
  );
}

export default App;
