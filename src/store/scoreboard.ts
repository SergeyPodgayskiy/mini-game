import { Action } from './store.types';

// Declarations
export interface ScoreboardState {
  playerName?: string;
  score?: number;
}

// Action Variants
const SET_PLAYER_NAME = 'scoreboard:set_player_name';
const ADD_POINTS = 'scoreboard:add_points';
const RESET_SCORE = 'scoreboard:reset_score';

type ScoreboardActionType = typeof SET_PLAYER_NAME | typeof ADD_POINTS | typeof RESET_SCORE;
type ScoreboardAction = Action<ScoreboardActionType, ScoreboardState>;

// Reducer
export default function scoreboardReducer(
  state: ScoreboardState = { score: 0 },
  { type, payload }: ScoreboardAction,
): ScoreboardState {
  switch (type) {
    case SET_PLAYER_NAME: {
      return {
        playerName: payload.playerName,
        score: 0,
      };
    }
    case ADD_POINTS: {
      return {
        ...state,
        score: state.score + payload.score,
      };
    }
    case RESET_SCORE: {
      return {
        ...state,
        score: 0,
      };
    }
    default:
      return state;
  }
}

// Action Creators
export function setPlayerName(playerName: string): ScoreboardAction {
  return {
    type: SET_PLAYER_NAME,
    payload: {
      playerName,
      score: 0,
    },
  };
}

export function addPointsToScore(value: number): ScoreboardAction {
  return {
    type: ADD_POINTS,
    payload: {
      score: value,
    },
  };
}

export function resetScore(): ScoreboardAction {
  return {
    type: RESET_SCORE,
  };
}
