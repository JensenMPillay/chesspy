from abc import ABC, abstractmethod


class UserInterface(ABC):
    def __init__(self, username):
        self.username = username

    @abstractmethod
    def get_profile(self):
        pass

    @abstractmethod
    def get_ratings(self):
        pass
