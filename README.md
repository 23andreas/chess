# Incomplete chess game
Made with [Create React App](https://github.com/facebook/create-react-app)


## Current features
### Board
  Draws board

### Pieces
  All pieces (black and white) with basic movement patterns

### Marks possible movements
  When a piece is selected, allowed moves are marked with green squares

## Unfinished features (required)
### Turns
  Does not keep track of player turns

### Piece movement 
  Does not detect obstacles in the way. All pieces are able to "jump" other pieces.

### Knocking out other pieces
  No rules for knocking out other pieces. Pieces with the same color can knock out each other.

### Check and checkmate
  Does not detect check. Should only allow moves resulting in player losing check condition if player is under check condition.
  Does not detect checkmate therefor unable to determine game result

### Promotion
  If pawn reaces row 8, that pawn can be [promoted](https://en.wikipedia.org/wiki/Promotion_(chess)) to any piece except king.

### Pawn knockout
  Pawns can only knock out pieces diagonally in front of them

### En passant
  [En-passant](https://www.chess.com/terms/en-passant)

### Castling
  [Castling](https://en.wikipedia.org/wiki/Castling)

### Other
  Starting out with this I only knew the basic rules of chess. I did'nt know there were so many different "special moves" and specific rules.
  There's probably more rules not mentioned above that should be implemented.
