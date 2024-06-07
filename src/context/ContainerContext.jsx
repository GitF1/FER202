import { createContext, useState } from "react";

export const Context = createContext();

function ContainerContext({ children }) {
  const [value, setValue] = useState("default value");

  const initValueContext = {
    value,
    setValue,
  };

  return (
    <Context.Provider value={initValueContext}>{children}</Context.Provider>
  );
}

export default ContainerContext;
