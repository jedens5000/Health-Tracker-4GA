import os
from twilio.rest import Client
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

# def message_scheduler(time, message, phone):
#     return "success"
#     def send_message(self):

#         account_sid = os.environ['TWILIO_ACCOUNT_SID']
#         auth_token = os.environ['TWILIO_AUTH_TOKEN']
#         client = Client(account_sid, auth_token)
        

#         client.messages.create(to="+19546508821",
#                             from_="+19705125409",
#                             body=self.message
#                             )
#     schedule.every().day.at(time).do(send_message)

#     message_scheduler("19:38", "this is a test", "+19546508821")

#     while True:
#         schedule.run_pending()
#         time.sleep(1)

# schedule.every(60).minutes.do(send_message)

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


def message_scheduler():

    account_sid = os.environ['TWILIO_ACCOUNT_SID']
    auth_token = os.environ['TWILIO_AUTH_TOKEN']
    client = Client(account_sid, auth_token)

# schedule message to be sent 61 minutes after current time
    # send_when = datetime.utcnow() + timedelta(minutes=61)

    # send the SMS
    messaging_service_sid = os.environ['TWILIO_MESSAGING_SERVICE_SID']
    message = client.messages.create(
#
        #  from_=messaging_service_sid,
        # to='+19546508821',  # ← your phone number here
        # body='Friendly reminder that you have an appointment with us next week.',
        # schedule_type='fixed',
        # send_at=send_when.isoformat() + 'Z',
    )

    # print(message.sid)
# def text():

#     account_sid = os.environ['TWILIO_ACCOUNT_SID']
#     auth_token = os.environ['TWILIO_AUTH_TOKEN']
#     client = Client(account_sid, auth_token)

    message = client.messages \
    .create(
    messaging_service_sid = os.environ['TWILIO_MESSAGING_SERVICE_SID'],
    body='This is a scheduled message',
    send_at=datetime(2022, 7, 13, 11, 40, 27),
    schedule_type='fixed',
    # status_callback='https://webhook.site/xxxxx',
    to='+19546508821'
    )

    print(message.sid)


# from pushbullet import Pushbullet

# def notice():
#     print("Reminder to take your medication")

# API_KEY = ""
# text = "Reminder to take your medication"


# pb = Pushbullet(API_KEY)
# push = pb.push_note('Please remember', text)