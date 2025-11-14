from flask import Flask, render_template, request, jsonify
from flask_cors import CORS
from routes.api_routes import api_blueprint
from controller.DB_controller import init_db_pool
from controller.cache_controller import init_cache
import os

server = Flask(__name__)
CORS(server, supports_credentials= True, resources={r"/api/*": {"origins": "http://localhost:5173"}})
#CORS(server, resources={r"/*": {"origins": "*"}})

db_pool = init_db_pool()
cache = init_cache()

server.config['DB_POOL'] = db_pool
server.config['CACHE'] = cache

server.register_blueprint(api_blueprint, url_prefix='/api')
#CORS(api_blueprint, origins=["http://localhost:5173"])

#CORS(server, resources={r"/*": {"origins": "http://localhost:5173"}})

if __name__ == "__main__":
    server.run(host="0.0.0.0", port=5000, debug=True)
