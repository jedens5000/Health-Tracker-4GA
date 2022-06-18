import os
import datetime
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User, Issues, Answer
from api.utils import generate_sitemap, APIException
from flask_jwt_extended import create_access_token
from flask_jwt_extended import get_jwt_identity
from flask_jwt_extended import jwt_required
from flask_jwt_extended import create_refresh_token

api = Blueprint('api', __name__)

@api.route("/FormSignup", methods=["POST"])
def create_user():
    name = request.json.get("name", None)
    email = request.json.get("email", None)
    password = request.json.get("password", None)
    password2 = request.json.get("password2", None)
    issue1 = request.json.get("issue1", None)
    issue2 = request.json.get("issue2", None)
    issue3 = request.json.get("issue3", None)
    if email == "test" or password == "test":
        return jsonify({"msg": "Invalid email or password doesn't match"}), 401
    user=User(name=name, email=email, password=password, issue1=issue1, issue2=issue2, issue3=issue3)
    db.session.add(user)
    db.session.commit()
    return jsonify({"msg": "success, user created"}), 200

#

@api.route("/user", methods=["GET"])
@jwt_required()
def get_user():
    user_id = get_jwt_identity()
    print(user_id)
    user = User.query.filter_by(id=user_id).first()
    return jsonify(user.serialize())


@api.route("/login", methods=["POST"])
def create_token():
    email = request.json.get("email", None)
    password = request.json.get("password", None)

    user = User.query.filter_by(email=email).first()
    if user is None:
        return jsonify({"Message": "Please contact your administrator"}), 401
    if password != user.password: 
        return jsonify({"message: password is incorrect"}), 401
      
    print('message succeeded')
    access_token = create_access_token(identity=user.id)
    #THIS WAS TO ADD A REFRESH TOKEN, BUT APPEARS TO BE UNNECESSARY
    # refresh_token = create_refresh_token(user.id)
    # return {
    #     'access_token': access_token,
    #     'refresh_token': refresh_token
    #     }, 200

    return jsonify(access_token=access_token), 200

@api.route("/issues/<int:user_id>", methods=["GET"])
def get_user_issues(user_id):
    user = User.query.filter_by(id = user_id).first()
    issues = [issue.serialize() for issue in user.issues]
    return jsonify(issues), 200

#TO STORE MEDICATIONS
# @api.route("/medications", methods=["POST"])
# def meds():
    

# TO STORE STATUS ANSWERS
@api.route("/answer", methods=["POST"])
def create_answer():
    request_data = request.get_json()
    for item in request_data:
        issue = item.issue
        value = item.value
        date = datetime.datetime.now()
        answer = Answer(issue=issue, value=value, date=date)
        db.session.add(answer)
        db.session.commit()
    return "Success, answers saved", 200

# TO RETRIEVE ANSWERS
@api.route("/answer/<int:user_id>", methods=["GET"])
def get_user_answers(user_id):
    answers = Answer.query.filter_by(user_id = user_id)
    answers_serialized = [item.serialize() for item in answers]
  
    return jsonify(answers_serialized), 200

