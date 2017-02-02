import update from 'react-addons-update';
import INITIAL_STATE from './initialState';

export function togglePanel(state, color) {
  return update(state,{
    panels: {
      [color]: {
        $set: !state.panels[color]
      }
    }
  });
}

export function toggleAll(state) {
  return update(state,{
    panels: {
      red: {$set: !state.panels.red},
      blue: {$set: !state.panels.blue},
      green: {$set: !state.panels.green},
      yellow: {$set: !state.panels.yellow}
    }
  });
}

export function toggleGameState(state) {
  return update(state,{
    game: {$set: !state.game}
  });
}

export function resetGame(state) {
  return Object.assign({}, state, INITIAL_STATE);
}

export function lockGame(state) {
  return update(state, {
    locked: {$set: true}
  });
}

export function unlockGame(state) {
  return update(state, {
    locked: {$set: false}
  });
}

export function recordPlay(state, color) {
  return update(state, {
    history: {$push: [color]}
  });
}
