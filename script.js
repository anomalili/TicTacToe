var initGame = (reload, winner) => {playMarks = Array(9).fill(null), winLines = [[0, 1, 2],[2,5,8],[6,7,8],[0, 3, 6],[3, 4, 5],[1, 4, 7],[0, 4, 8],[2, 4, 6]], playCount = 0, nextPlayer = localStorage.getItem('nextPlayer') || 'X'; 
    ['X','O'].includes(winner) ? (alert(`Player ${winner} wins!`), location.reload()) : reload ? (alert('Players draw.'), location.reload()) : null;}
    var getWinner = (playerLabel) => winLines.some((winLine) => winLine.every((index) => playMarks[index] == playerLabel));
    document.querySelectorAll('.grid').forEach((grid, index) => {
      grid.addEventListener('click', (e) => {
        if (!grid.innerText) { grid.innerText = nextPlayer; playMarks[grid.id] = nextPlayer;
          if (getWinner('X') || getWinner('O')) initGame(true, nextPlayer);
          if(++playCount == 9) initGame(true); nextPlayer = nextPlayer == 'X' ? 'O' : 'X'; localStorage.setItem('nextPlayer', nextPlayer);}});});
    initGame();


    const nyeroPozik = [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9],
        [1, 4, 7],
        [2, 5, 8],
        [3, 6, 9],
        [1, 5, 9],
        [3, 5, 7]
    ];