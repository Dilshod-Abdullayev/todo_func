const initialState = {
    size: "16px",
  };
  
  export default function sizeReducer(state = initialState, action) {
    switch (action.type) {
      case "first":
        return {
          ...state,
          size: "16px",
        };
      case "second":
        return {
          ...state,
          size: "24px",
        };
      case "three":
        return {
          ...state,
          size: "32px",
        };
      default:
        return state;
    }
  }
  