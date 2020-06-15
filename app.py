from flask import Flask, request, render_template
from flask_heroku import Heroku

app = Flask(__name__)
Heroku(app)

@app.route("/", methods=["GET"])
def render():
    return render_template("index.html")

if __name__ == "__main__":
    app.run(debug=True)