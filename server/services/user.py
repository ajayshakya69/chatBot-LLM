from models.user import User
from db import db

def get_all_users():
    return [user.to_dict() for user in User.query.all()]

def create_user(data):
    user = User(username=data["username"], email=data["email"])
    db.session.add(user)
    db.session.commit()
    return user.to_dict()
