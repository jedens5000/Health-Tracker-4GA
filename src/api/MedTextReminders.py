import os
# from twilio.rest import Client
import sendgrid 
from sendgrid.helpers.mail import *
from datetime import datetime, timedelta
import schedule
import time
import random
# from dotenv import load_dotenv
# load_dotenv()


# Functions setup
# def sudo_placement():
#     print("Get ready for Sudo Placement at Geeksforgeeks")

# def good_luck():
#     print("Good Luck for Test")

# def work():
#     print("Study and work hard")

# def bedtime():
#     print("It is bed time go rest")

# def geeks():
#     print("Shaurya says Geeksforgeeks")

# Task scheduling
# After every 10mins geeks() is called.

def message_scheduler(phone):
    def send_message(self, phone_number):
        schedule.every(2).minutes.do(send_message)

        print("working")
    schedule.every(2).minutes.do(send_message)

    # message_scheduler("19:38", "this is a test", "+19546508821")

    while True:
        schedule.run_pending()
        time.sleep(1)

    # schedule.every(2).minutes.do(send_message)
        account_sid = os.environ['TWILIO_ACCOUNT_SID']
        auth_token = os.environ['TWILIO_AUTH_TOKEN']
        client = Client(account_sid, auth_token)
        

        client.messages.create(to=phone_number,
                            from_="+19705125409",
                            body="welcome to Mindset, we hope to help"
                            )
    send_message(phone)
# After every hour geeks() is called.
# schedule.every().hour.do(send_message)

# Every day at 12am or 00:00 time bedtime() is called.
# schedule.every().day.at("08:00").do(send_message)
# schedule.every().day.at("17:00").do(send_message)

# After every 5 to 10mins in between run work()
# schedule.every(5).to(10).minutes.do(work)

# Every monday good_luck() is called
# schedule.every().monday.do(good_luck)

# Every tuesday at 18:00 sudo_placement() is called

# schedule.every().tuesday.at("17:00").do(sudo_placement)

# Loop so that the scheduling task
# keeps on running all time.
# while True:

# Checks whether a scheduled task
# is pending to run or not

# Download the helper library from https://www.twilio.com/docs/python/install


# def message_scheduler():

#     account_sid = os.environ['TWILIO_ACCOUNT_SID']
#     auth_token = os.environ['TWILIO_AUTH_TOKEN']
#     client = Client(account_sid, auth_token)

# schedule message to be sent 61 minutes after current time
    # send_when = datetime.utcnow() + timedelta(minutes=61)

    # send the SMS
    # messaging_service_sid = os.environ['TWILIO_MESSAGING_SERVICE_SID']
    # message = client.messages.create(
#
        #  from_=messaging_service_sid,
        # to='+19546508821',  # ← your phone number here
        # body='Friendly reminder that you have an appointment with us next week.',
        # schedule_type='fixed',
        # send_at=send_when.isoformat() + 'Z',
    # )

    # print(message.sid)
# def text():

#     account_sid = os.environ['TWILIO_ACCOUNT_SID']
#     auth_token = os.environ['TWILIO_AUTH_TOKEN']
#     client = Client(account_sid, auth_token)

    # message = client.messages \
    # .create(
    # messaging_service_sid = os.environ['TWILIO_MESSAGING_SERVICE_SID'],
    # body='This is a scheduled message',
    # send_at=datetime(2022, 7, 13, 11, 40, 27),
    # schedule_type='fixed',
    # # status_callback='https://webhook.site/xxxxx',
    # to='+19546508821'
    # )

    # print(message.sid)


# from pushbullet import Pushbullet

# # def message_scheduler():

#     # api_key = os.environ['API_KEY']
# API_KEY = "o.ANMGPgx5p5WluBkO1YLmfVVVyOyHCAMk"
# text = "Reminder to take your medication"


# pb = Pushbullet(API_KEY)
# push = pb.push_note('Please remember', text)
# from mailjet_rest import Client

# def intro_message(email, name):
#     api_key = os.environ['API_KEY']
#     api_secret = os.environ['API_SECRET']
#     mailjet = Client(auth=(api_key, api_secret), version='v3.1')
#     data = {
#     'SandboxMode': True,
#     'Messages': [
#         {
#         "From": {
#             "Email": "mindsetmentalhealth1@gmail.com",
#             "Name": "Mindset"
#         },
#         "To": [
#             {
#             "Email": email,
#             "Name": name
#             }
#         ],
#         "Subject": "Welcome to Mindset.",
#         "TextPart": "Signup",
#         "HTMLPart": "<h3>Welcome to Mindset</h3><br />May the delivery force be with you!",
#         "CustomID": "AppGettingStartedTest"
#         }
#     ]
#     }
#     result = mailjet.send.create(data=data)
#     print (result.status_code)
#     print (result.json())

import schedule
import time

def job():

    print("I'm working...")
    sg = sendgrid.SendGridAPIClient(api_key="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")
    from_email = Email("mindsetmentalhealth1@gmail.com")
    to_email = To("mindsetmentalhealth1@gmail.com")
    subject = "Birthday Alert!"
    content = Content("text/plain", "It's someone's birthday! Log on to send a card")
    mail = Mail(from_email, to_email, subject, content)
    response = sg.client.mail.send.post(request_body=mail.get())
    print(response.status_code)
    print(response.body)
    print(response.headers)
    return ('success')  

schedule.every(10).seconds.do(job)
# schedule.every(10).minutes.do(job)
# schedule.every().hour.do(job)


while True:
    schedule.run_pending()
    time.sleep(1)