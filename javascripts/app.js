var roverOne = {
  direction: "N",
  x: 0,
  y: 0,
  travelLog: ["(0,0)"]
}

var roverTwo = {
  direction: "N",
  x: 9,
  y: 0,
  travelLog: ["(9,0)"]
}

var roverThree = {
  direction: "N",
  x: 9,
  y: 9,
  travelLog: ["(9,9)"]
}

var board = [
  ["Rover","O",null,null,null,null,null,null,null,"Rover"],
  [null,null,null,null,null,null,null,null,"O",null],
  [null,null,null,"O",null,null,null,null,null,null],
  ["O",null,null,null,null,null,null,null,null,"O"],
  [null,null,null,null,null,null,"O",null,null,null],
  [null,null,null,null,"O",null,null,null,null,null],
  [null,null,"O",null,null,null,null,null,null,null],
  [null,null,null,null,null,null,null,"O",null,null],
  [null,"O",null,null,null,"O",null,null,null,null],
  [null,null,null,"O",null,null,null,null,null,"Rover"]
];

function turnLeft(rover){
  console.log("turnLeft was called!");
  switch (rover.direction) {
    case "N":
      rover.direction = "W";
      break;
    case "W":
      rover.direction = "S";
      break;
    case "S":
      rover.direction = "E";
      break;
    case "E":
      rover.direction = "N";
      break;
  }
  console.log(rover.direction);
}

function turnRight(rover){
  console.log("turnRight was called!");
  switch (rover.direction) {
    case "N":
      rover.direction = "E";
      break;
    case "W":
      rover.direction = "N";
      break;
    case "S":
      rover.direction = "W";
      break;
    case "E":
      rover.direction = "S";
      break;
  }
  console.log(rover.direction);
}

function moveForward(rover){
  console.log("moveForward was called");
  var lastRoverX = rover.x;
  var lastRoverY = rover.y;
  switch (rover.direction) {
    case "N":
      if (rover.y - 1 < 0){
        console.log("Don't step out off bounds!!");
        break;
      }
      else if (board[rover.y-1][rover.x] != null){
        console.log("There is an obstacle in front!!");
        break;
      }
      rover.y -= 1;
      break;
    case "W":
      if (rover.x - 1 < 0){
        console.log("Don't step out off bounds!!");
        break;
      }
      else if (board[rover.y][rover.x-1] != null){
        console.log("There is an obstacle in front!!");
        break;
      }
      rover.x -= 1;
      break;
    case "S":
      if (rover.y + 1 > 9){
        console.log("Don't step out off bounds!!");
        break;
      }
      else if (board[rover.y+1][rover.x] != null){
        console.log("There is an obstacle in front!!");
        break;
      }
      rover.y += 1;
      break;
    case "E":
      if (rover.x + 1 > 9){
        console.log("Don't step out off bounds!!");
        break;
      }
      else if (board[rover.y][rover.x+1] != null){
        console.log("There is an obstacle in front!!");
        break;
      }
      rover.x += 1;
      break;
  }
  board[lastRoverY][lastRoverX] = null;
  board[rover.y][rover.x] = "Rover";
  console.log("(" + rover.x + "," + rover.y + ")");
}

function moveBackward(rover){
  console.log("moveBackward was called");
  var lastRoverX = rover.x;
  var lastRoverY = rover.y;
  switch (rover.direction) {
    case "N":
      if (rover.y + 1 > 9){
        console.log("Don't step out off bounds!!");
        break;
      }
      else if (board[rover.y+1][rover.x] != null){
        console.log("There is an obstacle in front!!");
        break;
      }
      rover.y += 1;
      break;
    case "W":
      if (rover.x + 1 > 9){
        console.log("Don't step out off bounds!!");
        break;
      }
      else if (board[rover.y][rover.x+1] != null){
        console.log("There is an obstacle in front!!");
        break;
      }
      rover.x += 1;
      break;
    case "S":
      if (rover.y - 1 < 0){
        console.log("Don't step out off bounds!!");
        break;
      }
      else if (board[rover.y-1][rover.x] != null){
        console.log("There is an obstacle in front!!");
        break;
      }
      rover.y -= 1;
      break;
    case "E":
      if (rover.x - 1 < 0){
        console.log("Don't step out off bounds!!");
        break;
      }
      else if (board[rover.y][rover.x-1] != null){
        console.log("There is an obstacle in front!!");
        break;
      }
      rover.x -= 1;
      break;
  }
  board[lastRoverY][lastRoverX] = null;
  board[rover.y][rover.x] = "Rover";
  console.log("(" + rover.x + "," + rover.y + ")");
}

function moveList(rover, movement){
  for (var i=0; i<movement.length; i++) {
    switch (movement[i]) {
      case "f":
        moveForward(rover);
        rover.travelLog.push("(" + rover.x + "," + rover.y + ")");
        break;
      case "r":
        turnRight(rover);
        break;
      case "l":
        turnLeft(rover);
        break;
      case "b":
        moveBackward(rover);
        rover.travelLog.push("(" + rover.x + "," + rover.y + ")");
        break;
      default:
        console.log(movement[i] + " is not a valid Rover command try 'f', 'r', 'l' or 'b'.")
    }
  }
  console.log(rover.travelLog);
}
