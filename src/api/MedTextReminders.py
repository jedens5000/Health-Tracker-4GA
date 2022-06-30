import os
# import random, schedule, time

from twilio.rest import Client
# # from twilio_credentials import cellphone, twilio_account, twilio_token, twilio_number

# GOOD_MORNING_QUOTES = [
#     "Good Morning Love! Hope You Have An Amazing Day <3",
#     "Good Morning Lovely! Hope you slept well <3",
#     "Hope you have a great day today, my love!",
#     "Love you so much, I know you will slay the day"
# ]

# GOOD_EVENING_QUOTES = [
#     "Good Evening Love",
#     "Sleep Tight My Love!",
#     "Goodnight sweetie, dream about the beauty of our relationship!",
#     "Love you! I hope you dream about me tonight <3"
# ]

# def send_message():

#     account = "AC8b23dea2a92c7b85b3e6aacf1c27de02"
#     token = "a33a13572484bcf7413c605247a2ad40"
#     client = Client(account, token)
    

#     client.messages.create(to="+19546508821",
#                            from_="+19705125409",
#                            body="time to take your meds"
#                            )

# def job():
#     print("this is working")
# # send a message in the morning
# # schedule.every().day.at("10:58").do(send_message)

# # send a message in the evening
# schedule.every(10).seconds.do(job)
# schedule.every(10).minutes.do(job)
# schedule.every().hour.do(job)
# schedule.every().day.at("10:30").do(job)
# schedule.every(5).to(10).minutes.do(job)
# schedule.every().monday.do(job)
# schedule.every().wednesday.at("13:15").do(job)
# schedule.every().minute.at(":17").do(job)
# print("sending")
# # testing
# # schedule.every().day.at("13:55").do(send_message)

# while True:
#     # Checks whether a scheduled task
#     # is pending to run or not
#     schedule.run_pending()
#     time.sleep(1)
#     print("not sending")

import schedule
import time
import random
from dotenv import load_dotenv
load_dotenv()

def send_message():

    account_sid = "AC8b23dea2a92c7b85b3e6aacf1c27de02"
    auth_token = os.environ['TWILIO_AUTH_TOKEN']
    client = Client(account_sid, auth_token)
    

    client.messages.create(to="+19546508821",
                           from_="+19705125409",
                           body="time to take your medication"
                           )
# Functions setup
def sudo_placement():
    print("Get ready for Sudo Placement at Geeksforgeeks")

def good_luck():
    print("Good Luck for Test")

def work():
    print("Study and work hard")

def bedtime():
    print("It is bed time go rest")

def geeks():
    print("Shaurya says Geeksforgeeks")

# Task scheduling
# After every 10mins geeks() is called.
schedule.every(60).minutes.do(send_message)

# After every hour geeks() is called.
schedule.every().hour.do(send_message)

# Every day at 12am or 00:00 time bedtime() is called.
schedule.every().day.at("08:00").do(send_message)
schedule.every().day.at("17:00").do(send_message)

# After every 5 to 10mins in between run work()
schedule.every(5).to(10).minutes.do(work)

# Every monday good_luck() is called
schedule.every().monday.do(good_luck)

# Every tuesday at 18:00 sudo_placement() is called
schedule.every().tuesday.at("17:00").do(sudo_placement)

# Loop so that the scheduling task
# keeps on running all time.
while True:

# Checks whether a scheduled task
# is pending to run or not
    schedule.run_pending()
    time.sleep(1)
