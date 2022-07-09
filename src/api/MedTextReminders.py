import os
# import random, schedule, time

from twilio.rest import Client
# # from twilio_credentials import cellphone, twilio_account, twilio_token, twilio_number

import schedule
import time
import random
from dotenv import load_dotenv
load_dotenv()

# def send_message():

#     account_sid = "AC8b23dea2a92c7b85b3e6aacf1c27de02"
#     auth_token = os.environ['TWILIO_AUTH_TOKEN']
#     client = Client(account_sid, auth_token)
    

#     client.messages.create(to="+19546508821",
#                            from_="+19705125409",
#                            body="time to take your medication"
#                            )
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

def message_scheduler(time, message, phone):
    def send_message(msg):

        account_sid = os.environ['TWILIO_ACCOUNT_SID']
        auth_token = os.environ['TWILIO_AUTH_TOKEN']
        client = Client(account_sid, auth_token)
        

        client.messages.create(to=phone,
                            from_="+19705125409",
                            body=msg
                            )
    schedule.every().day.at(time).do(send_message(message))



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
    schedule.run_pending()
    time.sleep(1)

