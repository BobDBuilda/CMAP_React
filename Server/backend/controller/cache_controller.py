import redis
import os

def init_cache(host, port, password):
    try:
        return redis.Redis(
            host=host,
            port=port,
            password=password,
            decode_responses=True
        )
    except Exception as e:
        print(f"Failed to connect to Redis/keydb: {str(e)}")
        return None

