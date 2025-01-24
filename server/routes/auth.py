from flask import Blueprint, request, jsonify
from services import get_all_users, create_user

auth = Blueprint("auth", __name__)



@auth.route("/login", methods=["GET"])
def add_user():
   return "login works fine"
