from website_Adopt_A_Puppy import app
from flask import url_for, render_template

@app.route("/")
@app.route("/home")
def index():
    return render_template('home.html')

@app.route("/adopt-a-puppy")
def adopt_a_puppy():
    return render_template("Adopt-A-Puppy.html")

@app.route("/about")
def about():
    return render_template("About.html")