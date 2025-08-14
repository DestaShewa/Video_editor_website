# 🎬 Video Editor Portfolio & Client Management System

A **full-stack portfolio website** for a professional video editor.  
It acts as both a **dynamic digital showcase** and a **private admin panel** that allows the client to manage their portfolio and services without coding.

---

## ✨ Features

### Public-Facing Site
- **🎥 Cinematic Hero** – Full-screen video background on the homepage.
- **🎞 Dynamic Portfolio** – Gallery of video projects fetched directly from the database.
- **📋 Dynamic Services Page** – Editable service list and add-ons managed by the client.
- **👤 Professional "About" Page** – Builds trust and highlights expertise.
- **📩 Contact Form** – Saves submissions directly to the database.

### Admin Panel
- **🔒 Secure Login** – Password-protected admin area.
- **📂 Portfolio Management** – CRUD interface to add, edit, and remove videos.
- **🛠 Services Management** – CRUD interface to manage offered services.

---

## 🛠 Tech Stack
**Frontend:** Next.js, React, TypeScript, Tailwind CSS  
**Backend:** Next.js API Routes, Node.js  
**Database:** MySQL  

---

## 🚀 Getting Started

Follow these steps to run the project locally.

### 📦 Prerequisites
Make sure you have the following installed:
- [Node.js](https://nodejs.org/) (includes npm)
- MySQL server (via XAMPP, MySQL Workbench, or similar)

---

### 📥 Installation & Setup

1️⃣ **Clone the repository**
```bash
git clone https://github.com/YourUsername/your-repo-name.git
cd your-repo-name


Install dependencies
npm install

Database setup

Create a database named video_portfolio_db.

Run SQL scripts to create:

users table (for admin login)

portfolio_videos table

services table

Insert the default admin user into the users table.

4️⃣ Configure environment variables
Create a .env file in the root directory and add:
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=your_mysql_password
DB_NAME=video_portfolio_db

Run the development server
npm run dev

Admin Access

Navigate to: http://localhost:3000/login

Username: admin

Password: password123 (or the one you set in the database)

License

This project is licensed under the MIT License.

Contributing

Pull requests are welcome! For major changes, please open an issue first to discuss your ideas.
