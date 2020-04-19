from flask import Flask, jsonify, render_template
import requests
import pandas as pd
import os

app = Flask(__name__)

@app.route('/updatedata')
def update():
  temp_df = pd.read_csv('https://raw.githubusercontent.com/owid/covid-19-data/master/public/data/owid-covid-data.csv')
  temp_df.to_csv('data.csv', index=False)
  global df
  df = temp_df

if not os.path.exists('data.csv'):
  update()

df = pd.read_csv('data.csv')

@app.route('/', defaults={'path':''})
@app.route('/<path:path>')
def index(path):
  return render_template("index.html")

@app.route('/locations')
def locations():
  return pd.DataFrame(df.loc[:,'location'].unique()).to_json(orient='values')

@app.route('/data/<string:location>')
def country_data(location):
  return df.loc[df['location']==location].loc[:,['date','total_cases','new_cases']].to_json(orient = 'values')


if __name__== "__main__":
  app.run(debug=True)