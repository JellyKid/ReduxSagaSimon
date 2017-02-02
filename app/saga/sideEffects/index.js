import lightCircle from './lightCircle';
import playerPlay from './playerPlay';
import playHistory from './playHistory';
import flashGameOver from './flashGameOver';
import game from './game';

module.exports = {
  lightCircle: lightCircle,
  playerPlay: playerPlay,
  playHistory: playHistory,
  flashGameOver: flashGameOver,
  newGame: game
};

// Could have done something like this
// but module.exports just seemed easier
// import _lightCircle from './lightCircle';
// export const lightCircle = _lightCircle;
