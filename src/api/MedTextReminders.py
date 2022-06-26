import os
from datetime import datetime
from twilio.rest import Client
# from twilio_credentials import cellphone, twilio_account, twilio_token, twilio_number

# medication_reminders = [
#     "Time to take your medication",
#     "Did you take your medication yet?",
#     "Don't forget to take your medication]





def send_message(notification):
    account_sid = os.environ['TWILIO_ACCOUNT_SID']
    auth_token = os.environ['TWILIO_AUTH_TOKEN']
    client = Client(account_sid, auth_token)

    print (account_sid)
    print(auth_token)

    # client = Client("AC8b23dea2a92c7b85b3e6aacf1c27de02", "697f3695df9e93e49f3332e3fd1014e6")

    message = client.messages \
    .create(
         messaging_service_sid='MGa0cedfa2c6b81978eed881985cd0e9ca',
         body='Time to take your medication',
         send_at=datetime(2022, 26, 6, 12, 11, 00),
         schedule_type='fixed',
         status_callback='https://webhook.site/xxxxx',
         to='+19546508821'
     )

print(message.sid)

    # message = client.messages \
    # .create(
    #     to=+19546508821, 
    #     from_=+19705125409, 
    #     body=notification)

    # notification = medication_reminders [random.randint(0, len(medication_reminders))]



for item in message:
    send_message(item)
