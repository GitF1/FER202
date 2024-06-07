import { useReducer } from "react";

const initialState = {
  age: 21,
  name: "Per",
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

  return (
    <>
      <input value={state.name} onChange={handleInputChange} />
      <button onClick={handleButtonClick}>Increment age</button>
      <p>
        Hello, {state.name}. You are {state.age}.
      </p>
    </>
  );
}
