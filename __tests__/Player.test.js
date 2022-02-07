class Player extends Character {
    constructor(name = '') {
      super(name);
  
      this.inventory = [new Potion('health'), new Potion()];
    }
  
    // other methods...
  }
const Player = require('../lib/Player');

const Potion = require('../lib/Potion');

jest.mock('../lib/Potion');

console.log(new Potion());

class Player {
    constructor(name = '') {
      this.name = name;
  
      this.health = Math.floor(Math.random() * 10 + 95);
      this.strength = Math.floor(Math.random() * 5 + 7);
      this.agility = Math.floor(Math.random() * 5 + 7);
  
      this.inventory = [new Potion('health'), new Potion()];
    }
  
    getStats() {
      return {
        potions: this.inventory.length,
        health: this.health,
        strength: this.strength,
        agility: this.agility
      };
    }
  
    getInventory() {
      if (this.inventory.length) {
        return this.inventory;
      }
      return false;
    }
  
    addPotion(potion) {
      this.inventory.push(potion);
    }
  
    usePotion(index) {
      const potion = this.inventory.splice(index, 1)[0];
  
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
    }
  }

// test('creates a player object', () => {
//     const player = new Player('Dave');
  
//     expect(player.name).toBe('Dave');
//     expect(player.health).toEqual(expect.any(Number));
//     expect(player.strength).toEqual(expect.any(Number));
//     expect(player.agility).toEqual(expect.any(Number));

//     expect(player.inventory).toEqual(
//         expect.arrayContaining([expect.any(Object)])
//       );
//   });

//   test("gets player's stats as an object", () => {
//     const player = new Player('Dave');
  
//     expect(player.getStats()).toHaveProperty('potions');
//     expect(player.getStats()).toHaveProperty('health');
//     expect(player.getStats()).toHaveProperty('strength');
//     expect(player.getStats()).toHaveProperty('agility');
//   });


//   test('gets inventory from player or returns false', () => {
//     const player = new Player('Dave');
  
//     expect(player.getInventory()).toEqual(expect.any(Array));
  
//     player.inventory = [];
  
//     expect(player.getInventory()).toEqual(false);
//   });

//   test("gets player's health value", () => {
//     const player = new Player('Dave');
  
//     expect(player.getHealth()).toEqual(expect.stringContaining(player.health.toString()));
//   });


// test('checks if player is alive or not', () => {
//   const player = new Player('Dave');

//   expect(player.isAlive()).toBeTruthy();

//   player.health = 0;

//   expect(player.isAlive()).toBeFalsy();
// });

