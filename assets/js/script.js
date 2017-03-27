$(document).ready(function() {

arrayCards = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52]

arrayPlayed = [];

var card;

//Click button to display card
$( "#button" ).click(function() {
cardNumberGenerator()
removingPlayedCard()
document.getElementById('cardDisplay').textContent=card
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

 })
