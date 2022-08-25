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
  
  
  
  gameBoard.addMarker(player1);
  
  // console.log(gameBoard)
  
  
  gameBoard.playGame();