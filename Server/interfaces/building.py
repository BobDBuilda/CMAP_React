from typing import Protocol, Optional

class Building(Protocol):
    id: int
    name: str
    location: tuple[float, float]  # Latitude, Longitude
    floors: int

    def get_full_address(self) -> str:
        ...