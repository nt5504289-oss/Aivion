from flask import Flask, request, jsonify
from groq import Groq
from flask_cors import CORS
import os

app = Flask(__name__)
CORS(app)

client = Groq(api_key=os.getenv("GROQ_API_KEY"))


# ---------------- SUMMARY ----------------
@app.route("/api/summary", methods=["POST"])
def summarize():
    data = request.get_json()
    text = data.get("text", "")

    if not text:
        return jsonify({"error": "No text provided"})

    try:
        response = client.chat.completions.create(
            model="openai/gpt-oss-120b",
            messages=[{"role": "user", "content": f"Summarize:\n{text}"}]
        )

        result = response.choices[0].message.content
        return jsonify({"result": result.strip()})

    except Exception as e:
        return jsonify({"error": str(e)})


# ---------------- CHAT ----------------
@app.route("/api/chat", methods=["POST"])
def chat():
    data = request.get_json()
    text = data.get("text", "")

    if not text:
        return jsonify({"error": "No message provided"})

    try:
        response = client.chat.completions.create(
            model="openai/gpt-oss-120b",
            messages=[{"role": "user", "content": f"Reply shortly:\n{text}"}]
        )

        result = response.choices[0].message.content
        return jsonify({"result": result.strip()})

    except Exception as e:
        return jsonify({"error": str(e)})


# ---------------- QUIZ ----------------
@app.route("/api/quiz", methods=["POST"])
def quiz():
    data = request.get_json()
    text = data.get("text", "")

    if not text:
        return jsonify({"error": "No input provided"})

    try:
        prompt = f"""Generate 5 MCQs in JSON format.

{{
  "quiz":[
    {{"question":"","options":["A","B","C","D"],"answer":""}}
  ]
}}

Text:
{text}
"""

        response = client.chat.completions.create(
            model="openai/gpt-oss-120b",
            messages=[{"role": "user", "content": prompt}]
        )

        result = response.choices[0].message.content
        clean = result.replace("```json", "").replace("```", "").strip()

        return jsonify({"result": clean})

    except Exception as e:
        return jsonify({"error": str(e)})


# ---------------- FLASHCARDS ----------------
@app.route("/api/flashcards", methods=["POST"])
def flashcards():
    data = request.get_json()
    text = data.get("text", "")

    if not text:
        return jsonify({"error": "No input provided"})

    try:
        prompt = f"""Generate flashcards JSON.

{{
  "flashcards":[
    {{"question":"","answer":""}}
  ]
}}

Text:
{text}
"""

        response = client.chat.completions.create(
            model="openai/gpt-oss-120b",
            messages=[{"role": "user", "content": prompt}]
        )

        result = response.choices[0].message.content
        clean = result.replace("```json", "").replace("```", "").strip()

        return jsonify({"result": clean})

    except Exception as e:
        return jsonify({"error": str(e)})


if __name__ == "__main__":
    app.run(debug=True)