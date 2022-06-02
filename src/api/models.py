from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()


class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)    
    name = db.Column(db.String(120), unique=False, nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(80), unique=False, nullable=False)
    condition1 = db.Column(db.String(120), unique=False, nullable=False)
    issues = db.relationship('Issues', backref='user', lazy=True)

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
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), unique=True, nullable=False)
    question = db.Column(db.String(120), unique=False, nullable=False) 
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'), nullable= False)

    def __repr__(self):
        return self.name
           
    def serialize(self):
        return {
            "id": self.id,
            "name": self.name,       
            "question": self.question,       
        }
