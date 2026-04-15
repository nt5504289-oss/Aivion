# 📡 API Documentation

## Base URL
https://aivion.onrender.com/
---

## 🧠 Chat API

POST /api/chat

Request:
{
  "text": "What is AI?"
}

Response:
{
  "result": "AI is the simulation of human intelligence..."
}

---

## 📝 Summary API

POST /api/summary

Request:
{
  "text": "Long paragraph..."
}

Response:
{
  "result": "Short summary..."
}

---

## ❓ Quiz API

POST /api/quiz

Response:
{
  "quiz": [
    {
      "question": "...",
      "options": ["A", "B", "C", "D"],
      "answer": "..."
    }
  ]
}

---

## 📇 Flashcards API

POST /api/flashcards

Response:
{
  "flashcards": [
    {
      "question": "...",
      "answer": "..."
    }
  ]
}
