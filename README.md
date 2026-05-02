Team Task Manager (Full Stack)

Project Overview

Team Task Manager is a full-stack web application where users can create projects, assign tasks, and track progress with role-based access control (Admin/Member).

The application supports authentication, project management, task creation, and status tracking with a clean dashboard UI.

This project is deployed live using Railway.

---

Features

- User Registration (Signup) 
- User Login (JWT Authentication)
- Role-Based Access (Admin / Member)
- Create Projects
- Create Tasks
- Task Status Tracking (Pending / In Progress / Completed)
- Dashboard UI
- Protected APIs using Django REST Framework
- Railway Deployment

---

Tech Stack

Frontend

- React.js
- Vite
- Axios
- CSS

Backend

- Django
- Django REST Framework
- JWT Authentication

Database

- SQLite / PostgreSQL

Deployment

- Railway

---

Live Project Link

https://web-production-18ccf.up.railway.app

---

GitHub Repository

https://github.com/ayushmann1729/team-task-manager

---

How to Run the Project

Backend Setup

git clone <repository-link>
cd backend
python -m venv env
env\Scripts\activate
pip install -r requirements.txt
python manage.py makemigrations
python manage.py migrate
python manage.py runserver

---

Frontend Setup

cd frontend
npm install
npm run dev

---

API Endpoints

Authentication

- /api/register/
- /api/login/

Projects

- /api/projects/

Tasks

- /api/tasks/

---

Project Workflow

1. User registers with role (Admin/Member)
2. User logs in using credentials
3. Dashboard opens after login
4. User creates projects
5. User creates tasks
6. Task status is managed through dashboard

---

Author

Ayushman Singh

B.Tech Student | Full Stack Developer | React + Django Developer
