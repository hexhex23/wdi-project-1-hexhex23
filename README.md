[How to write readme - Markdown CheatSheet](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet)  
[How to write a good readme for github repo!](https://gist.github.com/PurpleBooth/109311bb0361f32d87a2)

# Ring of Fire Online Game
Ring of Fire is a drinking game, usually played with a physical card deck. This online game follows the established rules and gameplay of the original game, albeit with a digital card deck.

## How to play
### Introduction
Ring of Fire is a drinking game, best played with three or more players. Each player takes a turn picking a card, in the case of this online game, it would be to click on the "Next Card" button.

### Set Up
To set up the physical game, prepare a cup for each player, already filled with the preferred drink. In the center of the players, prepare an empty pint glass, called "The Dirty Pint".

### Gameplay
Each number on the card represents a different rule, which the players must follow. The penalties for most cards are to drink a mouthful from the player's own cup. The game ends when the 4th King card is drawn. The player who draws this card
has to drink The Dirty Pint.

### Rules

* Ace: Drink until the person who picked this card stops.
* 2: Pick someone to drink.
* 3: You drink.
* 4: Drink up ladies.
* 5: Thumb Master: Place your thumb on the table at any time and last person to follow suit, drinks.
* 6: Drink up lads.
* 7: Seven Heaven: Last to point to the skies, drink.
* 8: Pick a buddy to drink with you.
* 9: Pick a word to rhyme, go round the table.
* 10: Pick a category, go round the table.
* Jack: Make up a rule everyone must follow for the rest of the game.
* Queen: Question Master: If you ask a question and a player answers, they have to drink.
* King: Add to the dirty pint. Whoever picks the 4th king, has to drink the pint.

## Live Version

Deployed on: [https://wdi-sg.github.io/wdi-project-1-hexhex23/index.html](https://wdi-sg.github.io/wdi-project-1-hexhex23/index.html)


## Built With
* jQuery
* JavaScript
* CSS
* HTML

## Development
### Outline
The main objectives of the application were:
1) Allow the corresponding rule to be displayed whenever a card is picked.
2) Cards have to be picked by random.
3) The application has to be mobile responsive.

### Attaching rule to random card

Each of the 52 cards in the playing deck were assigned a unique number (1 to 52). A click function was created as the event to trigger the generation of a random number within the 1 to 52 range. Subsequently, these random numbers were matched to their vector images so that the correct card would display according to the number generated.

### Mobile Responsive
Multiple html divs were created so as to facilitate a mobile responsive layout. Font, div and image sizes and dimensions were changed for under 1140px and 620px for a better user experience.

### Game Logic
* Each player picks a card for their turn by clicking on the "Next Card" button.
* The rule corresponding to the card picked will display on the screen.
* If the card picked is 5, aka the Thumb Master card, then a pop up will appear, prompting the player to enter their name. This name is saved on screen for easy reference.
* When the next 5 is picked and a new name is entered as Thumb Master, the Thumb Master field on screen will update to this new name.
* The two other rules which require user to input are Queen, aka the Question Master card, and Jack, which prompts the user to enter a new rule for the game.
* The game ends when the 4th King is picked. A pop up will alert players that the game is over. 

## Authors
Maria Wilson - hexhex23

## Acknowledgments
This application is built for programming practice purposes only.

[Sweet Alert](http://t4t5.github.io/sweetalert/)

[Google Fonts](https://fonts.googleapis.com/css?family=Oswald|Pacifico)

[Playing Card Vectors](https://code.google.com/archive/p/vector-playing-cards/)
