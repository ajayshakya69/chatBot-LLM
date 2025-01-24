from models.user import User
from lib.db import db

def register_user(data):
    user = User(
         name=data["name"], 
         email=data["email"]
         )
    db.session.add(user)
    db.session.commit()
    return user.to_dict()