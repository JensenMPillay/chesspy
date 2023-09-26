from chesscom.fetchapi import get_list_games_by_months, get_list_games_by_month
from config.config import (
    VARIANTS,
    COLORS,
    STATUS,
    GAME_STATUS,
    GAME_WIN_STATUS,
    GAME_DRAW_STATUS,
    GAME_LOSE_STATUS,
)

# FUNCTIONS


# GLOBAL
def get_games(username):
    total_games = []
    archives = get_list_games_by_months(username=username)
    if archives is not None:
        urls_by_month = archives["archives"]
        for url_by_month in urls_by_month:
            games_by_month = get_list_games_by_month(url_by_month=url_by_month)["games"]
            for game in games_by_month:
                gameData = {
                    "black": game["black"],
                    "time_class": game["time_class"],
                    "white": game["white"],
                }
                total_games.append(gameData)
    else:
        print("No Games found.")
    return total_games


# VARIANT
def get_games_by_variant(games, variant):
    games_variant = []
    if variant in VARIANTS:
        for game in games:
            if "time_class" in game and game["time_class"] == variant:
                games_variant.append(game)
    else:
        print(f"This variant {variant} does not exist.")
    return games_variant


# COLOR
def get_games_by_color(username, games, color):
    total_color_games = []
    if color in COLORS:
        for game in games:
            if (
                color in game
                and "username" in game[color]
                and game[color]["username"].lower() == username.lower()
            ):
                total_color_games.append(game)
    else:
        print(f"Color {color} does not exist in chess.")
    return total_color_games


# STATUS
def get_status_list(status):
    status_list = []
    if status in GAME_STATUS:
        status_list.append(status)
    elif status in STATUS:
        if status == "WINNER":
            status_list = GAME_WIN_STATUS
        elif status == "LOSER":
            status_list = GAME_LOSE_STATUS
        elif status == "DRAW":
            status_list = GAME_DRAW_STATUS
    else:
        print(f"This status {status} does not exist.")
    return status_list


def get_games_by_status(username, games, status):
    status_games = []
    status_list = get_status_list(status=status)
    if status_list:
        for game in games:
            for color in COLORS:
                if "result" in game[color] and (
                    game[color]["result"] in status_list
                    and game[color]["username"].lower() == username.lower()
                ):
                    status_games.append(game)
    else:
        print(f"No Games found with this status : {status}.")
    return status_games
