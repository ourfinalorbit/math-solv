from flask import Flask, render_template, jsonify 
import json
import include
from execute import *
import urllib

app = Flask(__name__)

@app.route('/')
def homepage():
    return render_template("index.html")

# 
@app.route('/input/<string:user_inputtext>', methods=['POST'])
def receive(user_inputtext):

    user_inputtext = json.loads(user_inputtext)
    print(user_inputtext)

    end = execute(user_inputtext["command"],user_inputtext["express"])
    
    return str(end)

app.run(debug=True, port=3000)