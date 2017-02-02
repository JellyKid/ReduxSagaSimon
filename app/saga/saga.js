import { takeEvery } from 'redux-saga';
import { LIGHT_CIRCLE, PLAY_HISTORY, FLASH_GAME_OVER, START_NEW_GAME } from '../redux/actions';
import { lightCircle, playHistory, flashGameOver, newGame } from './sideEffects';

export default function* rootSaga(){
  yield [
    takeEvery(LIGHT_CIRCLE, lightCircle),
    takeEvery(PLAY_HISTORY, playHistory),
    takeEvery(FLASH_GAME_OVER, flashGameOver),
    takeEvery(START_NEW_GAME, newGame)
  ];
}
