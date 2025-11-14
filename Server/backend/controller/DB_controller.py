import os
from dotenv import load_dotenv
from pathlib import Path
#import psycopg
from psycopg_pool import ConnectionPool

# Construct a path to the .env file located in the 'backend' directory
# This makes the path resolution independent of the script's execution directory
env_path = Path(__file__).resolve().parent.parent / '.env'
load_dotenv(dotenv_path=env_path)

print(os.getenv("POSTGRES_DB"))

POSTGRES_USER = os.getenv("POSTGRES_USER")
POSTGRES_PASSWORD = os.getenv("POSTGRES_PASSWORD")
POSTGRES_HOST = os.getenv("POSTGRES_HOST")
POSTGRES_PORT = os.getenv("POSTGRES_PORT")
POSTGRES_DB = os.getenv("POSTGRES_DB")
# env_vars = {
#     "POSTGRES_USER": POSTGRES_USER,
#     "POSTGRES_PASSWORD": POSTGRES_PASSWORD,
#     "POSTGRES_HOST": POSTGRES_HOST,
#     "POSTGRES_PORT": POSTGRES_PORT,
#     "POSTGRES_DB": POSTGRES_DB,
# }

# for name, value in env_vars.items():
#     print(f"{name} = {value!r}")

# if not (POSTGRES_USER and POSTGRES_PASSWORD and POSTGRES_DB):
#     raise RuntimeError("Missing required Postgres environment variables. Check your .env file.")

def init_db_pool():
    conn_str = (
        f"dbname={POSTGRES_DB} user={POSTGRES_USER} password={POSTGRES_PASSWORD} host={POSTGRES_HOST} port={POSTGRES_PORT}"
    )
    try:
        #i think this is what is raising hte error
        db_pool = ConnectionPool(conninfo=conn_str)
        if db_pool:
            print("DB pool initialized")
            print(db_pool)

        return db_pool
        # print("DB Pool initialized")
        # pass
    except Exception as e:
        print(f"Failed to connect to PostgreSQL: {str(e)}")
        return None

def find_room_by_name(room_name, db_pool):
    try:
        with db_pool.connection() as conn:
            cur = conn.cursor()
            #cur.execute("SELECT name, lat, lng FROM rooms WHERE name = %s", (room_name))
            cur.execute(f"SELECT name, lat, lng FROM rooms WHERE name = '{room_name}'")
            row = cur.fetchone()
            #row = list(row)
            #return row
            if row:
                return ({"name": row[0], "lat": row[1], "lng": row[2]})
            else:
                return None
    except Exception as e:
        print(f"Database query error: {str(e)}")
        return None

