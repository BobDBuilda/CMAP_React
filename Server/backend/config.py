import os
from dotenv import load_dotenv

load_dotenv()

class Config:
    DEBUG = os.getenv('DEBUG', 'False').lower() == "true"
    ENV = os.getenv("FLASK_ENV", "production")

    DATABASE_URL = os.getenv("DATABASE_URL")

    KEYDB_HOST = os.getenv('KEYDB_HOST', 'localhost')
    KEYDB_PORT = int(os.getenv('KEYDB_PORT', 6000))
    KEYDB_PASSWORD = os.getenv('KEYDB_PASSWORD', '')

    APP_PORT = int(os.getenv('APP_PORT', 5000))