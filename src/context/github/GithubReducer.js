function GithubReducer(state, action) {
  switch (action.type) {
    case "GET_USERS":
      return {
        ...state,
        users: action.payload,
        loader: false,
      };

    case "GET_USER":
      return {
        ...state,
        user: action.payload,
        loader: false,
      };

    case "GET_REPOS":
      return {
        ...state,
        repos: action.payload,
        loader: false,
      };
    case "SET_LOADING":
      return {
        ...state,
        loader: true,
      };

    case "CLEAR_USERS":
      return {
        ...state,
        users: [],
        loader: false,
      };

    default:
      return state;
  }
}

export default GithubReducer;
