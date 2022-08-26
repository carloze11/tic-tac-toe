const gameBoard = (() => {
  //*****************************************************************************
  // Creating variables for each div to check for winner later
  // There is most likely a better way to do this but can't think of anything atm
  const block1 = document.querySelector('#block1');
  const block2 = document.querySelector('#block2');
  const block3 = document.querySelector('#block3');
  const block4 = document.querySelector('#block4');
  const block5 = document.querySelector('#block5');
  const block6 = document.querySelector('#block6');
  const block7 = document.querySelector('#block7');
  const block8 = document.querySelector('#block8');
  const block9 = document.querySelector('#block9');
  //****************************************************************************
  
  const markersArray = [{}];
  
  //when clicked, grab the parent div (done)
  //check if it's been used
  //if not, use iteration to input last on list?
  const chooseSquare = () => {
    const blocks = document.querySelectorAll('.blocks')
    blocks.forEach(block => {
      block.addEventListener('click', () => {
        let blockId = block.id
        let chosenBlock = document.getElementById(blockId);
        let lastPlayer = markersArray[markersArray.length-1].name;
        //Conditionals for days..
        if (chosenBlock.textContent !== ""){
          return alert('Choose an empty block, ya filthy animal!');
        };        
        if (lastPlayer === undefined || lastPlayer === 'player2') {
          gameBoard.addMarker(player1);
        } else if (lastPlayer === 'player1'){
          gameBoard.addMarker(player2);
        };
        // Update last players' reference
        lastPlayer = markersArray[markersArray.length-1].name;
        
        //Mark up the board
        if ((lastPlayer === 'player1' || lastPlayer === undefined) && chosenBlock.textContent === ""){
          chosenBlock.textContent = "X";
          chosenBlock.style.color = "darkred";
        } else if (lastPlayer === 'player2' && chosenBlock.textContent === "") {
          chosenBlock.textContent = "O";
          chosenBlock.style.color = "darkblue";
        };   
        
        //Check for winner
        //*****************************************************************************
        //This is might be an abomination of code
        //I am going to check for winner using if statements
        //I understand this would've been easier had i used a table system...
        if (block1.textContent !== "" && block1.textContent === block2.textContent && block1.textContent === block3.textContent){
          console.log(`${block1.textContent} Wins!`);
        } else if (block1.textContent !== "" && block1.textContent === block4.textContent && block1.textContent === block7.textContent){
          console.log(`${block1.textContent} Wins!`);
        } else if (block1.textContent !== "" && block1.textContent === block5.textContent && block1.textContent === block9.textContent){
          console.log(`${block1.textContent} Wins!`);
        } else if (block2.textContent !== "" && block2.textContent === block5.textContent && block2.textContent === block8.textContent){
          console.log(`${block2.textContent} Wins!`);
        } else if (block3.textContent !== "" && block3.textContent === block6.textContent && block3.textContent === block9.textContent){
          console.log(`${block3.textContent} Wins!`);
        } else if (block3.textContent !== "" && block3.textContent === block5.textContent && block3.textContent === block7.textContent){
          console.log(`${block3.textContent} Wins!`);
        } else if (markersArray.length >= 10) {
          console.log('Tie!')
        }
        //*****************************************************************************
      })
    })
    ///
  };
  

  
  // Public
  const addMarker = (mark) => markersArray.push(mark);
  const playGame = () => chooseSquare();
  return {markersArray, addMarker, playGame};
})();


// Create player factory function
const Player = (name, mark) => {
  const getName = () => name;
  const getMark = () => mark;
  return {name, mark}
};

const player1 = Player('player1', 'X');
const player2 = Player('player2', 'O');

gameBoard.playGame();
