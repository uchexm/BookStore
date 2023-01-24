/* eslint-disable import/extensions */
import { configureStore, combineReducers } from '@reduxjs/toolkit';
import bookReducer from './Book/Book';
import categoriesReducer from './categories/Categories.js';

const rootReducer = combineReducers({
  books: bookReducer,
  categories: categoriesReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
