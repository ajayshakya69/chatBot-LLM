from models.user import User
from lib.db import db
from werkzeug.security import generate_password_hash


     
def register_user(data):
    hashPassword =generate_password_hash(data["password"],method='pbkdf2:sha256',salt_length=10) 
    user = User(
         name=data["name"], 
         email=data["email"],
         password=hashPassword
         )
    
    db.session.add(user)
    db.session.commit()
    return user.to_dict()