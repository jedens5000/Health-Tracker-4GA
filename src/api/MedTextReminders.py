import os
from datetime import datetime, timedelta
from twilio.rest import Client
# from twilio_credentials import cellphone, twilio_account, twilio_token, twilio_number


def send_message(notification):
    account_sid = os.environ['TWILIO_ACCOUNT_SID']
    auth_token = os.environ['TWILIO_AUTH_TOKEN']
    client = Client(account_sid, auth_token)

    print (account_sid)
    print(auth_token)

    # client = Client("AC8b23dea2a92c7b85b3e6aacf1c27de02", "697f3695df9e93e49f3332e3fd1014e6")

    # schedule message to be sent 61 minutes after current time
send_when = datetime.utcnow() + timedelta(minutes=61)

# send the SMS
messaging_service_sid = os.environ['TWILIO_MESSAGING_SERVICE_SID']
message = client.messages.create(
    from_=messaging_service_sid,
    to='+19546508821',  # ← your phone number here
    body='Friendly reminder that it is time to take your medication.',
    schedule_type='fixed',
    send_at=send_when.isoformat() + 'Z',
)

print(message.sid)

 


# for item in message:
#     send_message(item)
