"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
import os
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User, Issues
from api.utils import generate_sitemap, APIException
from flask_jwt_extended import create_access_token
from flask_jwt_extended import get_jwt_identity
from flask_jwt_extended import jwt_required

api = Blueprint('api', __name__)

@api.route("/FormSignup", methods=["POST"])
def create_user():
    name = request.json.get("name", None)
    email = request.json.get("email", None)
    password = request.json.get("password", None)
    password2 = request.json.get("password2", None)
    condition1 = request.json.get("condition1", None)
    if email == "test" or password == "test":
        return jsonify({"msg": "Invalid email or password doesn't match"}), 401
    user=User(name=name, email=email, password=password, condition1=condition1)
    db.session.add(user)
    db.session.commit()
    return "Success, user created", 200


@api.route("/login", methods=["POST"])
def create_token():
    email = request.json.get("email", None)
    password = request.json.get("password", None)
    if email != "test" or password != "test":
        print('message failed')
        return jsonify({"msg": "Invalid email or password"}), 401
    print('message succeeded')
    access_token = create_access_token(identity=email)
    return jsonify(access_token=access_token), 200

@api.route("/issues/<int:user_id>", methods=["GET"])
def get_user_issues(user_id):
    user = User.query.filter_by(id = user_id).first()
    issues = [issue.serialize() for issue in user.issues]
    return jsonify(issues), 200

