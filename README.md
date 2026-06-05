# ImmiBot - Immigration Support Chatbot

ImmiBot is a mock immigration support company application featuring an AI-powered chatbot with strict guardrails. It specializes in US immigration support for F1, OPT, H1B, EAD, and visa transfers.

## Features
- **Guarded Chatbot:** Trained specifically on immigration topics; rejects out-of-scope questions.
- **Smart Routing:** Automatically recommends the appropriate company contact based on user queries.
- **Org Chart:** Displays the company's team and their respective roles.
- **Mission Statement:** Clear focus on empowering students and professionals.

## Tech Stack
- **Frontend:** React (Vite), TypeScript, Vanilla CSS, React Router.
- **Backend:** FastAPI (Python), Google GenAI (Gemini 2.0 Flash).

## Setup & Running

### 1. Prerequisites
- Node.js and npm
- Python 3.x
- Google Gemini API Key

### 2. Backend Setup
1. Navigate to the backend directory:
   ```bash
   cd backend
   ```
2. Create a `.env` file and add your API key:
   ```bash
   echo "GOOGLE_API_KEY=your_gemini_api_key_here" > .env
   ```
3. Activate the virtual environment:
   ```bash
   source venv/bin/activate
   ```
4. Run the FastAPI server:
   ```bash
   python main.py
   ```
   The backend will start at `http://localhost:8000`.

### 3. Frontend Setup
1. Open a new terminal and navigate to the frontend directory:
   ```bash
   cd frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```
   The frontend will start at `http://localhost:5173`.

## Deployment
This is a prototype implementation. For production, ensure CORS settings in `main.py` are restricted and the `.env` file is properly managed.
