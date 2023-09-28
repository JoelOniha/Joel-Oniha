import './App.css';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import BookForm from './Components/BookForm';
import BookTable from './Components/BookTable';

function App() {
  const [books, setBooks] = useState([]);
  const [bookToEdit, setBookToEdit] = useState(null);

  const onBookCreated = (book) => {
    setBookToEdit(null);
    setBooks((prevBooks) => [...prevBooks, book]);
  };

  const onBookDelete = (book) => {
    setBooks((prevBooks) => prevBooks.filter((x) => x.isbn !== book.isbn));
  };

  const onBookEdit = (book) => {
    setBookToEdit(book);
    setBooks((prevBooks) => prevBooks.filter((x) => x.isbn !== book.isbn));
  };

  return (
    <div className="text-center m-5">
      <div className="card p-4">
        <BookForm bookToEdit={bookToEdit} onBookCreated={onBookCreated} />
        <BookTable
          books={books}
          onBookEdit={onBookEdit}
          onBookDelete={onBookDelete}
        />
      </div>
    </div>
  );
}

export default App;
