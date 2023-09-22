from abc import ABC, abstractmethod


class GameStatsInterface(ABC):
    def __init__(self, username):
        self.username = username

    @abstractmethod
    def get_games(self):
        pass

    @abstractmethod
    def get_variant_games(self, variant):
        pass

    @abstractmethod
    def get_color_games(self, color):
        pass

    @abstractmethod
    def get_status_games(self, status):
        pass
