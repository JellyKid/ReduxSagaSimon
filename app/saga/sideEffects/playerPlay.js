import { call, put, race, take } from 'redux-saga/effects';
import { playerDone, playerLose, togglePanel, PLAYER_PLAY } from '../../redux/actions';
import { delay, log, cTable } from './helpers';

function playTimeout(ms) {
  return new Promise(resolve => setTimeout(resolve,ms));
}

export default function* playerPlay(history){
  try {
    for (var i = 0; i < history.length; i++) {

      const {timeout, played} = yield race({
        timeout: call(playTimeout, 3000),
        played: take(PLAYER_PLAY)
      });

      if(played){
        const play = played.payload;
        yield put(togglePanel(play));
        if(cTable[history[i]] !== play)
          yield put(playerLose());
      } else {
        yield put(playerLose());
      }

    }
    yield put(playerDone());
  } catch (e) {
    yield call(log, e);
  }
}
