# 🍝 Pasta Lavista - E-commerce Web Application

![Project Status](https://img.shields.io/badge/Status-Completed-success)
![Node.js](https://img.shields.io/badge/Node.js-v18+-green)
![Express.js](https://img.shields.io/badge/Express.js-4.x-lightgrey)
![MySQL](https://img.shields.io/badge/MySQL-Database-blue)

A full-stack web application for ordering Italian food, designed to demonstrate **backend logic**, **state management**, and **microservice-like architecture**. The system features a dynamic shopping cart without page reloads and secure user authentication.

---

## ✨ Key Features

* **🛒 Dynamic AJAX Shopping Cart:** Users can add/remove items and update totals instantly **without page reloads**.
* **🔐 Dual-Service Architecture:** Separated `Auth Service` and `Shop Service` to simulate a scalable microservices structure.
* **👤 State Management:** Handles persistent carts for registered users (Database) and temporary carts for guests (Session).
* **💳 Simulated Payment Gateway:** Complete checkout flow with QR Code generation.
* **🛡 Security:** Implemented `bcrypt` for password hashing and `express-validator` for input sanitization.

---

## 🏗 System Architecture

The application is structured into two distinct services running in parallel:

| Service | Port | Description |
| :--- | :--- | :--- |
| **Auth Service** (`auth-server.js`) | `3001` | Handles User Registration, Login, and Session Authentication using `cookie-session`. |
| **Shop Service** (`shop-server.js`) | `3000` | Manages Product Catalog, Cart Logic, and Order Processing. |

---

## 🛠 Tech Stack

* **Frontend:** HTML5, CSS3, Bootstrap (Responsive), EJS Templating, JavaScript (AJAX/Fetch)
* **Backend:** Node.js, Express.js
* **Database:** MySQL
* **Tools:** Git, Postman (for API testing)

---

## ⚙️ Installation & Run

1.  **Clone the repository**
    ```bash
    git clone [https://github.com/korawich/pasta-lavista-web.git](https://github.com/korawich/pasta-lavista-web.git)
    cd pasta-lavista-web
    ```

2.  **Install Dependencies**
    ```bash
    npm install
    ```

3.  **Setup Database**
    * Import `database/project.sql` into your local MySQL server (phpMyAdmin).
    * Create a database named `project`.
    * *Note: Check `database.js` and `shop-server.js` to ensure MySQL credentials match your local machine.*

4.  **Run the Services** (Open 2 Terminals)
    * **Terminal 1 (Auth):**
        ```bash
        npm run auth
        ```
    * **Terminal 2 (Shop):**
        ```bash
        npm run shop
        ```
---

## 📂 Project Structure

```text
pasta-lavista-web/
├── auth-server.js      # Authentication Service (Login/Register)
├── shop-server.js      # Shop Service (Product/Cart)
├── database.js         # Database Connection Config
├── database/           # SQL Dump files
├── docs/               # Project Report & Documentation
├── public/             # Static Assets (Images/CSS)
└── views/              # EJS Frontend Templates
```
