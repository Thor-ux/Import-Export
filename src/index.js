import { initApp } from './app.js';
import { Character } from './domain.js';
import { GameSavingData,  readGameSaving,  writeGameSaving } from './game.js';

initApp();

const player = new Character('Hero', 'Warrior');
console.log(player);

const savingData = new GameSavingData({ level: 1,  score: 100 });
writeGameSaving(savingData);
readGameSaving();