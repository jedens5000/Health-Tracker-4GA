import os
import schedule
import time
import random
from twilio.rest import Client
from twilio_credentials import cellphone, twilio_account, twilio_token, twilio_number

medication_reminders = [
    "Time to take your medication",
    "Did you take your medication yet?",
    "Don't forget to take your medication"
    ]



# cellphone = 123
# twilio_number = 234

def send_message(notification):
    account_sid = os.environ['AC8b23dea2a92c7b85b3e6aacf1c27de02']
    auth_token = os.environ['24eca2a8c0838523e74534e60dcfb9e2']
    client = Client(account_sid, auth_token)

    client.messages.create(
        to=cellphone, 
        from_=+19705125409, 
        body=notification)

notification = medication_reminders [random.randint(0, len(medication_reminders))]

print(message.sid)

schedule.every().day.at("10:30").do(send_message, medication_reminders [0])

schedule.every().day.at("20:30").do(send_message, medication_reminders [0])

while True:
    schedule.run_pending()
    time.sleep(2)

