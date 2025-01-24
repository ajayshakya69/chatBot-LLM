from models.user import User
from  lib.db import db

def get_all_users():
    return [user.to_dict() for user in User.query.all()]


def get_user_data(email):
    print(email)
    return 



