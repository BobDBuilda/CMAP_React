from typing import Protocol, Optional

class Building(Protocol):
    id: int
    name: str
    location: tuple[float, float]  # Latitude, Longitude
    floors: int


class Room(Protocol):
    id: int
    building_id: int
    floor: int
    room_number: str
    capacity: Optional[int]