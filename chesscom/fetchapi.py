from config.config import get_session_requests


# FUNCTIONS
def get_user(username):
    url = f"https://api.chess.com/pub/player/{username}"
    requests = get_session_requests()
    response = requests.get(url)

    if response.status_code == 200:
        data = response.json()
        if "code" in data and data["code"] == 0:
            print(data["message"])
            return None
        return data
    else:
        print(f"HTTP Error from {url}: {response.status_code}")
        return None


def get_stats(username):
    url = f"https://api.chess.com/pub/player/{username}/stats"
    requests = get_session_requests()
    response = requests.get(url)

    if response.status_code == 200:
        data = response.json()
        if "code" in data and data["code"] == 0:
            print(data["message"])
            return None
        return data
    else:
        print(f"HTTP Error from {url}: {response.status_code}")
        return None


def get_list_games_by_months(username):
    user = get_user(username=username)
    if user is not None:
        url = f"https://api.chess.com/pub/player/{username}/games/archives"
        requests = get_session_requests()
        response = requests.get(url)

        if response.status_code == 200:
            data = response.json()
            return data
        else:
            print(f"HTTP Error from {url}: {response.status_code}")
            return None
    else:
        return None


def get_list_games_by_month(url_by_month):
    requests = get_session_requests()
    response = requests.get(url_by_month)
    if response.status_code == 200:
        data = response.json()
        return data
    else:
        return print(f"HTTP Error from {url_by_month}: {response.status_code}")
