let symbol = "x";
let timerdisplay = document.createElement("p");
let ai = true;

let rows = [
  ["b", "b", "b"],
  ["b", "b", "b"],
  ["b", "b", "b"],
];

function checkWinner() {
  for (let i = 0; i < 3; i++) {
    if(rows[i][0].innerHTML === rows[i][1].innerHTML && rows[i][1].innerHTML === rows[i][2].innerHTML && rows[i][0].innerHTML != "b")
      return "winner: " + rows[i][0].innerHTML;

    if(rows[0][i].innerHTML === rows[1][i].innerHTML && rows[1][i].innerHTML === rows[2][i].innerHTML && rows[0][i].innerHTML != "b")
      return "winner: " + rows[0][i].innerHTML;
  }

  if(rows[0][0].innerHTML === rows[1][1].innerHTML && rows[1][1].innerHTML === rows[2][2].innerHTML && rows[0][0].innerHTML != "b")
    return "winner: " + rows[0][0].innerHTML;

  if(rows[2][0].innerHTML === rows[1][1].innerHTML && rows[1][1].innerHTML === rows[0][2].innerHTML && rows[2][0].innerHTML != "b")
    return "winner: " + rows[2][0].innerHTML;

  for (let row of rows)
    for(let column of row)
      if(column.innerHTML === "b")
        return "winner: none"

  return "winner: tie";
}

function reload() {
  location.reload();
}
function countDown() {
  let text = timerdisplay.innerHTML;
  let time = parseInt(text[text.length-1])-1;
  timerdisplay.innerHTML = "time to reset: " + time;

}

function update () {

  if(this.innerHTML === "b") {
    this.innerHTML = symbol;

    if(symbol === "x")
      symbol = "o";
    else
      symbol = "x";

    playerdisplay.innerHTML = "current player: " + symbol;
  }

  winnerdisplay.innerHTML = checkWinner();

  if (winnerdisplay.innerHTML != "winner: none") {
    setInterval(reload, 4000)
    setInterval(countDown, 1000);
    timerdisplay.innerHTML = "time to reset: " + 4;
    timerdisplay = document.body.appendChild(timerdisplay);
  }

  if(ai) {
  
  }
}

for (let row = 0; row < rows.length; row++) {
  for (let column = 0; column < rows[row].length; column++) {
    let obj = document.createElement("BUTTON");
    obj.innerHTML = "b";
    obj.onclick = update;
    rows[row][column] = document.body.appendChild(obj);
  }
  document.write("<br>");
}

let winnerdisplay = document.createElement("p");
winnerdisplay.innerHTML = "winner: none";
winnerdisplay = document.body.appendChild(winnerdisplay);
let playerdisplay = document.createElement("p");
playerdisplay.innerHTML = "current player: " + symbol;
playerdisplay = document.body.appendChild(playerdisplay);

console.log(rows);
