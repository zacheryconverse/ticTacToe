// var table = [
//   [0, 0, 0],
//   [0, 0, 0],
//   [0, 0, 0],
// ]; //0 means nothing, 1 means x, 2 means o
// var status = "X"; //true means x turn, false means o turn
// var stillPlaying = true;
// var game = document.getElementById("game");
// game.addEventListener("click", function (event) {
//   if (event.toElement.id !== "game" && stillPlaying) {
//     var choice = parseInt(event.toElement.id);
//     if (table[Math.floor(choice / 3)][choice % 3] === 0) {
//       //check if element is used

//       table[Math.floor(choice / 3)][choice % 3] = status;

//       document
//         .getElementById(choice)
//         .appendChild(document.createTextNode(status));

//       if (checkGame(status)) {
//         document
//           .getElementById("message")
//           .appendChild(
//             document.createTextNode("The winner is: " + status + "!!!")
//           );
//         //call winner
//         stillPlaying = false;
//       } else {
//         //console.log('keep playing');
//         if (status === "X") {
//           status = "O";
//         } else {
//           status = "X";
//         }
//       }
//     } else {
//     }
//   }
// });
// var reset = document.getElementById("reset");
// reset.addEventListener("click", function () {
//   table = [
//     [0, 0, 0],
//     [0, 0, 0],
//     [0, 0, 0],
//   ];
//   for (var i = 0; i < 9; i++) {
//     document.getElementById(i + "").innerHTML = "";
//   }
//   document.getElementById("message").innerHTML = "";
//   stillPlaying = true;
//   status = "X";
// });

// var checkGame = function (stat) {
//   var check = stat;

//   for (var i = 0; i < 3; i++) {
//     if (
//       table[0][i] === check &&
//       table[1][i] === check &&
//       table[2][i] === check
//     ) {
//       return true;
//     }
//     if (
//       table[i][0] === check &&
//       table[i][1] === check &&
//       table[i][2] === check
//     ) {
//       return true;
//     }
//   }
//   if (table[0][0] === check && table[1][1] === check && table[2][2] === check) {
//     return true;
//   }
//   if (table[0][2] === check && table[1][1] === check && table[2][0] === check) {
//     return true;
//   }
//   for (var i = 0; i < 9; i++) {
//     //checks if there is a draw.
//     if (table[Math.floor(i / 3)][i % 3] === 0) {
//       return false;
//     }
//   }
//   document.getElementById("message").innerHTML = "Its a tie. BORING!";
//   stillPlaying = false;
//   return false;
// };



class Game {
  constructor() {
    this.table = [
      [0, 0, 0],
      [0, 0, 0],
      [0, 0, 0],
    ]; //0 means nothing, 1 means x, 2 means o
    this.status = "X"; //true means x turn, false means o turn
    this.stillPlaying = true;
    this.handleResetClick();
    this.handleTableClick();
  }

  handleResetClick() {
    var reset = document.getElementById("reset");
    reset.addEventListener("click", this.reset.bind(this));
  }
  handleTableClick() {
    var gameClick = document.getElementById("game");
    gameClick.addEventListener("click", this.gameClick.bind(this));
  }
  checkGame(check) {
    for (var i = 0; i < 3; i++) {
      if (
        this.table[0][i] === check &&
        this.table[1][i] === check &&
        this.table[2][i] === check
      ) {
        return true;
      }
      if (
        this.table[i][0] === check &&
        this.table[i][1] === check &&
        this.table[i][2] === check
      ) {
        return true;
      }
    }
    if (
      this.table[0][0] === check &&
      this.table[1][1] === check &&
      this.table[2][2] === check
    ) {
      return true;
    }
    if (
      this.table[0][2] === check &&
      this.table[1][1] === check &&
      this.table[2][0] === check
    ) {
      return true;
    }
    for (var i = 0; i < 9; i++) {
      //checks if there is a draw.
      if (this.table[Math.floor(i / 3)][i % 3] === 0) {
        return false;
      }
    }
    document.getElementById("message").innerHTML = "Its a tie. BORING!"; //There is a tie
    this.stillPlaying = false;
    return false;
  }
  reset() {
    this.table = [
      [0, 0, 0],
      [0, 0, 0],
      [0, 0, 0],
    ];
    for (var i = 0; i < 9; i++) {
      document.getElementById(i + "").innerHTML = "";
    }
    document.getElementById("message").innerHTML = "";
    this.stillPlaying = true;
    this.status = "X";
  }
  gameClick() {
    console.log(this.stillPlaying);
    if (event.toElement.id !== "game" && this.stillPlaying) {
      var choice = parseInt(event.toElement.id);
      if (this.table[Math.floor(choice / 3)][choice % 3] === 0) {
        //check if element is used

        this.table[Math.floor(choice / 3)][choice % 3] = this.status;

        document
          .getElementById(choice)
          .appendChild(document.createTextNode(this.status));

        if (this.checkGame(this.status)) {
          document
            .getElementById("message")
            .appendChild(
              document.createTextNode("The winner is: " + this.status + "!!!")
            );
          //call winner
          this.stillPlaying = false;
        } else {
          //console.log('keep playing');
          if (this.status === "X") {
            this.status = "O";
          } else {
            this.status = "X";
          }
        }
      }
    }
  }
}
new Game();