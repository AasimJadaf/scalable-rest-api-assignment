# 🚀 Scalable REST API with Authentication & RBAC

#GitHub Repository:
https://github.com/your-username/scalable-rest-api-assignment

#Live Application:
https://your-frontend.vercel.app


#Backend API:
https://scalable-rest-api-assignment.onrender.com


## 📌 Overview
This project is a full-stack application demonstrating a scalable backend system with authentication and role-based access control (RBAC), along with a simple frontend UI to interact with APIs.

---

## ⚙️ Tech Stack

### Backend
- Node.js
- Express.js
- MongoDB Atlas
- JWT Authentication
- bcrypt (password hashing)

### Frontend
- React (Vite)
- Axios
- React Router

---

## 🔐 Features

### Authentication
- User Registration
- User Login with JWT
- Password hashing using bcrypt

### Role-Based Access
- User role (default)
- Admin role (can delete tasks)

### Task Management (CRUD)
- Create Task
- Get All Tasks (user-specific)
- Update Task
- Delete Task (Admin only)

### Security
- Protected routes using JWT
- Input validation
- Secure password storage

---

## 🌐 API Endpoints

### Auth
- POST `/api/auth/register`
- POST `/api/auth/login`

### Tasks
- GET `/api/tasks`
- POST `/api/tasks`
- PUT `/api/tasks/:id`
- DELETE `/api/tasks/:id` (Admin only)

---

## 💻 Frontend Features
- Login / Signup UI
- Protected Dashboard
- Add / Update Tasks
- Clean modern UI

---

## 🧠 Scalability Notes

- Modular architecture (controllers, routes, middleware)
- Can be extended to microservices
- Add Redis for caching
- Use load balancer (NGINX)
- Docker containerization possible
- Horizontal scaling supported

---

## 🚀 Setup Instructions

### Backend
```bash
cd backend
npm install

### Frontend
cd frontend
npm install
npm run dev



npm run dev
