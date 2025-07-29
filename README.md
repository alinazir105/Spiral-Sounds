# Spiral Sounds

**Spiral Sounds** is a full-stack vinyl record store web application that displays a curated list of music records from a database. Users can browse all records, filter by genre, and search for specific titles. This project demonstrates a wide range of web development concepts using **HTML**, **CSS**, **JavaScript**, **Express**, and **SQL**.

---

## Features

*  View a catalog of vinyl records with album art, artist name, price, and genre.
*  Filter records based on genre.
*  Search functionality to find specific albums.
*  Add to Cart button (non-functional placeholder in current version).

---

## Tech Stack

* **Frontend**: HTML, CSS, JavaScript (Vanilla)
* **Backend**: Node.js with Express.js
* **Database**: SQLite / PostgreSQL (based on implementation)

---

## 📆 Learning Objectives

This project is designed to help you understand:

### 1. Middleware

* Logging, parsing, error handling.

### 2. Serving Static Files

* Serve HTML, CSS, images, and JS using `express.static()`.

### 3. Creating a Database

* Schema design for vinyl records.

### 4. Seeding a Database

* Insert initial data into your records table.

### 5. Retrieving Data

* Write SQL queries to fetch all records or filter by genre.

### 6. SQL Bindings

* Use parameterized queries to prevent SQL injection.

---

## 💡 Functionality

### ✅ Serve All Assets

* Use middleware to serve all frontend files.

### ✅ Display All Products

* On page load, fetch all products from the database.

### ✅ Display Filtered Products

* Based on user interaction (dropdown / search), query the backend accordingly.

---

## 🚧 Project Structure

```
spiral-sounds/
├── public/
│   ├── index.html
│   ├── style.css
│   └── script.js
├── db/
│   ├── schema.sql
│   └── seed.sql
├── server.js
├── routes/
│   └── records.js
├── controllers/
│   └── recordController.js
└── README.md
```

---

## 🔧 Getting Started

1. Clone the repo:

   ```bash
   git clone https://github.com/yourusername/spiral-sounds.git
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Run the database seed:

   ```bash
   sqlite3 spiral.db < db/seed.sql
   # or psql for PostgreSQL
   ```

4. Start the server:

   ```bash
   node server.js
   ```

5. Visit:

   ```
   http://localhost:8000
   ```

---

## Future Improvements

* Add Cart and Checkout functionality
* Admin dashboard to add/edit records
* User authentication
* Responsive design for mobile

---

## Credits

Created as part of a learning project to understand full-stack development using Express and SQL databases.
