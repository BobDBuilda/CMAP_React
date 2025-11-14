import pytest
from controller.DB_controller import init_db_pool

def test_db_connection():
    """Tests that a connection can be established with the database."""
    db_pool = init_db_pool()
    print(f"this is the db pool: {db_pool}")
    assert db_pool is not None, "Database connection pool failed to initialize."
    try:
        # with db_pool.connection() as conn:
        #     assert conn is not None, "Failed to get a connection from the pool."
        conn = db_pool.connection()
        #with db_pool.connection() as conn:
         #   pass
            #assert conn is not None, "Failed to get a connection from the pool."
    except Exception as e:
        pytest.fail(f"Failed to connect to the database: {e}")
