from flask_sqlalchemy import SQLAlchemy
from sqlalchemy.orm import relationship, backref

db = SQLAlchemy()

associations = db.Table(
    "associations",
    db.Column("user_id", db.Integer, db.ForeignKey("user.id"), primary_key=True),
    db.Column("issues_id", db.Integer, db.ForeignKey("issues.id"), primary_key=True),
)

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)    
    name = db.Column(db.String(120), unique=False, nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(80), unique=False, nullable=False)
    condition1 = db.Column(db.String(120), unique=False, nullable=False)
    issues = db.relationship(
        "Issues", secondary="associations", back_populates="users"
    )

    def __repr__(self):
        return self.name           

    def serialize(self):
        return {
            "id": self.id,
            "name": self.name,
            "email": self.email,
            "condition1": self.condition1,
        }

class Issues(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), unique=True, nullable=False)
    users = db.relationship(
        "User", secondary="associations", back_populates="issues"
    )

    def __repr__(self):
        return self.name
           
    def serialize(self):
        return {
            "id": self.id,
            "name": self.name,       
        }

class Answer(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    issue = db.Column(db.String, unique=False, nullable=False)
    value = db.Column(db.Integer, unique=False, nullable=True)
    date = db.Column(db.Date, unique=False, nullable=False)
    time = db.Column(db.String(15), unique=False, nullable=True)
   

    def __repr__(self):
        return self.value
           
    def serialize(self):
        return {
            "id": self.id,
            "value": self.value,       
            "date": self.date,       
            "time": self.time,       
        }