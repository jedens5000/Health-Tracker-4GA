from flask_sqlalchemy import SQLAlchemy
from sqlalchemy.orm import relationship, backref

db = SQLAlchemy()

# class Association(db.Model):
#     __tablename__ = 'associations'
#     id = db.Column(db.Integer, primary_key=True)
#     user_id = db.Column(db.Integer, db.ForeignKey("user.id"))
#     issues_id = db.Column(db.Integer, db.ForeignKey("issue.id"))
#     answers_id = db.Column(db.Integer, db.ForeignKey("answer.id"))

associations = db.Table(
    "associations",
    db.Column("user_id", db.Integer, db.ForeignKey("user.id"), primary_key=True),
    db.Column("issues_id", db.Integer, db.ForeignKey("issues.id"), primary_key=True),
)

class User(db.Model):
    # __tablename__ = "user"
    id = db.Column(db.Integer, primary_key=True)    
    name = db.Column(db.String(120), unique=False, nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(80), unique=False, nullable=False)
    condition1 = db.Column(db.String(120), unique=False, nullable=False)
    # issues = db.relationship('Issues', backref='user', lazy=True)
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
# Name & Question
class Issues(db.Model):
    # __tablename__ = 'issue'
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), unique=True, nullable=False)
    # user_id = db.Column(db.Integer, db.ForeignKey('user.id'), nullable= False)
    users = db.relationship(
        "User", secondary="associations", back_populates="issues"
    )

    def __repr__(self):
        return self.name
           
    def serialize(self):
        return {
            "id": self.id,
            "name": self.name,       
            "question": self.question,       
        }

class Answer(db.Model):
    # __tablename__ = 'answer'
    id = db.Column(db.Integer, primary_key=True)
    issue1 = db.Column(db.Integer, unique=False, nullable=False)
    issue2 = db.Column(db.Integer, unique=False, nullable=True)
    issue3 = db.Column(db.Integer, unique=False, nullable=True)
    date = db.Column(db.Date, unique=False, nullable=False)
    time = db.Column(db.String(15), unique=False, nullable=True)
    # users = relationship(
    #     "Issues", secondary="associations", back_populates="users"
    # )
    

    def __repr__(self):
        return self.value
           
    def serialize(self):
        return {
            "id": self.id,
            "value": self.value,       
            "date": self.date,       
            "time": self.time,       
        }