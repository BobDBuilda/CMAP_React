from flask import Flask, render_template, request, jsonify
import pandas as pd
import geopandas as gpd
from shapely.geometry import Point
from rapidfuzz import fuzz
from flask_cors import CORS

server = Flask(__name__)
CORS(server, resources={r"/*": {"origins": "http://localhost:5173"}})



#This is my main entrypoint
#during the seacrh i want to try the cache first
#if there is no cache then i will try the postgres server
#in the instance the query is not found
#return a resource not found message as json

@server.route('/search', methods=['POST'])
def search():
    data = request.get_json()
    query = data.get('query', '').strip().lower()
    
    if not query:
        return jsonify({'error': 'empty query'}), 400
    
    best_match = None
    best_score = 0

    try:
        data = pd.read_csv()
        for index, row in data.iterrows():
            score = fuzz.ratio(query, row['Name'].lower())
            if score > best_score:
                best_score = score
                best_match = row

        if best_score < 20:
            return jsonify({'error': 'no good match found'})
        
        return jsonify({
            'name': best_match['Name'],
            'lat': best_match['Latitude'],
            'lon': best_match['Longitude'],
            'score': best_score
        })
    except FileNotFoundError:
        print(f"Error: file {data} not found")
        return None
    except Exception as e:
        print(f"An error occurred: {str(e)}")
        return None
    
@server.route('/check_ser_location', methods=['POST'])
def check_user_location():
    gdf = gpd.read_file()
    campus_polygon = gdf.geometry.unary_union

    data = request.get_json()
    lat = data.get('lat')
    lon = data.get('lon')

    point = Point(float(lon), float(lat))

    on_campus = campus_polygon.contains(point)
    return jsonify({"onCampus": on_campus})


if __name__ == "__main__":
    server.run(debug=True)

