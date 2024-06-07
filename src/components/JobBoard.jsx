import ContainerContext from "../context/ContainerContext";

function JobBoard({ children }) {
  return <ContainerContext>{children}</ContainerContext>;
}

export default JobBoard;
