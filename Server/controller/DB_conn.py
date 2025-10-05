import psycopg

#Connect to an existing database
with psycopg.connect("dbname=test user=postgres") as conn: 

    #open a cursor to perform database operations
    with conn.cursor() as cur:

        #execute a command: this creates a new table
        cur.execute("""
            CREATE TABLE test (
                id SERIAL PRIMARY KEY,
                num INTEGER,
                data text
            """)
        
        #pass data to fill a query placeholders and let psycopg perform
        #the correct conversion (no more SQL injections!)
        cur.execute(
            "INSERT INTO test (num, data) VALUES (%s, %s)",
            (100, "abc'def")
        )

        #query the databse and obtain data as python objects
        cur.execute("SELECT * FROM test")
        print(cur.fetchone())
        #will print (1, 100, "abc")

        #you can use `cur.executemany()` to perform an operation in batch
        cur.executemany(
            "INSERT INTO test (num) VALUES (%s)",
            [(33,), (44,), (55,)]
        )

        #you can use `cur.fetchmany()`, `cur.fetchall()` to return a list
        #of several records, or even iterate on the cursor
        cur.execute("SELECT id, num FROM test order by num")
        for record in cur:
            print(record)

        #make the changes to the database persistent
        conn.commit()

