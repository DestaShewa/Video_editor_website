Video Editor Portfolio & Client Management System
A full-stack portfolio website designed for a professional video editor. It serves as a dynamic digital showcase and includes a private admin panel for the client to manage their own portfolio and services without needing to code.
Key Features
Public-Facing Site
Cinematic Hero: Full-screen video background on the home page.
Dynamic Portfolio: A gallery of video projects fetched directly from the database.
Dynamic Services Page: A detailed list of services and add-ons managed by the client.
Professional 'About' Page: Builds trust and showcases expertise.
Contact Form: Submissions are saved directly to the database.
Admin Panel
Secure Login: Password-protected admin area.
Portfolio Management: A CRUD (Create, Read, Update, Delete) interface to add or remove portfolio videos.
Services Management: A CRUD interface to add or remove services offered.
Tech Stack
Frontend: Next.js, React, TypeScript, Tailwind CSS
Backend: Next.js API Routes, Node.js
Database: MySQL
Getting Started
Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.
Prerequisites
You will need the following software installed on your computer:
Node.js (which includes npm)
A local MySQL server (e.g., via XAMPP or MySQL Workbench)
Installation & Setup
Clone the repository:
code
Bash
git clone https://github.com/YourUsername/your-repo-name.git
cd your-repo-name
Install dependencies:
This will install all the necessary packages for the Next.js application.
code
Bash
npm install
Database Setup:
Using your MySQL tool, create a new database named video_portfolio_db.
Run the necessary SQL scripts to create the users, portfolio_videos, and services tables.
Insert the default admin user into the users table.
Environment Variables:
In the root of the project, create a new file named .env.
Copy the contents of .env.example (or the block below) into it and fill in your database credentials.
code
Code
# .env file
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=your_mysql_password
DB_NAME=video_portfolio_db
Run the development server:
code
Bash
npm run dev
The application will be available at http://localhost:3000.
Admin Access
Navigate to http://localhost:3000/login
Username: admin
Password: password123 (or whatever you set in the database)
