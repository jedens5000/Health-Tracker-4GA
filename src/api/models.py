from flask_sqlalchemy import SQLAlchemy
from sqlalchemy.orm import relationship, backref

db = SQLAlchemy()

# associations = db.Table(
#     "associations",
#     db.Column("user_id", db.Integer, db.ForeignKey("user.id"), primary_key=True),
#     db.Column("issues_id", db.Integer, db.ForeignKey("issues.id"), primary_key=True),
# )

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)    
    name = db.Column(db.String(120), unique=False, nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(80), unique=False, nullable=False)
    issue1 = db.Column(db.String(120), unique=False, nullable=False)
    issue2 = db.Column(db.String(120), unique=False, nullable=True)
    issue3 = db.Column(db.String(120), unique=False, nullable=True)
    answers = db.relationship("Answer", back_populates="user")  

    def __repr__(self):
        return self.name           

    def serialize(self):
        return {
            "id": self.id,
            "name": self.name,
            "email": self.email,
            "issue1": self.issue1,
            "issue2": self.issue2,
            "issue3": self.issue3,
        }

class Issues(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), unique=True, nullable=False)

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
    user_id = db.Column(db.Integer, db.ForeignKey("user.id"))
    user = db.relationship("User", back_populates="answers")

    def __repr__(self):
        return self.value
           
    def serialize(self):
        return {
            "id": self.id,
            "value": self.value,       
            "date": self.date,       
        }

# class Parent(Base):
#     __tablename__ = "parent"
#     id = Column(Integer, primary_key=True)
#     children = relationship("Child", back_populates="parent")


# class Child(Base):
#     __tablename__ = "child"
#     id = Column(Integer, primary_key=True)
#     parent_id = Column(Integer, ForeignKey("parent.id"))
#     parent = relationship("Parent", back_populates="children")