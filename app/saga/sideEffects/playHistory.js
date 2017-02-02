import { call, put, select } from 'redux-saga/effects';
import { togglePanel, lockGame, unlockGame, historyDone } from '../../redux/actions';
import { log, delay, getHistory, cTable } from './helpers';

export default function* playHistory(action){
  try {
    let history = action.payload;
    if(!history)
      history = yield select(getHistory);

    for (var i = 0; i < history.length; i++) {
      yield call(delay,500);
      yield put(togglePanel(cTable[history[i]]));
      yield call(delay,500);
      yield put(togglePanel(cTable[history[i]]));
    }
    yield put(historyDone());
  } catch (e) {
    yield call(log, e);
  }
}
