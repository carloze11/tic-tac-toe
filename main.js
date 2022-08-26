const gameBoard = (() => {
    const markersArray = [];
    const chooseSquare = () => {
      const blocks = document.querySelectorAll('.blocks')
      blocks.forEach(block => {
        block.addEventListener('click', () => {
          alert('i work!')
        })
      })
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
  
  
  const gameBoard = (() => {
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
          
          if (lastPlayer === undefined || lastPlayer === 'player2') {
            gameBoard.addMarker(player1);
          } else if (lastPlayer === 'player1'){
            gameBoard.addMarker(player2);
          };
          // Update last players' reference
          lastPlayer = markersArray[markersArray.length-1].name;
          
          if ((lastPlayer === 'player1' || lastPlayer === undefined) && chosenBlock.textContent === ""){
            chosenBlock.textContent = "X";
            chosenBlock.style.color = "darkred";
          } else if (lastPlayer === 'player2' && chosenBlock.textContent === "") {
            chosenBlock.textContent = "O";
            chosenBlock.style.color = "darkblue";
          } else if (chosenBlock.textContent !== "") {
            alert('Choose another block yo!');
          };
          
          
          
        })
      })
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
  
  
  
  
  
  // console.log(gameBoard)
  
  
  gameBoard.playGame();
  gameBoard.addMarker(player1);
  
  // console.log(gameBoard)
  
  
  gameBoard.playGame();