const gameContainer = document.getElementById("game");

const COLORS = [
  "red",
  "blue",
  "green",
  "orange",
  "purple",
  "red",
  "blue",
  "green",
  "orange",
  "purple"
];

// here is a helper function to shuffle an array
// it returns the same array with values shuffled
// it is based on an algorithm called Fisher Yates if you want ot research more
function shuffle(array) {
  let counter = array.length;

  // While there are elements in the array
  while (counter > 0) {
    // Pick a random index
    let index = Math.floor(Math.random() * counter);

    // Decrease counter by 1
    counter--;

    // And swap the last element with it
    let temp = array[counter];
    array[counter] = array[index];
    array[index] = temp;
  }

  return array;
}

let shuffledColors = shuffle(COLORS);

// this function loops over the array of colors
// it creates a new div and gives it a class with the value of the color
// it also adds an event listener for a click for each card
function createDivsForColors(colorArray) {
  let i = 0;
  for (let color of colorArray) {
    // create a new div
    const newDiv = document.createElement("div");

    // give it a class attribute for the value we are looping over
    newDiv.classList.add(color);

    // call a function handleCardClick when a div is clicked on
    newDiv.addEventListener("click", handleCardClick);
    newDiv.setAttribute( `id`, `${i}`)
    i++;

    // append the div to the element with an id of game
    gameContainer.append(newDiv);
  }
}


let firstCard;
let secondCard;
let colorArray = [0];
let clikedcount = 0;

// TODO: Implement this function!
function handleCardClick(event) {
  // you can use event.target to see which element was clicked
  console.log("you just clicked", event.target.getAttribute('id'));  
  console.log("you just clicked", event.target);
  //console.log(event.target.getAttribute('class'))

    
    firstCard = event.target.getAttribute('class')
    colorArray.unshift(firstCard)

    clikedcount += 1
    console.log(clikedcount)


    event.target.style.backgroundColor = event.target.getAttribute('class')
    //event.target.setAttribute('id', 'clicked');
  if (clikedcount > 2 ) {
    alert('WOOOWW There! take it easy')
  } else if (colorArray[1] === event.target.getAttribute('class')){
    event.target.style.backgroundColor = event.target.getAttribute('class');
    console.log('match');
  }
  else
  {   
     setTimeout(() => {
      event.target.style.backgroundColor = ''
      clikedcount = 0;
    //  colorArray = [0]
    }, 1900);
    console.log('Dont Give Up')
  }

}

// when the DOM loads
createDivsForColors(shuffledColors);
