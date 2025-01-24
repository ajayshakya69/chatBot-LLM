from flask import Blueprint, request, jsonify
from services import register_user,get_user_data

auth = Blueprint("auth", __name__)



@auth.route("/login", methods=["GET"])
def login_user():
   return "login works fine"

@auth.route("/register",methods=["POST"])
def register():
   try:
     data = request.get_json()
     print(data)
     check_user= get_user_data(data["email"])  
     if check_user:
         return jsonify({"message":"user already registerd"}), 400
      
     response = register_user(data)
     print(f"res is {response}")
     
     return jsonify({"message": "User created successfully", "user": response}), 201
   except Exception as e:
      return jsonify({"error": str(e)}), 500