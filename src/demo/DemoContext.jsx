import { createContext } from "react";

const contextContainer = createContext();

function DemoContext({ children }) {
  return { children };
}

export default DemoContext;
