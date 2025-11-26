## MERN Stack Learning Projects Portfolio

This portfolio showcases my progress and understanding of the **MERN stack** by implementing practical, hands-on projects. Each project is designed to tackle a different set of challenges and solidify core concepts in **MongoDB**, **Express**, **React**, and **Node.js**.

---

## 1. Foundational Project: Basic Task Manager (To-Do List)

This project focuses on establishing the essential flow of a MERN application and mastering basic CRUD (Create, Read, Update, Delete) operations.

### Key Features Implemented:

- **Create**: Add new tasks.
- **Read**: View all tasks.
- **Update**: Mark tasks as complete or edit their text.
- **Delete**: Remove tasks.

### MERN Concepts Mastered:

- **MongoDB:** Simple schema design for a `Task` (e.g., `text`, `isComplete`, `createdAt`).
- **Node.js/Express:** Setting up a basic server, defining RESTful API routes (`/api/tasks`).
- **React:** Managing component state (`useState`), handling user input from forms, fetching data using the `useEffect` hook.
- **Integration:** Connecting the React front-end to the Express back-end using **Axios** or the native `fetch` API.

---

## 2. Intermediate Project: Simple Blog Platform

This project introduces more complex data models and demonstrates essential concepts like user authentication and authorization.

### Key Features Implemented:

- **Multi-Model Design:** Posts, comments, and users.
- **User Management:** Sign up, log in, log out (using JWT).
- **Content Creation:** Users can create, edit, and delete their own blog posts.
- **Comments:** Users can post comments on articles.

### MERN Concepts Mastered:

- **MongoDB:** **Data relationships** (referencing Users to Posts and Posts to Comments).
- **Node.js/Express:**
  - Implementing **JSON Web Tokens (JWT)** for secure authentication.
  - Creating **middleware** to protect routes (e.g., ensuring only logged-in users can create a post).
  - **Environment Variables** (using `dotenv`) for sensitive information.
- **React:**
  - **State Management:** Using **Context API** or a library like Redux/Zustand for global user state.
  - **Routing:** Using `react-router-dom` for navigation and creating protected routes.
  - **Conditional Rendering:** Showing different UI based on the user's login status or ownership of a post.

---

## 3. Advanced Project: E-commerce Mockup (Product Catalog & Review System)

This project combines all previous concepts and adds advanced features like file uploads, searching, and filtering complex data.

### Key Features Implemented:

- **Product Listing:** Displaying a list of products with details.
- **Image Uploads:** Handling product image uploads (e.g., using **Multer** on the back-end and storing URLs).
- **Search and Filtering:** Implementing advanced queries for searching products by name and filtering by category or price range.
- **User Reviews:** Users can submit star ratings and text reviews for products.
- **Basic Shopping Cart:** Managing cart state (without payment integration).

### MERN Concepts Mastered:

- **MongoDB:** **Aggregation pipeline** for tasks like calculating average product ratings from reviews.
- **Node.js/Express:**
  - Handling **multipart/form-data** for file uploads.
  - Implementing robust API endpoints that accept and process **query parameters** for search/filter functionality.
- **React:**
  - **Custom Hooks:** Creating reusable logic (e.g., a hook for fetching and caching product data).
  - **Pagination:** Optimizing performance by loading data in chunks.

---

## Tools & Technologies Used

- **Front-end:** React.js, HTML5, CSS3, (Optional: Tailwind CSS / Styled Components)
- **Back-end:** Node.js, Express.js
- **Database:** MongoDB, Mongoose (ODM)
- **Authentication:** JSON Web Tokens (JWT), **Bcrypt** (for password hashing)
- **HTTP Client:** Axios
- **File Upload:** Multer
