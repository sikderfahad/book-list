import BookList from "./components/bookList/BookList";
import styles from "./styles/App.module.css";

function App() {
  return (
    <div className={styles.appContainer}>
      <h1 className={styles.heading}>Book List</h1>
      <BookList />
    </div>
  );
}

export default App;
