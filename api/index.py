from flask import Flask, request, jsonify
from flask_cors import CORS
from models.User import User
from models.GameStats import GameStats

app = Flask(__name__)
CORS(app)


@app.route("/api/user/<username>", methods=["GET"])
def user(username):
    user = User(username=username).get_profile()
    return jsonify(user), 200


@app.route("/api/user/<username>/stats", methods=["GET"])
def stats(username):
    user = User(username=username).get_ratings()
    return jsonify(user), 200


@app.route("/api/user/<username>/games", methods=["GET"])
def games(username):
    user = User(username=username).get_profile()
    if "code" in user and user["code"] == 404:
        return user
    game_stats = GameStats(username=username)
    args = request.args
    variant = args.get("variant")
    color = args.get("color")
    status = args.get("status")

    if variant:
        variant_games = game_stats.get_variant_games(variant=variant)
    else:
        variant_games = game_stats.get_games()

    if color:
        color_games = game_stats.get_color_games(color=color)
    else:
        color_games = game_stats.get_games()

    if status:
        status_games = game_stats.get_status_games(status=status)
    else:
        status_games = game_stats.get_games()

    filtered_games = []

    for game in variant_games:
        if game in color_games and game in status_games:
            filtered_games.append(game)

    return jsonify(filtered_games), 200


if __name__ == "__main__":
    app.run(debug=True)
