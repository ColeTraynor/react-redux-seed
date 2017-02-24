/**
 * Created by cole on 2017-02-10.
 */

const initialState = {
  id: 0,
  yourItems: [],
  items: [],
  entries: [],
  maxItems: 0,
  maxEntries: 0,
  total: 0,
  winChance: 0
};

export default function JackpotReducer(state = initialState, action) {

  if (action.type === "JACKPOT_UPDATE") {
    return Object.assign({}, state, action.payload);
  }

  if (action.type === 'JACKPOT_START') {
    return Object.assign({}, action.payload, {
      state: 0,
      entries: []
    })
  }

  if (action.type === 'JACKPOT_END') {
    return Object.assign({}, state, action.payload);
  }

  return state;
}