from abc import ABC, abstractmethod

class DatabaseInterface(ABC):
    def __init__(self):
        self.connection = None
        self.cursor = None
        self.connected = False

    @abstractmethod
    def connect(self):
        """Establish a connection to the database."""
        pass

    @abstractmethod
    def disconnect(self):
        """Close the database connection."""
        pass

    @abstractmethod
    def execute_query(self, query: str, params=None):
        """Execute a query against the database."""
        pass

    @abstractmethod
    def fetch_one(self):
        """Fetch a single result from the last executed query."""
        pass

    @abstractmethod
    def fetch_all(self):
        """Fetch all results from the last executed query."""
        pass