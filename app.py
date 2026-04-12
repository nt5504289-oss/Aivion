from flask import Flask, render_template, request, jsonify
from groq import Groq

# Configure Groq
client = Groq(api_key="#")

# Create app
app = Flask(__name__)


# ---------------- PAGES (GET) ----------------
@app.route("/")
def home():
    return render_template("index.html")

@app.route("/signup")
def signup():
    return render_template("signup.html")

@app.route("/summarize", methods=["GET"])
def summary_page():
    return render_template("summarize.html")

@app.route("/about-us")
def about():
    return render_template("about-us.html")

@app.route("/contact-us")
def contact():
    return render_template("contact-us.html")

@app.route("/summary")
def summary_2():
    return render_template("summary.html")

@app.route("/chat-bot")
def chatbot2():
    return render_template("chat-bot.html")

@app.route("/study-timer")
def study_timer():
    return render_template("study-timer.html")


# ----------------  API ----------------
@app.route("/summarize", methods=["POST"])
def summarize():
    data = request.get_json()
    text = data.get("text", "")

    if not text:
        return jsonify({"error": "No text provided"})

    try:
        response = client.chat.completions.create(
            model="openai/gpt-oss-120b",
            messages=[
                {
                    "role": "user",
                    "content": f"Summarize this into a short meaningful summary:\n{text}"
                }
            ]
        )

        result = response.choices[0].message.content

        return jsonify({"result": result.strip()})

    except Exception as e:
        return jsonify({"error": str(e)})


# ----------------  API ----------------
@app.route("/chat", methods=["POST"])
def chat():
    data = request.get_json()
    text = data.get("text", "")

    if not text:
        return jsonify({"error": "No message provided"})

    try:
        response = client.chat.completions.create(
            model= "openai/gpt-oss-120b",
            messages=[
                {
                    "role": "user",
                    "content": f"Reply in 1-2 simple lines:\n{text}"
                }
            ]
        )

        result = response.choices[0].message.content

        return jsonify({"result": result.strip()})

    except Exception as e:
        return jsonify({"error": str(e)})


# ---------------- RUN ----------------
if __name__ == "__main__":
    app.run(debug=True)