from flask import Flask, request, render_template
from flask_heroku import Heroku

app = Flask(__name__)
Heroku(app)

@app.route("/", methods=["GET"])
def render():
    return render_template("index.html")


@app.route("/upload", methods=["POST"])
def upload():
    client = Client(os.getenv("account_sid"), os.getenv("twilio_auth"))
    message = client.messages.create(
        to="+18016912737",
        from_=f"{os.getenv('number')}",
        media_url=["https://cjw-todo-site.herokuapp.com/static/logo192.png"],
        body=f"Task  was marked as completed today."
    )
    return f"worked, message sid: {message.sid}"

if __name__ == "__main__":
    app.run(debug=True)