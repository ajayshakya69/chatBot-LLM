from  lib.db import db
from werkzeug.security import generate_password_hash, check_password_hash

class User(db.Model):  
    __tablename__="users"
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(80), nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(200),unique=False,nullable=False)
    
    def to_dict(self):
        return {
            "id": self.id,
            "name": self.name,
            "email": self.email,
        }
        


    def check_password(self, plain_password):
        return check_password_hash(self.password, plain_password)
        

