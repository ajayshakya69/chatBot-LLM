from flask import Flask, request, session
from lib.db import db
from routes import init_routes
from dotenv import load_dotenv
import models
import os

app = Flask(__name__)

load_dotenv()

app.config["SQLALCHEMY_DATABASE_URI"] = os.getenv("DATABASE_URL")
app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False

app.secret_key = os.getenv("SESSION_SECRET")

db.init_app(app)


init_routes(app)


def create_tables():
    print("Creating tables")
    db.create_all()
    
    


@app.route("/")
def hello_world():
    session["name"] = "John"
    return "<p>Hello, World!</p>"

@app.route("/getname")
def get_name():
    if "name" in session:
        return f"<p>Logged in{session["name"]}</p>"

@app.get("/createTable")
def create_db_table():
    create_tables()
    print("Table created")
    return "<p>Table created</p>"


@app.post("/auth/login")
def login():
    data = request.get_json()
    print(data["name"])
    if "name" in session:
        return f"<p>Logged in{session["name"]}</p>"
    return "<p>Hello, World!</p>"

