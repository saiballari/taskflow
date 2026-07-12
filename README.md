<div align="center">

# 🚀 TaskFlow – Full Stack MERN Task Management Application

### Modern • Secure • Responsive • Production Ready

<p>
A professional full-stack task management application built using the <strong>MERN Stack</strong>. TaskFlow enables users to securely manage daily tasks with JWT authentication, task prioritization, due dates, advanced filtering, analytics dashboard, and a clean responsive interface.
</p>

<p>

![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react)
![Node.js](https://img.shields.io/badge/Node.js-Express-339933?style=for-the-badge&logo=node.js)
![MongoDB](https://img.shields.io/badge/MongoDB-Atlas-47A248?style=for-the-badge&logo=mongodb)
![JWT](https://img.shields.io/badge/Auth-JWT-orange?style=for-the-badge)
![Vercel](https://img.shields.io/badge/Frontend-Vercel-black?style=for-the-badge&logo=vercel)
![Render](https://img.shields.io/badge/Backend-Render-46E3B7?style=for-the-badge&logo=render)

</p>

---

## 🌐 Live Demo

**Frontend:** https://YOUR-VERCEL-URL.vercel.app

**Backend API:** https://YOUR-RENDER-URL.onrender.com

---

# 📸 Application Screenshots

## 🔐 Login Page

> Add Screenshot Here

<img src="screenshots/login.png" width="100%">

---

## 📝 Register Page

> Add Screenshot Here

<img src="screenshots/register.png" width="100%">

---

## 📊 Dashboard

> Add Screenshot Here

<img src="screenshots/dashboard.png" width="100%">

---

## ➕ Create Task

> Add Screenshot Here

<img src="screenshots/create-task.png" width="100%">

---

## ✏️ Edit Task

> Add Screenshot Here

<img src="screenshots/edit-task.png" width="100%">

---

## 📈 Analytics Dashboard

> Add Screenshot Here

<img src="screenshots/chart.png" width="100%">

---

# ✨ Features

### 🔐 Authentication

- User Registration
- User Login
- JWT Authentication
- Password Encryption using bcrypt
- Protected Routes

---

### ✅ Task Management

- Create Tasks
- Update Tasks
- Delete Tasks
- View All Tasks

---

### 🎯 Task Organization

- Priority Levels
  - 🔴 High
  - 🟡 Medium
  - 🟢 Low

- Due Date Support

- Task Status
  - Pending
  - Completed

---

### 🔍 Search & Filtering

- Search by Title
- Search by Description
- Filter by Status
- Filter by Priority
- Sort by Due Date

---

### 📊 Dashboard Analytics

- Total Tasks
- Pending Tasks
- Completed Tasks
- Interactive Pie Chart

---

### 🎨 UI

- Modern Design
- Responsive Layout
- Mobile Friendly
- Glassmorphism Cards
- Toast Notifications

---

# 🛠 Tech Stack

## Frontend

- React.js
- Vite
- Axios
- React Router DOM
- React Toastify
- Recharts
- React Icons

---

## Backend

- Node.js
- Express.js
- MongoDB Atlas
- Mongoose
- JWT
- bcryptjs
- dotenv
- CORS

---

## Deployment

Frontend → Vercel

Backend → Render

Database → MongoDB Atlas

---

# 📂 Folder Structure

```
TaskFlow
│
├── client
│   ├── src
│   │   ├── components
│   │   ├── pages
│   │   ├── services
│   │   └── assets
│   │
│   └── package.json
│
├── server
│   ├── config
│   ├── controllers
│   ├── middleware
│   ├── models
│   ├── routes
│   ├── server.js
│   └── package.json
│
└── README.md
```

---

# 🔒 Authentication Flow

```
User
   │
   ▼

Register/Login

   │
   ▼

JWT Token Generated

   │
   ▼

Stored in Local Storage

   │
   ▼

Axios Authorization Header

   │
   ▼

Protected API Routes

   │
   ▼

MongoDB Atlas
```

---

# 📦 Installation

## Clone Repository

```bash
git clone https://github.com/YOUR_USERNAME/taskflow.git
```

```
cd taskflow
```

---

## Backend

```bash
cd server

npm install

npm start
```

---

## Frontend

```bash
cd client

npm install

npm run dev
```

---

# ⚙ Environment Variables

## Server (.env)

```env
PORT=5000

MONGODB_URI=YOUR_MONGODB_URI

JWT_SECRET=YOUR_SECRET_KEY
```

---

## Client (.env)

```env
VITE_API_URL=https://YOUR-RENDER-URL.onrender.com/api
```

---

# 📡 API Endpoints

## Authentication

| Method | Endpoint | Description |
|----------|----------------|----------------|
| POST | /api/auth/register | Register User |
| POST | /api/auth/login | Login User |

---

## Tasks

| Method | Endpoint | Description |
|----------|----------------|----------------|
| GET | /api/tasks | Get All Tasks |
| POST | /api/tasks | Create Task |
| PUT | /api/tasks/:id | Update Task |
| DELETE | /api/tasks/:id | Delete Task |

---

# 🚀 Project Highlights

✔ JWT Authentication

✔ MERN Stack Architecture

✔ REST API

✔ MongoDB Atlas

✔ Responsive UI

✔ Search & Filtering

✔ Analytics Dashboard

✔ Task Priorities

✔ Due Dates

✔ CRUD Operations

✔ Production Deployment

---

# 🎯 Future Enhancements

- Dark Mode
- Email Notifications
- Drag & Drop Kanban Board
- Calendar View
- File Attachments
- Team Collaboration
- Task Categories
- Recurring Tasks
- AI Task Suggestions

---

# 👨‍💻 Developer

**Sai Ballari**

GitHub: https://github.com/saiballari

LinkedIn: https://www.linkedin.com/in/YOUR-LINKEDIN

Portfolio: https://YOUR-PORTFOLIO

---

<div align="center">

## ⭐ If you like this project, don't forget to Star the Repository!

Made with ❤️ using the MERN Stack

</div>
