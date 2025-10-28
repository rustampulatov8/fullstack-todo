# 📝 Fullstack ToDo App  
![CI](https://github.com/rustampulatov8/fullstack-todo/actions/workflows/ci.yml/badge.svg)

A simple yet powerful **Fullstack ToDo Application** built with **React (Vite)** and **Node.js (Express)**.  
This project demonstrates a clean fullstack architecture — with REST API, frontend integration, automated CI/CD, and full cloud deployment.

---

## 🚀 Live Demo  

| Service | URL |
|----------|-----|
| 🌐 **Frontend (Vercel)** | [mytodorep.vercel.app](https://mytodorep.vercel.app) |
| ⚙️ **Backend (Render)** | [fullstack-todo-x3bc.onrender.com/api/todos](https://fullstack-todo-x3bc.onrender.com/api/todos) |

---

## 🧩 Features  

✅ Create, view, and delete todo items  
✅ RESTful API built with Express  
✅ Modern React frontend with Vite  
✅ Deployed serverless frontend (Vercel)  
✅ Cloud backend on Render  
✅ Continuous Integration (GitHub Actions)  

---

## 🧠 Tech Stack  

**Frontend:**  
- React (Vite)  
- Fetch API  
- CSS  

**Backend:**  
- Node.js  
- Express.js  
- CORS & Body-Parser  
- REST API routing  

**DevOps / Cloud:**  
- Render (Backend Hosting)  
- Vercel (Frontend Hosting)  
- GitHub Actions (CI/CD)  

---

## ⚙️ CI/CD Pipeline  

This project includes a **GitHub Actions** workflow for backend tests:


Each `git push` triggers:
1. Node.js setup  
2. Dependency install  
3. Test execution  
4. Build verification  

---

## 🧑‍💻 Local Setup  

### 1️⃣ Clone the repository  
```bash
git clone https://github.com/rustampulatov8/fullstack-todo.git
cd fullstack-todo
2️⃣ Backend setup
cd backend
npm install
node index.js
3️⃣ Frontend setup
cd ../frontend
npm install
npm run dev



