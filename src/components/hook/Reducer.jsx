import { useReducer } from "react";

const colors = ["red", "blue", "green", "yellow", "purple", "orange"];

const initialState = {
  age: 21,
  name: "Per",
  color: colors[Math.floor(Math.random() * colors.length)],
};

function reducer(state, action) {
  // eslint-disable-next-line default-case
  switch (action.type) {
    case "incremented_age": {
      return {
        ...state,
        age: state.age + 1,
      };
    }
    case "changed_name": {
      return {
        ...state,
        name: action.nextName,
      };
    }
    case "change-color": {
      return {
        ...state,
        color: colors[Math.floor(Math.random() * colors.length)],
      };
    }
  }
  throw Error("Unknown action: " + action.type);
}

export default function Form() {
  const [state, dispatch] = useReducer(reducer, initialState);

  function handleButtonClick() {
    dispatch({ type: "incremented_age" });
  }

  function handleInputChange(e) {
    dispatch({
      type: "changed_name",
      nextName: e.target.value,
    });
  }
  function handleChangeColor() {
    dispatch({
      type: "change-color",
    });
  }
  return (
    <>
      <input value={state.name} onChange={handleInputChange} />
      <button onClick={handleButtonClick}>Increment age</button>
      <p style={{ color: `${state.color}` }}>
        Hello, {state.name}. You are {state.age}.
      </p>
      <button onClick={handleChangeColor}>Change Color</button>
    </>
  );
}
