import React, { useState, useEffect } from 'react';
import { Book } from '../models/book';

export default function BookForm(props) {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [isbn, setIsbn] = useState('');

  useEffect(() => {
    const { bookToEdit } = props;
    if (bookToEdit) {
      setTitle(bookToEdit.title);
      setAuthor(bookToEdit.author);
      setIsbn(bookToEdit.isbn);
    }
  }, [props.bookToEdit]);

  const onBookFormSubmit = (e) => {
    e.preventDefault();

    if (!isValid()) {
      return;
    }

    const book = new Book(title, author, isbn);
    props.onBookCreated(book);
    clearInputs();
  };

  const isValid = () => {
    return title !== '' && author !== '' && isbn !== '';
  };

  const clearInputs = () => {
    setTitle('');
    setAuthor('');
    setIsbn('');
  };

  return (
    <div>
      <h1>Library</h1>

      <form id="form" onSubmit={onBookFormSubmit}>
        <div className="mb-3">
          <label htmlFor="title-input" className="form-label">
            Title
          </label>
          <input
            id="title-input"
            type="text"
            className="form-control"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="author-input" className="form-label">
            Author
          </label>
          <input
            id="author-input"
            type="text"
            className="form-control"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="isbn-input" className="form-label">
            #ISBN
          </label>
          <input
            id="isbn-input"
            type="text"
            className="form-control"
            value={isbn}
            onChange={(e) => setIsbn(e.target.value)}
          />
        </div>

        <div className="d-grid mt-4">
          <button className="btn btn-outline-primary" type="submit">
            {props.bookToEdit ? 'Update Book' : 'Add Book'}
          </button>
        </div>
      </form>
    </div>
  );
}
