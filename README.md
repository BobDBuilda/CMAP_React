# CMAP - Your Interactive Campus Map

CMAP is a full-stack web application that provides an interactive map of a university campus. Users can view building information, search for locations, and get directions. This project is designed to be a modern, scalable, and maintainable solution for campus navigation.

## ✨ Features

*   **Interactive Map:** A fully interactive and pannable map of the campus.
*   **Search:** Search for buildings and other points of interest.
*   **Building Information:** Click on a building to view its details.
*   **Responsive Design:** A user-friendly experience on both desktop and mobile devices.
*   **Containerized:** Fully containerized with Docker for easy setup and deployment.

## 🛠️ Tech Stack

### Frontend (Client)

*   **Framework:** React with Vite
*   **Language:** TypeScript
*   **Styling:** CSS Modules (or a chosen consistent styling solution)
*   **State Management:** React Context
*   **Testing:** Vitest & React Testing Library

### Backend (Server)

*   **Framework:** FastAPI (or Flask) with Python
*   **Database:** PostgreSQL
*   **ORM:** SQLAlchemy (or chosen ORM)
*   **API:** RESTful API
*   **Testing:** Pytest

### DevOps

*   **Containerization:** Docker & Docker Compose
*   **CI/CD:** GitHub Actions
*   **Deployment:** Azure Web Apps

## 🚀 Getting Started

There are two ways to get the project running locally: with Docker (recommended) or by setting up the client and server manually.

### Prerequisites

*   [Node.js](https://nodejs.org/) (v18 or later)
*   [Python](https://www.python.org/) (v3.10 or later)
*   [Docker](https://www.docker.com/get-started) & [Docker Compose](https://docs.docker.com/compose/install/)

### 🐳 Installation with Docker (Recommended)

This is the easiest way to get the project up and running.

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/your-username/CMAP_React.git
    cd CMAP_React
    ```

2.  **Create a `.env` file in the `Server/backend` directory:**
    Copy the `.env.example` (you would create this file) to `.env` and fill in the required environment variables.
    ```
    # Server/backend/.env
    DATABASE_URL=postgresql://user:password@db:5432/cmap_db
    SECRET_KEY=your_secret_key
    ```

3.  **Build and run the containers:**
    ```bash
    docker-compose up --build
    ```

4.  **Access the application:**
    *   Frontend: `http://localhost:5173`
    *   Backend API: `http://localhost:8000/docs`

### 💻 Manual Installation

If you prefer to run the client and server separately without Docker:

#### Backend Setup

1.  **Navigate to the server directory:**
    ```bash
    cd Server/backend
    ```

2.  **Create a virtual environment and activate it:**
    ```bash
    python -m venv .venv
    source .venv/bin/activate  # On Windows, use `.venv\Scripts\activate`
    ```

3.  **Install dependencies:**
    ```bash
    pip install -r requirements.txt
    ```

4.  **Set up the database:**
    Make sure you have a PostgreSQL instance running. Update the `DATABASE_URL` in your `.env` file to point to your local database.

5.  **Run the database migrations (if applicable) and start the server:**
    ```bash
    # (Command to run migrations, e.g., `alembic upgrade head`)
    uvicorn index:app --reload
    ```

#### Frontend Setup

1.  **Navigate to the client directory:**
    ```bash
    cd Client
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Start the development server:**
    ```bash
    npm run dev
    ```

## 🧪 Testing

A good project is a well-tested project.

### Backend Tests

1.  **Navigate to the server directory:**
    ```bash
    cd Server/backend
    ```

2.  **Run the tests:**
    ```bash
    pytest
    ```

### Frontend Tests

1.  **Navigate to the client directory:**
    ```bash
    cd Client
    ```

2.  **Run the tests:**
    ```bash
    npm test
    ```

## 🚀 Deployment

This project is configured for continuous deployment to Azure Web Apps using GitHub Actions. The workflow is defined in `.github/workflows/azure-webapps-node.yml`.

When changes are pushed to the `main` branch, the workflow will automatically build and deploy the application.

## 🙌 Contributing

Contributions are welcome! If you have a feature request, bug report, or want to contribute to the code, please follow these steps:

1.  **Fork the repository.**
2.  **Create a new branch:** `git checkout -b feature/your-feature-name`
3.  **Make your changes.**
4.  **Write tests for your changes.**
5.  **Ensure all tests pass.**
6.  **Submit a pull request.**

---

*This README was generated with the help of an AI assistant to reflect the ideal state of this project.*