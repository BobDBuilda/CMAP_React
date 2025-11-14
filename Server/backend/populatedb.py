import psycopg
import pandas as pd
from buildings import Buildings

df = pd.DataFrame.from_dict(Buildings, orient='index')
print(df)

for index, row in df.iterrows():
    name = index
    lat = row['lat']
    lon = row['lon']

    with psycopg.connect(
        host="db",
        port=5432,
        dbname="map_information",
        user="postgres",
        password="mypassword"
        ) as conn:
        with conn.cursor() as cur:
            cur.execute(
                "INSERT INTO rooms (name, lat, lng) VALUES (%s, %s, %s)",
                (name, lat, lon)
            )
            conn.commit()
