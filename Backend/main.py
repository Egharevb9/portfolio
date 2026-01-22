from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import smtplib
import os
from email.message import EmailMessage
import openai

# ------------------ CONFIG ------------------
openai.api_key = os.getenv("OPENAI_API_KEY")
EMAIL_USER = os.getenv("EMAIL_USER")
EMAIL_PASS = os.getenv("EMAIL_PASS")

# ------------------ APP ------------------
app = FastAPI(title="Portfolio Backend")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"] ,
    allow_credentials=True,
    allow_methods=["*"] ,
    allow_headers=["*"] ,
)

# ------------------ MODELS ------------------
class Feedback(BaseModel):
    message: str

class Question(BaseModel):
    question: str

# ------------------ OFFLINE AI DATA ------------------
OFFLINE_ANSWERS = {
    "who are you": "I am Esther, an AI and software developer specializing in React, FastAPI, and intelligent web systems.",
    "skills": "Esther works with React, Tailwind CSS, FastAPI, Python, AI integrations, and modern web technologies.",
    "projects": "Esther has built AI-powered portfolios, web applications, and backend systems using FastAPI.",
}

# ------------------ FEEDBACK ROUTE ------------------
@app.post("/feedback")
def send_feedback(data: Feedback):
    msg = EmailMessage()
    msg.set_content(data.message)
    msg["Subject"] = "New Portfolio Feedback"
    msg["From"] = EMAIL_USER
    msg["To"] = EMAIL_USER

    try:
        with smtplib.SMTP_SSL("smtp.gmail.com", 465) as server:
            server.login(EMAIL_USER, EMAIL_PASS)
            server.send_message(msg)
    except Exception as e:
        # Raise an HTTP 500 with the exception detail so clients can see why sending failed.
        raise HTTPException(status_code=500, detail=f"Failed to send email: {e}")

    return {"status": "Feedback sent successfully"}


@app.get("/feedback-debug")
def feedback_debug():
    """Attempt to login to the SMTP server and return the error (useful for debugging SMTP/auth issues)."""
    try:
        with smtplib.SMTP_SSL("smtp.gmail.com", 465) as server:
            server.login(EMAIL_USER, EMAIL_PASS)
        return {"status": "ok", "detail": "SMTP login succeeded"}
    except Exception as e:
        return {"status": "error", "detail": str(e)}

# ------------------ AI CHAT ROUTE ------------------
@app.post("/chat")
def chat(data: Question):
    q = data.question.lower()

    # Offline first
    for key in OFFLINE_ANSWERS:
        if key in q:
            return {"answer": OFFLINE_ANSWERS[key]}

    # Fallback to OpenAI
    response = openai.ChatCompletion.create(
        model="gpt-4.0-",
        messages=[
            {"role": "system", "content": "You are an assistant answering questions about Esther's portfolio."},
            {"role": "user", "content": data.question},
        ],
    )

    return {"answer": response.choices[0].message.content}

# ------------------ ROOT ------------------
@app.get("/")
def root():
    return {"message": "Portfolio backend is running"}

 
# ------------------ USER PROFILE ROUTE ------------------
@app.get("/user/1")
def get_user():
    # Example user data returned by the backend
    return {"id": 1, "name": "Esther", "role": "AI & Software Developer"}


