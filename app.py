# import necessary libraries
from flask import Flask, render_template, redirect, jsonify
from flask_pymongo import PyMongo
import json
import pymongo
import pandas as pd
import os
import csv

# create instance of Flask app

app = Flask(__name__)





# Use flask_pymongo to set up mongo connection
conn = "mongodb://localhost:27017/tech_app"
client = pymongo.MongoClient(conn)
db = client.zipDB
#db.zipDB.drop()
all_data = "zipcode_sf_zri_2018.csv"
all_data_pd = pd.read_csv(all_data)
zipData = json.loads(all_data_pd.to_json(orient='records'))
db.zipColl.insert_many(zipData)



@app.route("/")
def home():
    return render_template("heatmap.html")
    
@app.route("/zipjson")
def samples():
    filterData = list(db.zipDB.find())
#     return jsonify([zip for zip in filterData])
    return filterData
                                
if __name__ == "__main__":
    app.run(debug = True)