from flask import Blueprint, request, jsonify
from services import register_user,get_user_data

auth = Blueprint("auth", __name__)



@auth.route("/login", methods=["POST"])
def login_user():
   data = request.get_json()
   print(data)
   if not data["email"] or not data["password"]:
      return jsonify({"message":"provide credentials"}),400
   
   check_user= get_user_data(data["email"])  
   
   # isPasswordCorrect = check_password_hash(check_user.password,data['password'])

   if not check_user or not check_user.check_password(data["password"]):
       return jsonify({"message":"invalid credentials"}),400

   return jsonify({"message":"login successfull","user": check_user.to_dict()}),200




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