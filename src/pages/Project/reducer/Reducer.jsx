export function reducer(state, action) {
  switch (action.type) {
    // Define cases for different action types
    case "FETCH_PROJECTS":
      // Example: Perform async operation here (fetch projects)
      // Update state accordingly
      return { ...state, loading: true };

    case "FETCH_PROJECTS_SUCCESS": {
      return { ...state, loading: false, projects: action.payload };
    }

    case "FETCH_PROJECTS_FAILURE":
      return { ...state, loading: false, error: action.payload };

    default:
      throw new Error(`Unknown action type: ${action.type}`);
  }
}

export const initialState = {
  projects: [],
  loading: false,
  error: null,
};
