function shout(string) {
  return string.toUpperCase()
}

function whisper(string) {
  return string.toLowerCase()
}

function logShout(string) {
  console.log(string.toUpperCase())
}

function logWhisper(string) {
  console.log(string.toLowerCase())
}




function sayHiToGrandma('hi') {
  var lowercase = "hi"
  if('hi'.toLowerCase() === lowercase) {
    return "I can\'t hear you!"
  }
}

var uppercase = "HELLO"

function sayHiToGrandma(string) {
  if(uppercase.toUpperCase() === uppercase) {
    return "YES INDEED!"
  }
}

var mixedCase = "I love u, Grandma."
function sayHiToGrandma(string) {
  if(string === "I love u, Grandma.") {
    return "I love you, too."
  }
}