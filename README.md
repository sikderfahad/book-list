# 📚 React Book List Application

## 🚀 Project Overview

This is a **single-page React application** that displays a list of books. Users can:

- View book details including **title, author, and publication year**.
- Click a button to **toggle a brief description** of each book.
- Use a **search bar** to filter books by title or author.
- Enjoy a **responsive UI** that adapts to different screen sizes.

## 📁 Project Structure

```
📂 my-book-app
├── 📁 public
│   ├── 📄 books.json  (Contains book data)
├── 📁 src
│   ├── 📁 components
│   │   ├── 📄 Book.jsx  (Single book component)
│   │   ├── 📄 BookList.jsx  (Main book list component)
│   ├── 📁 styles
│   │   ├── 📄 BookList.module.css  (CSS Modules for styling)
│   │   ├── 📄 Book.module.css  (CSS Modules for Book component styling)
│   │   ├── 📄 App.module.css  (CSS Modules for App component styling)
│   ├── 📄 App.jsx  (Main App component)
│   ├── 📄 index.js  (Entry point)
├── 📄 package.json  (Project dependencies)
├── 📄 README.md  (This file)
```

## 🛠️ Technologies Used

- **React.js** (Component-based UI development)
- **CSS Modules** (Scoped styling for maintainability)
- **JavaScript (ES6+)** (Modern syntax and best practices)

## 📜 Development Decisions

### ✅ **State Management**

- Used **React's useState hook** for managing the book list and search term.
- Avoided external libraries like Redux as per requirements.

### ✅ **Data Handling**

- Stored book data in `books.json` and fetched it dynamically using `fetch()`.
- Makes the app **scalable** and allows easy data updates without modifying components.

### ✅ **Code Quality**

- Used **functional components** and **React best practices**.
- Code is **clean, modular, and well-commented** for easy maintenance.

### ✅ **Responsive Design**

- Used **CSS Modules** with `@media` queries to ensure compatibility across devices.
- Optimized layout for **desktop, tablet, and mobile screens**.

## 🏃‍♂️ How to Run the Application

### 1️⃣ Clone the Repository

```sh
git clone https://github.com/your-username/my-book-app.git
cd my-book-app
```

### 2️⃣ Install Dependencies

Using npm:

```sh
npm install
```

Using Yarn:

```sh
yarn install
```

### 3️⃣ Start the Development Server

Using npm:

```sh
npm run dev
```

Using Yarn:

```sh
yarn dev
```

Then open **http://localhost:5173/** in your browser.

## 🎯 Additional Requirements Fulfilled

✔ **No external state management libraries used (Redux, MobX, etc.)**  
✔ **Code follows best practices, is modular, and well-commented**  
✔ **Fully responsive and mobile-friendly design**

---

✨ **Developed with ❤️ using React.js** ✨
