import redis
import os
import keydb
from redis.exceptions import ConnectionError, TimeoutError

def init_cache():
    try:
        client = keydb.KeyDB(
            host=os.getenv('KEYDB_HOST'),
            port= os.getenv('KEYDB_PORT'),#6000, #6379, 
            password=None, 
            socket_timeout=5,
            decode_responses=True
        )

        response = client.ping()
        if response:
            print("Connected to KeyDB successfully at {host}:{port}".format(host=host, port=port))
            return client
        else:
            print("Failed to connect to KeyDB at {host}:{port}".format(host=host, port=port))
            return None
    except Exception as e:
        print("KeyDB connection error: {error}".format(error=str(e)))
        return None
    except (ConnectionError, TimeoutError) as conn_err:
        print("KeyDB connection/timeout error: {error}".format(error=str(conn_err)))
        return None

def get_room_by_name(room_name, cache):
    try:
        cached_data = cache.get(f"{room_name}")
        if cached_data:
            return cached_data
        else:
            return None
    except Exception as e:
        print("Cache retrieval error: {error}".format(error=str(e)))
        return None

def set_room_cache(room_name, data, cache, expiration=3600):
    try:
        cache.setex(f"{room_name}", expiration, data)
    except Exception as e:
        print("Cache set error: {error}".format(error=str(e)))