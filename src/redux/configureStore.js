import { configureStore, combineReducers } from "@reduxjs/toolkit";
import bookReducer from "./Books/Books";
import categoriesReducer from "./categories/Categories";

const rootReducer = combineReducers({
  books: bookReducer,
  categories: categoriesReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;