const Game = require('./lib/Game');

new Game().initializeGame();
    inquirer

        .then(({ name }) => {
            this.player = new Player(name);
  
            this.startNewBattle();
        });

Game.prototype.startNewBattle = function() {
  if (this.player.agility > this.currentEnemy.agility) {
    this.isPlayerTurn = true;
  } else {
    this.isPlayerTurn = false;
  }
};

