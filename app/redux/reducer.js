import { INITIAL_STATE } from './initialState';
import { RESET_GAME, TOGGLE_PANEL, LOCK_GAME, UNLOCK_GAME, TOGGLE_ALL, TOGGLE_GAME_STATE, RECORD_PLAY } from './actions';
import { resetGame, togglePanel, lockGame, unlockGame, toggleAll, toggleGameState, recordPlay} from './pureFunc';

export default function(state = INITIAL_STATE, action){
  switch (action.type) {
    case RESET_GAME:
      return resetGame(state);

    case LOCK_GAME:
      return lockGame(state);

    case UNLOCK_GAME:
      return unlockGame(state);

    case TOGGLE_PANEL:
      return togglePanel(state, action.payload);

    case TOGGLE_ALL:
      return toggleAll(state);

    case TOGGLE_GAME_STATE:
      return toggleGameState(state);

    case RECORD_PLAY:
      return recordPlay(state, action.payload);      

    default:
      return state;
  }
}
