//////SINGLE ACTIONS FOR REDUCER//////////////

export const TOGGLE_PANEL = 'TOGGLE_PANEL';
export function togglePanel(payload) {
  return {
    type: TOGGLE_PANEL,
    payload: payload
  };
}

export const TOGGLE_ALL = 'TOGGLE_ALL';
export function toggleAll() {
  return {
    type: TOGGLE_ALL
  };
}

export const LOCK_GAME = 'LOCK_GAME';
export function lockGame() {
  return {
    type: LOCK_GAME
  };
}

export const UNLOCK_GAME = 'UNLOCK_GAME';
export function unlockGame() {
  return {
    type: UNLOCK_GAME
  };
}

export const TOGGLE_GAME_STATE = 'TOGGLE_GAME_STATE';
export function toggleGameState() {
  return {
    type: TOGGLE_GAME_STATE
  };
}

export const RESET_GAME = 'RESET_GAME';
export function resetGame() {
  return {
    type: RESET_GAME
  };
}

export const RECORD_PLAY = 'RECORD_PLAY';
export function recordPlay(color) {
  return {
    type: RECORD_PLAY,
    payload: color
  };
}

//////SAGA ACTIONS //////////////

export const LIGHT_CIRCLE = 'LIGHT_CIRCLE';
export function lightCircle() {
  return {
    type: LIGHT_CIRCLE
  };
}

export const PLAYER_PLAY = 'PLAYER_PLAY';
export function playerPlay(color) {
  return {
    type: PLAYER_PLAY,
    payload: color
  };
}

export const CPU_PLAY = 'CPU_PLAY';
export function cpuPlay(color) {
  return {
    type: CPU_PLAY,
    payload: color
  };
}

export const START_NEW_GAME = 'START_NEW_GAME';
export function startNewGame() {
  return {
    type: START_NEW_GAME
  };
}

export const PLAY_HISTORY = 'PLAY_HISTORY';
export function playHistory(history) {
  return {
    type: PLAY_HISTORY,
    payload: history
  };
}

export const HISTORY_DONE = 'HISTORY_DONE';
export function historyDone() {
  return {
    type: HISTORY_DONE
  };
}

export const PLAYER_DONE = 'PLAYER_DONE';
export function playerDone() {
  return {
    type: PLAYER_DONE
  };
}

export const PLAYER_LOSE = 'PLAYER_LOSE';
export function playerLose() {
  return {
    type: PLAYER_LOSE
  };
}

export const FLASH_GAME_OVER = 'FLASH_GAME_OVER';
export function flashGameOver() {
  return {
    type: FLASH_GAME_OVER
  };
}
