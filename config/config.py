from flask import request
import requests

# CONFIG
# USER_AGENT = {
#     "User-Agent": "username: QueenOfSpachess, email: queenofspachess@protonmail.com"
# }

VARIANTS = ["rapid", "blitz", "bullet"]

COLORS = ["white", "black"]

STATUS = ["WINNER", "LOSER", "DRAW"]

GAME_STATUS = [
    "win",
    "checkmated",
    "agreed",
    "repetition",
    "timeout",
    "resigned",
    "stalemate",
    "lose",
    "insufficient",
    "50move",
    "abandoned",
    "timevsinsufficient",
]

GAME_WIN_STATUS = ["win"]

GAME_DRAW_STATUS = [
    "agreed",
    "repetition",
    "stalemate",
    "insufficient",
    "50move",
    "timevsinsufficient",
]

GAME_LOSE_STATUS = ["checkmated", "timeout", "resigned", "lose", "abandoned"]


# FUNCTIONS
def set_user_agent_requests(user_agent):
    session = requests.Session()
    session.headers.update(user_agent)
    return session


def get_session_requests():
    user_agent_param = request.headers.get("User-Agent")
    if user_agent_param is None:
        user_agent_param = (
            "username: QueenOfSpachess, email: queenofspachess@protonmail.com"
        )
    user_agent = {"User-Agent": user_agent_param}
    session_custom = set_user_agent_requests(user_agent)
    return session_custom
