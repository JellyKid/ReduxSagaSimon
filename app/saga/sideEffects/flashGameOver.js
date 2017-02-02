import { call, put } from 'redux-saga/effects';
import { toggleAll, lockGame, unlockGame } from '../../redux/actions';
import { delay, log } from './helpers';

export default function* flashGameOver(payload){
  try {
    yield put(lockGame());
    for(let i = 0; i < 3; i++){
      yield put(toggleAll());
      yield call(delay,500);
      yield put(toggleAll());
      yield call(delay,500);
    }
    yield put(unlockGame());
  } catch (e) {
    yield call(log, e);
  }
}
