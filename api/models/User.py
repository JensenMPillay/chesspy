from interfaces.UserInterface import UserInterface
from chesscom.fetchapi import get_user, get_stats


class User(UserInterface):
    def __init__(self, username):
        super().__init__(username)

    def get_profile(self):
        user = get_user(username=self.username)
        if user:
            return user
        else:
            print(f"User {self.username} was not found.")
            return {"code": 404, "message": f"User {self.username} was not found."}

    def get_ratings(self):
        data = get_stats(username=self.username)
        if data:
            return data
        else:
            print(f"Ratings from {self.username} was not found.")
            return {
                "code": 404,
                "message": f"Ratings from {self.username} was not found.",
            }
