from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()


class UserAcct(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(100), unique=True, nullable=False)
    pw = db.Column(db.String(100), unique=True, nullable=False)
    first_name = db.Column(db.String(100), unique=False, nullable=False)
    issues = db.relationship('Issues', backref='useracct', lazy=True)



    def __repr__(self):
        return self.first_name           

    def serialize(self):
        return {
            "id": self.id,
            "email": self.email,
            "first_name": self.first_name,            
        }

class Issues(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    issue1 = db.Column(db.String(100), unique=False, nullable=False)
    issue2 = db.Column(db.String(100), unique=False, nullable=True)
    issue3 = db.Column(db.String(100), unique=False, nullable=True)
    user_id = db.Column(db.Integer, db.ForeignKey('useracct.id'), nullable= False)


    def __repr__(self):
        return self.issue1
           
    def serialize(self):
        return {
            "id": self.id,
            "issue1": self.issue1,       
            "issue2": self.issue2,       
            "issue3": self.issue3,   
        }




# class User(db.Model):
#     id = db.Column(db.Integer, primary_key=True)
#     email = db.Column(db.String(120), unique=True, nullable=False)
#     password = db.Column(db.String(80), unique=False, nullable=False)
#     # is_active = db.Column(db.Boolean(), unique=False, nullable=False)

#     def __repr__(self):
#         return f'<User {self.email}>'

#     def serialize(self):
#         return {
#             "id": self.id,
#             "email": self.email,
#             # do not serialize the password, its a security breach
#         }