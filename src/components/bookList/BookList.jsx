import { useEffect, useState } from "react";
import styles from "../../styles/BookList.module.css";
import Book from "../book/Book";

const BookList = () => {
  const [booksData, setBooksData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  // Load books data (local)
  useEffect(() => {
    fetch("books.json")
      .then((response) => response.json())
      .then((data) => setBooksData(data))
      .catch((error) => console.error("Error fetching books:", error));
  }, []);

  // Display books according to search filter
  const filteredBooks = booksData.filter(
    (book) =>
      book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      book.author.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className={styles.container}>
      <div style={{ width: "100%" }} className="">
        <input
          type="text"
          className={styles.searchInput}
          placeholder="Search by title or author..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <div className={styles.bookList}>
        {filteredBooks.map((book, index) => (
          <Book key={index} book={book} />
        ))}
      </div>
    </div>
  );
};

export default BookList;
