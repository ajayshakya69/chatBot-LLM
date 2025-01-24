from flask import Blueprint, request, jsonify
from services import get_all_users, create_user

user = Blueprint("user", __name__)

@user.route("/", methods=["GET"])
def list_users():
    users = get_all_users()
    return jsonify(users)

@user.route("/", methods=["POST"])
def add_user():
    data = request.json
    new_user = create_user(data)
    return jsonify(new_user), 201
