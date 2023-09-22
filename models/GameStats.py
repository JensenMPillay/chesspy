from interfaces.GameStatsInterface import GameStatsInterface
from utilities.stats import (
    get_games,
    get_games_by_variant,
    get_games_by_status,
    get_games_by_color,
)


class GameStats(GameStatsInterface):
    def __init__(self, username):
        super().__init__(username)

    def get_games(self):
        games = get_games(username=self.username)
        return games

    def get_variant_games(self, variant):
        variant_games = get_games_by_variant(
            games=get_games(username=self.username), variant=variant
        )
        return variant_games

    def get_color_games(self, color):
        color_games = get_games_by_color(
            username=self.username, games=get_games(username=self.username), color=color
        )
        return color_games

    def get_status_games(self, status):
        status_games = get_games_by_status(
            username=self.username,
            games=get_games(username=self.username),
            status=status,
        )
        return status_games
