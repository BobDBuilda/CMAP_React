from flask import Flask, render_template, request, jsonify
from flask_cors import CORS
from backend.config import Config
from backend.routes.api_routes import api_blueprint
from backend.controller.DB_conn import init_db_pool
from backend.controller.cache_controller import init_cache

server = Flask(__name__)
CORS(server, resources={r"/*": {"origins": "http://localhost:5173"}})

server.config.from_object(Config)

db_pool = init_db_pool(server.config['DATABASE_URL'])
cache = init_cache(
    host=server.config['KEYDB_HOST'],
    port=server.config['KEYDB_PORT'],
    password=server.config['KEYDB_PASSWORD']
)

server.config['DB_POOL'] = db_pool
server.config['CACHE'] = cache

server.register_blueprint(api_blueprint, url_prefix='/api')

if __name__ == "__main__":
    server.run(host="localhost", port=server.config['PORT'], debug=True)

