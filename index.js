//jshint esversion:6

let state = {
  breakLength: 5,
  sessionLength: 25,
  currLength: "25:00",
  currType: "session",
  isSessionInitialized: false,
  paused: false,
  timer: null
};

//updateState
function updateState(toBeUpdated) {
  //toBeUpdated parameters = break, session or time
  console.log("in update State");
  switch (toBeUpdated) {
    case "time":
      const timeLeft = document.getElementById("time-left");
      timeLeft.innerHTML = state.currLength;
      break;
   case "break":
      const breakLength = document.getElementById("break-length");
      breakLength.innerHTML = state.breakLength;
      break;
   case "session":
      const sessionLength = document.getElementById("session-length");
      sessionLength.innerText = state.sessionLength;
      break;
   default: console.log("enter: time, break or session");
   }
}

//break increment/decrement
const breakIncr = document.getElementById("break-increment");
const breakDecr = document.getElementById("break-decrement");

breakIncr.addEventListener("click", modifyBreak);
breakDecr.addEventListener("click", modifyBreak);

function modifyBreak(e) {
  //uses updateState helper
  console.log("modifying breaks");
  if (!state.isSessionInitialized) {
    if (e.target.id === "break-increment") {
      console.log("id === inc");
      (state.breakLength < 60) ? state.breakLength += 1 : state.breakLength = 60;
    }
    if (e.target.id === "break-decrement") {
      (state.breakLength > 0) ? state.breakLength -= 1 : state.breakLength = 0;
      console.log("break-decrement");
    }
    updateState("break");
  }
}

//session increment/decrement
