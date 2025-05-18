Express.js Assignment

This repository contains **beginner-friendly Express.js coding exercise** to help you build a RESTful API to manage books using Express.js.

## Build a Mini Library API 📚 (Using Express.js)

You’re now the backend developer of a simple **Library System**. Your goal is to build a RESTful API to manage books using Express.js.

---
✅ Task: Create a Book Manager API
Use an array of objects to represent books in your system.

Each book should have:
`id`, `title`, `author`, and `genre`.
---
Your API must support these routes:

| GET | `/books` | Get all books |
| GET | `/books/:id` | Get a single book by ID (URL param) |
| POST | `/books` | Add a new book |
| PUT | `/books/:id` | Replace full details of a book |
| PATCH | `/books/:id` | Update part of a book’s information |
| DELETE | `/books/:id` | Delete a book by ID |
---

### 🧠 Use These Concepts:

- HTTP Methods (GET, POST, PUT, PATCH, DELETE)
- Path Parameters (`:id`)
- HTTP Status Codes (200, 201, 404, 500)
