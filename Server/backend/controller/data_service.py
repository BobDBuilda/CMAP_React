import json

def get_room_data(room_name, db_pool, cache):
    try:
        cached = cache.get(f"room:{room_name}")
        if cached:
            return json.loads(cached)
        
        #query DB instead
        with db_pool.connection() as conn:
            cur = conn.cursor()
            cur.execute("SELECT latitude, longitude FROM rooms WHERE name = %s", (room_name,))
            row = cur.fetchone()
            if not row:
                return None
            
            data = {"id": row[0], "name": row[1], "email": row[2]}
            cache.setex(f"room:{room_name}", json.dumps(data))
            return data
    except Exception as e:
        print(f"Cache retrieval error: {str(e)}")
    