from config.config import get_session_requests
from retrying import retry


# Définir la fonction pour gérer les erreurs spécifiques et les réessais
@retry(wait_fixed=2000, stop_max_attempt_number=5)
def fetch_data(url):
    requests = get_session_requests()
    response = requests.get(url)

    if response.status_code == 200:
        data = response.json()
        if "code" in data and data["code"] == 0:
            print(data["message"])
            return None
        return data
    elif response.status_code == 429:  # Erreur Too Many Requests
        raise Exception("Too many requests")
    else:
        print(f"HTTP Error from {url}: {response.status_code}")
        return None


# Fonctions modifiées pour utiliser la fonction de gestion des erreurs avec réessais
def get_user(username):
    url = f"https://api.chess.com/pub/player/{username}"
    data = fetch_data(url)
    return data


def get_stats(username):
    url = f"https://api.chess.com/pub/player/{username}/stats"
    data = fetch_data(url)
    return data


def get_list_games_by_months(username):
    user = get_user(username=username)
    if user is not None:
        url = f"https://api.chess.com/pub/player/{username}/games/archives"
        data = fetch_data(url)
        return data
    else:
        return None


def get_list_games_by_month(url_by_month):
    data = fetch_data(url_by_month)
    return data
