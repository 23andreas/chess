# Incomplete chess game
Made with [Create React App](https://github.com/facebook/create-react-app)

When I first started making this I only knew the basic rules of chess. I did not know there were so many different "special moves" and specific rules.
There's probably more rules not mentioned below that should be implemented.

## Installing and running the game
    yarn install
    yarn start
   or  
    
    npm install
    npm start

## Current features

* Board
* All pieces (black and white) with basic movements
* Marks possible movements with green squares when selecting a piece


## Unfinished features (required)
* Turns
* Obstacles  
  When moving pieces, obstacles are not detected resulting in all pieces beeing able to "jump" other pieces

* Knockout  
  No rules for knocking out other pieces. Pieces with the same color can knock out each other.

* Check and checkmate - does not detect check or checkmate  
  Should only allow moves resulting in player losing check condition if player is under check condition.

* [Promotion](https://en.wikipedia.org/wiki/Promotion_(chess))  
  If pawn reaces row 8, that pawn can be promoted to any piece except king.

* Pawn knockout  
  Pawns can only knock out pieces diagonally in front of them

* [En-passant](https://www.chess.com/terms/en-passant)
* [Castling](https://en.wikipedia.org/wiki/Castling)
