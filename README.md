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

TodoApp/
│
├── public/                     # Public assets (e.g., index.html)
├── src/                        # Source files
│   ├── App.js                  # Main component managing the state and sections
│   ├── App.css                 # Global styles for layout and appearance
│   ├── TodoForm.js             # Component for adding new tasks
│   ├── TodoForm.css            # Styles for the task input form
│   ├── TodoList.js             # Component for displaying tasks based on their status
│   ├── TodoList.css            # Styles for the task list
├── package.json                # Project dependencies and scripts
└── README.md                   # This documentation file

## Class Descriptions

### `App.js`
- **Manages the entire state** of the application, including tasks and recently deleted items.
- **Components:**
  - **TodoForm:** A form component for adding new tasks.
  - **TodoList:** A list component that displays tasks in different sections such as "Pending", "In Progress", "Completed", and "Recently Deleted".
- **Handles local storage** for saving tasks and deleted items across sessions.
- **Key Functions:**
  - `addTodo(text)`: Adds a new task to the `todos` state with a default status of "pending".
  - `updateTodoStatus(id, status)`: Updates the status of a task (e.g., from "pending" to "in progress").
  - `deleteTodo(id)`: Moves a task from the `todos` state to the `deletedTodos` state.
  - `recoverTodo(id)`: Recovers a task from `deletedTodos` back into the `todos` list.
  - `permanentlyDeleteTodo(id)`: Permanently removes a task from `deletedTodos`.

### `TodoForm.js`
- **Props:**
  - `onSubmit`: A function passed from the parent `App.js` to handle new task submission.
- **Handles user input** and task submission.
- **Renders** a form with an input field and a button.
- **Key Function:**
  - `handleSubmit(e)`: Prevents form default behavior, submits the task using `onSubmit`, and clears the input field.

### `TodoList.js`
- **Props:**
  - `todos`: An array of tasks to be displayed.
  - `onStatusChange`: A function for changing the status of tasks (e.g., "Start" to "Finish").
  - `onDelete`: A function for moving tasks to the "Recently Deleted" section.
  - `onRecover`: (optional) A function to recover a task from the "Recently Deleted" section.
  - `onPermanentlyDelete`: (optional) A function to permanently remove a task from the application.
  - `showRecoverButtons`: A boolean that determines if the "Recover" buttons should be displayed.
- **Renders** a list of tasks and buttons for status updates, deletion, and recovery.
- **Key Functionality:**
  - **Recover Mode:** Displays "Recover" and "Permanently Delete" buttons when tasks are in the "Recently Deleted" section.
  - **Task List View:** Displays tasks based on their current status, with buttons for updating their state or deleting them.

### CSS Styles

#### `App.css`
- Defines the layout for the entire app, including the todo sections (Pending, In Progress, Completed, Recently Deleted).
- Provides **responsive design** using media queries to ensure the app works across various screen sizes.

#### `TodoForm.css`
- Styles the input form for adding new tasks.
- Utilizes **hover effects** and **focus transitions** for the input and button elements to enhance the user experience.

#### `TodoList.css`
- Styles each task in the list with hover effects, transitions, and animations.
- **Strikethrough effect** is applied to tasks that are marked as "completed."
- Defines **styles for the recover and delete buttons** in the "Recently Deleted" section.

