import { createContext, useState } from "react";

export const ContextTem = createContext();

function ContainerContext({ children }) {
  const [value, setValue] = useState("default value");

  const initValueContext = {
    value,
    setValue,
  };

  return (
    <ContextTem.Provider value={initValueContext}>
      {children}
    </ContextTem.Provider>
  );
}

export default ContainerContext;
