# Todo List with Recently Deleted Feature

This project is a **React-based Todo List** application that allows users to manage tasks with added functionality for handling recently deleted tasks. It includes features for creating, updating, and deleting tasks, along with the ability to recover recently deleted items or permanently delete them. The project is designed with a focus on a clean, user-friendly interface using React, and custom CSS for styling.

## Project Description

The **Todo List with Recently Deleted** application allows users to add new tasks, update task statuses (e.g., pending, in progress, completed), and manage deleted tasks. Deleted tasks are moved to a separate "Recently Deleted" section, where users can either recover or permanently delete them.

### Key Features:
- **Task Management:** Users can create, update (e.g., mark tasks as in progress or completed), and delete tasks.
- **Recently Deleted Section:** Displays tasks that have been deleted, providing options to recover or permanently delete them.
- **Dynamic Task Categories:** Tasks are categorized into "Pending," "In Progress," "Completed," and "Recently Deleted."
- **Responsive Design:** The application is designed to adapt to different screen sizes, providing an optimal experience on mobile, tablet, and desktop devices.
- **Task Persistence:** Tasks are saved in `localStorage` to ensure data is retained across sessions.

## Technologies Used:
- **React:** Used for building the user interface and managing component state.
- **Material-UI:** Icons (like delete) are provided by Material-UI for a modern look.
- **CSS:** Custom styles in `App.css`, `TodoForm.css`, and `TodoList.css` for layout and design.
- **JavaScript (ES6):** Handles dynamic updates, user interactions, and task management logic.

## How to Install and Run the Project

### Prerequisites
- **Node.js** (version 12.x or higher)
- **npm** or **yarn** (for managing dependencies)

### Steps
1. Clone the Repository:
   ```bash
   git clone https://github.com/yourusername/todo-app.git
   cd todo-app

2. Install dependencies:
   ```bash
   npm install
   
3. Run the application:
    ```bash
    npm start

4. Open the browser and navigate to http://localhost:3000.
