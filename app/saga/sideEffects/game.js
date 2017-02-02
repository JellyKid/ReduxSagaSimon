import { call, put, take, fork, cancel } from 'redux-saga/effects';
import { togglePanel, toggleGameState, lockGame, unlockGame, resetGame, recordPlay, playHistory, flashGameOver, HISTORY_DONE, PLAYER_DONE, PLAYER_LOSE } from '../../redux/actions';
import playerPlay from './playerPlay';
import { delay, log, colors, randColInit } from './helpers';


export default function* game(){
  try {
    //set internal extern gamestate
    let game = true;
    yield put(toggleGameState());
    let history = [];
    yield put(resetGame());
    while(game){
      //add one random play to history
      yield put(lockGame());
      const play = yield call(randColInit, colors);
      history.push(play);
      yield put(recordPlay(play));
      //playback history
      yield put(playHistory(history));
      yield take(HISTORY_DONE);
      yield put(unlockGame());
      //wait for player to finish playing
      const playing = yield fork(playerPlay, history);
      const action = yield take([PLAYER_DONE, PLAYER_LOSE]);
      yield cancel(playing);
      if(action.type === PLAYER_LOSE){
        yield put(toggleGameState());
        game = false;
      }
    }
  } catch (e) {

    yield call(log,e);

  } finally {
    yield put(flashGameOver());
  }
}
