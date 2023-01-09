import React, { useState, useContext, Dispatch, SetStateAction } from 'react';
import { IGlobal } from '../@types/global';

const GlobalStateContext = React.createContext({
    state: {} as Partial<IGlobal>,
    setState: {} as Dispatch<SetStateAction<Partial<IGlobal>>>,
});

const GlobalStateProvider = ({children, value = {} as IGlobal}: { children: React.ReactNode; value?: Partial<IGlobal>; }) => {
    const [state, setState] = useState(value);
    return (
      <GlobalStateContext.Provider value={{ state, setState }}>
        {children}
      </GlobalStateContext.Provider>
    );
};

const useGlobalState = () => {    
    const context = useContext(GlobalStateContext);
    if (!context) {
      throw new Error("useGlobalState must be used within a GlobalStateContext");
    }
    return context;
};

export { GlobalStateProvider, useGlobalState };