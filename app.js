import { Game } from './game.js';

export function initApp() {
  const game = new Game();
  game.start();
}