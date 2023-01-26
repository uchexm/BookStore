// Actions
const CHECK_STATUS = "bookstore/categories/CHECK_STATUS";

// Reducer
const categoriesReducer = (state = [], action) => {
  switch (action.type) {
    case CHECK_STATUS:
      return "Page under Construction";
    default:
      return state;
  }
};

// Action Creator
export const checkStatus = () => ({ type: CHECK_STATUS });

export default categoriesReducer;
