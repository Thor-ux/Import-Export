export class Game {
    start() {
      console.log('game started');
    }
  }
  
  export class GameSavingData {
    constructor(data) {
      this.data = data;
    }
  }
  
  export function readGameSaving() {
    console.log('Reading game saving');
  }
  
  export function writeGameSaving(data) {
    console.log('Writing game saving', data);
  }