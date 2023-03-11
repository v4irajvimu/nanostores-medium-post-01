import React, { createContext, useState, useContext, ReactNode } from "react";

const ModeContext = createContext<{
  mode: "light" | "dark";
  toggleMode: () => void;
}>({ mode: "light", toggleMode: () => {} });

const useModeStore = () => {
  const [mode, setMode] = useState<"light" | "dark">("light");
  return {
    mode,
    toggleMode: () =>
      setMode((prevMode) => (prevMode === "dark" ? "light" : "dark")),
  };
};

type ModeContextProviderProps = {
  children: ReactNode;
};

const ModeContextProvider = ({ children }: ModeContextProviderProps) => (
  <ModeContext.Provider value={useModeStore()}>{children}</ModeContext.Provider>
);

export const useModeContext = () => useContext(ModeContext);

export default ModeContextProvider;
