# knights_travails
https://www.theodinproject.com/lessons/javascript-knights-travails

Assignment

Your task is to build a function knightMoves that shows the shortest possible way to get from one square to another by outputting all squares the knight will stop on along the way.

You can think of the board as having 2-dimensional coordinates. Your function would therefore look like:

knightMoves([0,0],[1,2]) == [[0,0],[1,2]]

knightMoves([0,0],[3,3]) == [[0,0],[1,2],[3,3]]

knightMoves([3,3],[0,0]) == [[3,3],[1,2],[0,0]]

1, Put together a script that creates a game board and a knight.

2, Treat all possible moves the knight could make as children in a tree. Don’t allow any moves to go off the board.

3, Decide which search algorithm is best to use for this case. Hint: one of them could be a potentially infinite series.

4, Use the chosen search algorithm to find the shortest path between the starting square (or node) and the ending square. Output what that full path looks like, e.g.:

![Képernyőfotó 2022-09-12 - 13 13 03](https://user-images.githubusercontent.com/97851758/189639725-ae79164f-1847-45ac-b599-1929a5ec3b20.png)
