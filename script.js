class Node {
  constructor(x = null, y = null, parent = null) {
    this.x = x;
    this.y = y;
    this.parent = parent;
  }
}

const knightPossibleMoves = [
  [-2, -1],
  [-2, 1],
  [-1, -2],
  [-1, 2],
  [1, -2],
  [1, 2],
  [2, -1],
  [2, 1],
];

function knightMoves(startingPoint, endPoint) {
  let moves = board(startingPoint, endPoint);
  let temp = [];
  temp.push([moves.x, moves.y]);
  while (moves.parent !== null) {
    moves = moves.parent;
    temp.push([moves.x, moves.y]);
  }
  console.log(`You made it in ${temp.length - 1} moves! Here's your path:`);
  temp.reverse().forEach((element) => {
    console.log(element);
  });
}

function board(startingPoint, endPoint, queue = [], parent = null) {
  let startNode = new Node(...startingPoint, parent);
  let result;
  if (startNode.x === endPoint[0] && startNode.y === endPoint[1]) {
    result = startNode;
  } else {
    for (let i = 0; i < knightPossibleMoves.length; i++) {
      if (
        startNode.x + knightPossibleMoves[i][0] >= 0 &&
        startNode.x + knightPossibleMoves[i][0] < 8 &&
        startNode.y + knightPossibleMoves[i][1] >= 0 &&
        startNode.y + knightPossibleMoves[i][1] < 8
      ) {
        queue.push(
          new Node(
            startNode.x + knightPossibleMoves[i][0],
            startNode.y + knightPossibleMoves[i][1],
            startNode
          )
        );
      }
    }

    if (result === undefined) {
      let temporary = queue.shift();
      result = board(
        [temporary.x, temporary.y],
        endPoint,
        queue,
        temporary.parent
      );
    }
  }
  return result;
}

knightMoves([4, 4], [2, 2]);
