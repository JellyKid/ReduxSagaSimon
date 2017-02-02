import { call, put } from 'redux-saga/effects';
import { togglePanel, lockGame, unlockGame } from '../../redux/actions';
import { delay, log, colors } from './helpers';

export default function* lightCircle(payload){
  try {
    yield put(lockGame());
    for (var i = 0; i < colors.length; i++) {
      yield put(togglePanel(colors[i]));
      yield call(delay, 400);
      yield put(togglePanel(colors[i]));
    }
    yield put(unlockGame());
  } catch (e) {
    yield call(log, e);
  }
}
