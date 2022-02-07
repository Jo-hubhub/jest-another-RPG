const Potion = require('../lib/Potion');

const Character = require('./Character');

function Player(name = '') {
    this.name = name;
  
    this.health = Math.floor(Math.random() * 10 + 95);
    this.strength = Math.floor(Math.random() * 5 + 7);
    this.agility = Math.floor(Math.random() * 5 + 7);

    this.inventory = [new Potion('health'), new Potion()];
  }

  // inherit prototype methods from Character here:
Player.prototype = Object.create(Character.prototype);

  Player.prototype.getStats = function() {
    return {
      potions: this.inventory.length,
      health: this.health,
      strength: this.strength,
      agility: this.agility
    };
  };
  
  Player.prototype.getInventory = function() {
    if (this.inventory.length) {
      return this.inventory;
    }
    return false;
  };
  
  module.exports = Player;

//   test("subtracts from player's health", () => {
//     const player = new Player('Dave');
//     const oldHealth = player.health;
  
//     player.reduceHealth(5);
  
//     expect(player.health).toBe(oldHealth - 5);
  
//     player.reduceHealth(99999);
  
//     expect(player.health).toBe(0);
//   });

//   test("gets player's attack value", () => {
//     const player = new Player('Dave');
//     player.strength = 10;
  
//     expect(player.getAttackValue()).toBeGreaterThanOrEqual(5);
//     expect(player.getAttackValue()).toBeLessThanOrEqual(15);
//   });

  test('adds a potion to the inventory', () => {
    const player = new Player('Dave');
    const oldCount = player.inventory.length;
  
    player.addPotion(new Potion());
  
    expect(player.inventory.length).toBeGreaterThan(oldCount);
  });

  Player.prototype.addPotion = function(potion) {
    this.inventory.push(potion);
  };

  test('uses a potion from inventory', () => {
    const player = new Player('Dave');
    player.inventory = [new Potion(), new Potion(), new Potion()];
    const oldCount = player.inventory.length;
  
    player.usePotion(1);
  
    expect(player.inventory.length).toBeLessThan(oldCount);
  });

  Player.prototype.usePotion = function(index) {
    const potion = this.getInventory().splice(index, 1)[0];
  
    switch (potion.name) {
      case 'agility':
        this.agility += potion.value;
        break;
      case 'health':
        this.health += potion.value;
        break;
      case 'strength':
        this.strength += potion.value;
        break;
    }
  };









