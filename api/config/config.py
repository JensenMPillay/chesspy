import requests

# CONFIG
USER_AGENT = {
    "User-Agent": "username: QueenOfSpachess, email: queenofspachess@protonmail.com"
}

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
    session_custom = set_user_agent_requests(USER_AGENT)
    return session_custom
