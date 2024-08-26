# Task App

Task App is a full-stack application for managing tasks, allowing users to create, update, delete, and view tasks. The application is built using Node.js for the backend and Next.js for the frontend, ensuring a seamless and dynamic user experience.

## Login Page
![image](https://github.com/user-attachments/assets/b7c5ab27-58fa-436a-8507-f91d2dac4fb7)

## Home Page 
![image](https://github.com/user-attachments/assets/9e1386c1-f643-4c23-ae2f-b8504c014ac9)

## Add / Edit Page
![image](https://github.com/user-attachments/assets/5d45afbf-f520-4df1-b582-4c668841102f)

## Dashboard Page
![image](https://github.com/user-attachments/assets/653a134b-c825-4259-8c62-260714226768)


## Features

- **Create Tasks**: Add new tasks with details such as title, description, due date, priority, and location reminders.
- **Edit Tasks**: Modify existing tasks to keep your task list up-to-date.
- **Delete Tasks**: Remove tasks that are no longer needed.
- **View Tasks**: Display all tasks with an easy-to-read interface, including filtering options by priority and due date.
- **Responsive Design**: Optimized for both desktop and mobile devices.

## Tech Stack

### Frontend

- **Next.js**: A React framework for server-side rendering, static site generation, and building dynamic web applications.
- **React Hook Form**: For managing form state and validations.
- **Zod**: A TypeScript-first schema declaration and validation library.
- **Tailwind CSS**: A utility-first CSS framework for styling.

### Backend

- **Node.js**: JavaScript runtime environment for building server-side applications.
- **Express**: A minimal and flexible Node.js web application framework.
- **MongoDB**: A NoSQL database for storing task data.
- **Mongoose**: An Object Data Modeling (ODM) library for MongoDB and Node.js.

## Installation

### Prerequisites

- **Node.js** (v14.x or higher)
- **npm** (v6.x or higher) or **yarn** (v1.x or higher)
- **MongoDB** (Local instance or MongoDB Atlas)

### Backend Setup

1. **Clone the repository:**

   ```bash
   git clone https://github.com/yourusername/task-app.git
   cd task-app/be
   ```

2. **install dependencies:**

   ```
    npm install
   ```

3. **Set up environment variables:**

   ```Create a .env file in the backend directory and add your environment variables:
       MONGODB_URI=your_mongodb_uri
       PORT=5000
   ```

4. **Start the server:**

   `npm run dev`

### Frontend Setup

1. **Navigate to the frontend directory:**

   ```
   cd ../fe
   ```

2. **install dependencies:**

   ```
    npm install
   ```

3. **Set up environment variables:**

   ```Create a .env file in the frontend directory and add your environment variables:
       NEXT_PUBLIC_API_URL=http://localhost:5000
   ```

4. **Run the development server:**

   `npm run dev`

### Usage

1. Visit the frontend URL http://localhost:3000 in your browser.
2. login and directly go to the home page.
3. Start managing tasks by adding, editing, or deleting them as needed.

### Folder Structure

task-app/
├── be/
   │ ├── controllers/
   │ ├── models/
   │ ├── routes/
   │ ├── utils/
   │ ├── .env
   │ ├── server.js
   │ └── package.json
└── fe/
   ├── components/
   ├── pages/
   ├── styles/
   ├── .env.local
   ├── next.config.js
   └── package.json
