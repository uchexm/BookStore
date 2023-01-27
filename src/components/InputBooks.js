import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import swal from 'sweetalert';
import { addBook } from '../redux/Book/Book';
import './InputBooks.css';

function InputBooks() {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const book = {
      id: uuidv4(),
      title,
      author,
    };

    if (title.length && author.length) {
      dispatch(addBook(book));
      swal('Done!', `${title} successfully added`, 'success');
      setTitle('');
      setAuthor('');
    }
  };

  return (
    <div>
      <h3 className="addBookHeader">ADD NEW BOOK</h3>
      <form onSubmit={handleSubmit} className="form-container">
        <input
          className="title"
          type="text"
          placeholder="Book title"
          value={title}
          name="title"
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <select className="category">
          <option value="Category">Category</option>
          <option value="Science Fiction">Science Fiction</option>
          <option value="Economy">Economy Fiction</option>
        </select>

        <button type="submit" onSubmit={handleSubmit} className="addBook">
          ADD BOOK
        </button>
      </form>
    </div>
  );
}

export default InputBooks;
