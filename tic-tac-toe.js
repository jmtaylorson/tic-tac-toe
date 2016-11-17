// Write all your JavaScript code in this file!
// You can use the namespace variable that's defined here.
var namespace = "http://www.w3.org/2000/svg"
var rectcolor = "rebeccapurple"
var clicked1 = "no"
var clicked2 = "no"
var clicked3 = "no"
var clicked4 = "no"
var clicked5 = "no"
var clicked6 = "no"
var clicked7 = "no"
var clicked8 = "no"
var clicked9 = "no"


function topleft() {
  if (rectcolor=="rebeccapurple") {
    alert("player1 turn")
  }else {
    alert("player2 turn")
  }
  var canvas = document.getElementById("game-board")
var rect = document.getElementById("topleftrect")
if (clicked1=="no") {
  if(rectcolor=="midnightblue") {
    rect.setAttribute("fill", "rebeccapurple")
    rectcolor = "rebeccapurple"
  } else {
    rect.setAttribute("fill", "midnightblue")
    rectcolor = "midnightblue"
  }
clicked1 = "yes"
}



}

function topmiddle() {
  if (rectcolor=="rebeccapurple") {
    alert("player1 turn")
  }else {
    alert("player2 turn")
  }
  var canvas = document.getElementById("game-board")
var rect = document.getElementById("topmiddlerect")
if (clicked2=="no") {
  if(rectcolor=="midnightblue") {
    rect.setAttribute("fill", "rebeccapurple")
    rectcolor = "rebeccapurple"
  } else {
    rect.setAttribute("fill", "midnightblue")
    rectcolor = "midnightblue"
  }
clicked2 = "yes"
}


}

function topright() {
  if (rectcolor=="rebeccapurple") {
    alert("player1 turn")
  }else {
    alert("player2 turn")
  }
  var canvas = document.getElementById("game-board")
var rect = document.getElementById("toprightrect")
if (clicked3=="no") {
  if(rectcolor=="midnightblue") {
    rect.setAttribute("fill", "rebeccapurple")
    rectcolor = "rebeccapurple"
  } else {
    rect.setAttribute("fill", "midnightblue")
    rectcolor = "midnightblue"
  }
clicked3 = "yes"

}


}

function midleft() {
  if (rectcolor=="rebeccapurple") {
    alert("player1 turn")
  }else {
    alert("player2 turn")
  }
  var canvas = document.getElementById("game-board")
var rect = document.getElementById("middleleftrect")
if (clicked4=="no") {
  if(rectcolor=="midnightblue") {
    rect.setAttribute("fill", "rebeccapurple")
    rectcolor = "rebeccapurple"
  } else {
    rect.setAttribute("fill", "midnightblue")
    rectcolor = "midnightblue"
  }
clicked4 ="yes"
}


}

function mid() {
  if (rectcolor=="rebeccapurple") {
    alert("player1 turn")
  }else {
    alert("player2 turn")
  }
  var canvas = document.getElementById("game-board")
var rect = document.getElementById("midrect")
if (clicked5=="no") {
  if(rectcolor=="midnightblue") {
    rect.setAttribute("fill", "rebeccapurple")
    rectcolor = "rebeccapurple"
  } else {
    rect.setAttribute("fill", "midnightblue")
    rectcolor = "midnightblue"
  }
clicked5 = "yes"
}


}
function midright() {
  if (rectcolor=="rebeccapurple") {
    alert("player1 turn")
  }else {
    alert("player2 turn")
  }
  var canvas = document.getElementById("game-board")
var rect = document.getElementById("midrightrect")
if (clicked6=="no") {
  if(rectcolor=="midnightblue") {
    rect.setAttribute("fill", "rebeccapurple")
    rectcolor = "rebeccapurple"
  } else {
    rect.setAttribute("fill", "midnightblue")
    rectcolor = "midnightblue"
  }
clicked6 = "yes"
}

}
function botleft() {
  if (rectcolor=="rebeccapurple") {
    alert("player1 turn")
  }else {
    alert("player2 turn")
  }
  var canvas = document.getElementById("game-board")
var rect = document.getElementById("botleftrect")
if (clicked7=="no") {
  if(rectcolor=="midnightblue") {
    rect.setAttribute("fill", "rebeccapurple")
    rectcolor = "rebeccapurple"
  } else {
    rect.setAttribute("fill", "midnightblue")
    rectcolor = "midnightblue"
  }
clicked7 = "yes"
}


}

function botmiddle() {
  if (rectcolor=="rebeccapurple") {
    alert("player1 turn")
  }else {
    alert("player2 turn")
  }
  var canvas = document.getElementById("game-board")
var rect = document.getElementById("botmiddlerect")
if (clicked8=="no") {
  if(rectcolor=="midnightblue") {
    rect.setAttribute("fill", "rebeccapurple")
    rectcolor = "rebeccapurple"
  } else {
    rect.setAttribute("fill", "midnightblue")
    rectcolor = "midnightblue"
  }
clicked8 = "8"
}


}

function botright() {
  if (rectcolor=="rebeccapurple") {
    alert("player1 turn")
  }else {
    alert("player2 turn")
  }
  var canvas = document.getElementById("game-board")
var rect = document.getElementById("botrightrect")
if (clicked9=="no") {
  if(rectcolor=="midnightblue") {
    rect.setAttribute("fill", "rebeccapurple")
    rectcolor = "rebeccapurple"
  } else {
    rect.setAttribute("fill", "midnightblue")
    rectcolor = "midnightblue"
  }
clicked9 = "yes"
}


}
