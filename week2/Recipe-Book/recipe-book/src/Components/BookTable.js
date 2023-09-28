import React from 'react';

export default function BookTable(props) {
  const { books, onBookDelete, onBookEdit } = props;

  return (
    <div>
      <table className="table mt-5">
        <thead>
          <tr>
            <th>Title</th>
            <th>Author</th>
            <th>ISBN</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody id="table-body">
          {books.map((book) => (
            <tr key={book.isbn}>
              <td>{book.title}</td>
              <td>{book.author}</td>
              <td>{book.isbn}</td>
              <td>
                <button
                  className="btn btn-danger bn-sm me-1"
                  onClick={() => onBookDelete(book)}
                >
                  Delete
                </button>
                <button
                  className="btn btn-warning bn-sm ms-1"
                  onClick={() => onBookEdit(book)}
                >
                  Edit
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
