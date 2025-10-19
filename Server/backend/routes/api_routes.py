from flask import Blueprint, current_app, jsonify, request
from backend.controller.data_service import get_room_data

api_blueprint = Blueprint('api', __name__)

@api_blueprint.route("/search", methods=["POST"])
def search_room():
    try:
        data = request.get_json()
        room_name = data.get("room_name", "").strip()
        
        if not room_name:
            return jsonify({"error": "Room name is required"}), 400
        
        db_pool = current_app.config['DB_POOL']
        cache = current_app.config['CACHE']
        
        room_data = get_room_data(room_name, db_pool, cache)
        
        if room_data is None:
            return jsonify({"error": "Room not found"}), 404
        
        return jsonify(room_data)
    except Exception as e:
        print(f"An error occurred: {str(e)}")
        return jsonify({"error": "Internal server error"}), 500
    


    