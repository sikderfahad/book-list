import { useState } from "react";
import styles from "../../styles/Book.module.css";

const Book = ({ book }) => {
  const [showDescription, setShowDescription] = useState(false);

  return (
    <div className={styles.bookCard}>
      <div className="">
        <h2 title="book name" className={styles.title}>
          {book.title}
        </h2>
        <p className={styles.author}>
          (<strong>Author:</strong> {book.author})
        </p>
        <p className={styles.year}>
          {/* <strong>Published year:</strong> {book.year} */}
          Published year:{" "}
          <strong
            style={{
              color: "purple",
            }}
          >
            {" "}
            {book.year}
          </strong>
        </p>
        <button
          style={showDescription ? { background: "green" } : {}}
          className={styles.button}
          onClick={() => setShowDescription(!showDescription)}
        >
          {showDescription ? "Hide" : "Show"} Description
        </button>
        {showDescription && (
          <p className={styles.description}>{book.description}</p>
        )}
      </div>
    </div>
  );
};

export default Book;
