$(document).ready(function() {

arrayCards = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52]

arrayPlayed = [];

var card;

//Click button to display card
$( "#button" ).click(function() {
cardNumberGenerator()
removingPlayedCard()
//displayRules(cardNumberGenerator())
document.getElementById('cardDisplay').textContent=card
document.getElementById('ruleDisplay').textContent=displayRules(card)
})

//function generates random number between 1 to 52
function cardNumberGenerator() {
  card = Math.floor(Math.random() * 52 + 1)
  console.log(card)
  return card
} cardNumberGenerator()

//function removes played card from arrayCards and places it in arrayPlayed
function removingPlayedCard() {
  var index = arrayCards.indexOf(card)
  console.log(index)
  if (index > -1) {
    arrayPlayed =  arrayCards.splice(index, 1)
  } console.log(arrayCards)
  console.log(arrayPlayed)
} removingPlayedCard()

//function allows game to restart
$( "#restartbutton" ).click(function() {
arrayCards = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52]
})

//function to display rules - check if more efficient to use if/else
function displayRules(val) {
  var answer = "";
  switch(val) {
      case(1):
      case(14):
      case(27):
      case(40):
      answer = "Ace:";
      break;
      case(2):
      case(15):
      case(28):
      case(41):
      answer = "Two";
      break;
      case(3):
      case(16):
      case(29):
      case(42):
      answer = "Three";
      break;
      case(4):
      case(17):
      case(30):
      case(43):
      answer = "Four";
      break;
      case(5):
      case(18):
      case(31):
      case(44):
      answer = "Five";
      break;
      case(6):
      case(19):
      case(32):
      case(45):
      answer = "Six";
      break;
      case(7):
      case(20):
      case(33):
      case(46):
      answer = "Seven";
      break;
      case(8):
      case(21):
      case(34):
      case(47):
      answer = "Eight";
      break;
      case(9):
      case(22):
      case(35):
      case(48):
      answer = "Nine";
      break;
      case(10):
      case(23):
      case(36):
      case(49):
      answer = "Ten";
      break;
      case(11):
      case(24):
      case(37):
      case(50):
      answer = "Jack";
      break;
      case(12):
      case(25):
      case(38):
      case(51):
      answer = "Queen";
      break;
      case(13):
      case(26):
      case(39):
      case(52):
      answer = "King";
  }
  return answer;
}
console.log(displayRules(card))


 })
