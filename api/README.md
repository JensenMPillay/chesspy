<p align="center">
  <a href="https://chess.com">
    <img src="https://images.chesscomfiles.com/uploads/v1/images_users/tiny_mce/SamCopeland/php2z9LbY.png" height="96">
    <h3 align="center">Chesspy API</h3>
  </a>
</p>

<p align="center">ChessPy is an API for Chess.com to retrieve data about chess players.</p>

<br/>

## Endpoints

### Global User Information

To get global information about a user.

**Endpoint**: `/chess/api/user/<username>`

**Parameters**:

- `username` (required): The player's username.

### Retrieving User Games

To get games played by a user with optional filtering options.

**Endpoint**: `/chess/api/user/<username>/games/?variant=variant&color=color&status=status`

**Parameters**:

- `username` (required): The player's username.

**Filtering Options** (all are optional):

- `variant`: The type of game, among ["rapid", "blitz", "bullet"].
- `color`: The player's color, among ["white", "black"].
- `status`: The game status, among [
  - "WINNER"
  - "LOSER"
  - "DRAW"
  - "win"
  - "checkmated"
  - "agreed"
  - "repetition"
  - "timeout"
  - "resigned"
  - "stalemate"
  - "lose"
  - "insufficient"
  - "50move"
  - "abandoned"
  - "timevsinsufficient"
    ].

These options allow you to customize the retrieval of games according to your needs.

---

Feel free to contribute to ChessPy or submit issues if you encounter any bugs or have suggestions for improvement. We hope this API will be useful for exploring the fascinating world of online chess!
