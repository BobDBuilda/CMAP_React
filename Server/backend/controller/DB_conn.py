from psycopg_pool import ConnectionPool
import os


def init_db_pool(db_url):
    try:
        #db_url = os.getenv("postgresql://postgres:password@localhost:8000/test_db")
        return ConnectionPool(conninfo=db_url)
    except Exception as e:
        print(f"Failed to connect to PostgreSQL: {str(e)}")
        return None

