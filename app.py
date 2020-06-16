from flask import Flask, request, render_template, redirect
from flask_cors import CORS
from flask_heroku import Heroku
from twilio.rest import Client
from dotenv import load_dotenv
import os


load_dotenv()
app = Flask(__name__)
CORS(app)
Heroku(app)
app.config["IMAGES_PATH"] = os.path.abspath(os.path.dirname(__file__))
app.config["SITE_URL_STATIC"] = "https://cjw-todo-site.herokuapp.com/static"

@app.route("/", methods=["GET"])
def render():
    return render_template("index.html")

@app.route("/content", methods=["GET"])
def content():
    return redirect("/")
@app.route("/upload", methods=["POST"])
def upload():
    try:
        file = request.files['file']
        
        file.save(f'{app.config["IMAGES_PATH"]}/static/{file.filename}')
        client = Client(os.getenv("account_sid"), os.getenv("twilio_auth"))
        message = client.messages.create(
            to="+18016912737",
            from_=f"{os.getenv('number')}",
            media_url=[f'{app.config["SITE_URL_STATIC"]}/{file.filename}']
            
        )
        return redirect("/")
    except:
        client = Client(os.getenv("account_sid"), os.getenv("twilio_auth"))
        message = client.messages.create(
            to="+18016912737",
            from_=f"{os.getenv('number')}",
            body="No Image was Uploaded with this task."
            
        )
        return redirect("/")
if __name__ == "__main__":
    app.run(debug=True)