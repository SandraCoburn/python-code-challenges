import React, { useState } from 'react';

const AddMovie = () => {
  const [recentBook, setRecentBook] = useState('');
  const [books, setBooks] = useState([{ id: 1, title: 'first book' }]);

  function addBook(e) {
    e.preventDefault();
    setBooks((books) => [...books, { id: new Date(), title: recentBook }]);
  }
  function deleteBook(book) {
    let deletedBooks = books.filter((deleted) => deleted.id !== book.id);
    setBooks(deletedBooks);
  }
  return (
    <>
      <div>
        <label>Add Book </label>
        <input
          name="book"
          value={recentBook}
          onChange={(e) => setRecentBook(e.target.value)}
        />
        <button onClick={addBook}> Add</button>
      </div>
      <div>
        <h5>List of Books</h5>
        {books.map((book) => (
          <ul>
            <li>{book.title}</li>
            <button onClick={() => deleteBook(book)}>delete</button>
          </ul>
        ))}
      </div>
    </>
  );
};
export default AddMovie;
