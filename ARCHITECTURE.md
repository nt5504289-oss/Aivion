## Architecture Flow

Frontend (Vercel)
↓
JavaScript (Fetch API)
↓
Flask Backend (Render)
↓
Groq API (LLM)
↓
Response → JSON → Frontend UI

## Components

### 1. Frontend
- HTML, CSS, JavaScript
- Handles UI & user interaction
- Sends requests using fetch()

### 2. Backend (Flask)
- API server
- Handles routes like:
  - /api/chat
  - /api/summary
  - /api/quiz
  - /api/flashcards

### 3. AI Layer
- Groq API
- Model: openai/gpt-oss-120b
- Generates responses dynamically

## Key Features
- Chatbot
- Summarizer
- Quiz Generator
- Flashcards
- Study Timer

## Deployment
- Frontend → Vercel
- Backend → Render
- AI → Groq API
