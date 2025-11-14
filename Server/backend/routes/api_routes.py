from flask import Blueprint, current_app, jsonify, request
from controller.DB_controller import find_room_by_name
from controller.cache_controller import get_room_by_name, set_room_cache
from flask_cors import CORS

api_blueprint = Blueprint('api', __name__)
CORS(api_blueprint, origins=["http://localhost:5173"])

@api_blueprint.route("/search", methods=["POST"])
def search_room():
    try:
        room_data = request.get_json()
        room_name = room_data.get("room_name").strip()
        # if not data:
        #     return jsonify({"error": "Invalid JSON payload"}), 400
        
        # room_name = data.get("room_name").strip()
        # print(f"THis is the room name: {room_name}")
        # if not room_name:
        #     return jsonify({"error": "Room name is required"}), 400
        
        # #try keydb cache
        # cached_room_data = get_room_by_name(room_name, current_app.config['CACHE'])
        # try: 
        #     if cached_room_data is None:
        #         #return jsonify({"error": "Room not found"}), 404
        #         print(f"room not found in cache")
        #         pass
        # except Exception as e:
        #     pass

        #try postgres
        db_pool = current_app.config['DB_POOL']
        database_room_data = find_room_by_name(room_name, db_pool)
        return ({"data": database_room_data})
        #return data
    except Exception as e:
        print(f"An error occurred: {str(e)}")
        return jsonify({"error": "Internal server error"}), 500
    
    #return jsonify({"room data" : f""})
@api_blueprint.route("/", methods=["GET"])
def index():
    return "<h1>API is working</h1>"

    