from flask_sqlalchemy import SQLAlchemy
from sqlalchemy.orm import relationship, backref

db = SQLAlchemy()

# associations = db.Table(
#     "associations",
#     db.Column("user_id", db.Integer, db.ForeignKey("user.id"), primary_key=True),
#     db.Column("issues_id", db.Integer, db.ForeignKey("issues.id"), primary_key=True),
# )

class Med_info(db.Model):
    __tablename__ = "med_info"
    id = db.Column(db.Integer, primary_key=True)
    date = db.Column(db.String(50), unique=True)
    dosage = db.Column(db.String(50), unique=True)

    def __repr__(self):
        return self.dosage
    def serialize(self):
        return {
            "date" : self.date,
            "dosage" : self.dosage,
        }
class Medications(db.Model):
    __tablename__ = "medications"
    id = db.Column(db.Integer, primary_key=True)
    med_name = db.Column(db.String(50), unique=False, nullable=False)
#     user = db.relationship("User", back_populates="Medications")
#     user_id = db.column("user", db.ForeignKey('user.id'))


    def __repr__(self):
        return self.med_name
    def serialize(self):
        return {
            "med_name": self.med_name,
        }
    
class User(db.Model):
    __tablename__ = "user"
    id = db.Column(db.Integer, primary_key=True)    
    name = db.Column(db.String(120), unique=False, nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(80), unique=False, nullable=False)
    issue1 = db.Column(db.String(120), unique=False, nullable=False)
    issue2 = db.Column(db.String(120), unique=False, nullable=True)
    issue3 = db.Column(db.String(120), unique=False, nullable=True)
    answers = db.relationship("Answer", back_populates="user") 
    # meds = db.relationship("Medications", back_populates='user')

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
    __tablename__ = "issues"
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
    __tablename__= "answer"
    id = db.Column(db.Integer, primary_key=True)
    issue = db.Column(db.String(120), unique=False, nullable=False)
    value = db.Column(db.Integer, unique=False, nullable=True)
    date = db.Column(db.Date, unique=False, nullable=False)
    user_id = db.Column(db.Integer, db.ForeignKey("user.id"))
    user = db.relationship("User", back_populates="answers")


    def __repr__(self):
        if self.value is None: 
            return "issue without value"
        return str(self.value)
           
    def serialize(self):
        return {
            "id": self.id,
            "value": self.value,       
            "date": self.date,
            "issue": self.issue,                
        }

class Notification(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    phone = db.Column(db.String(120))
    message = db.Column(db.String(255))

    def __repr__(self):
        return self.name
           
    def serialize(self):
        return {
            "phone": self.phone,
            "message": self.message
        }