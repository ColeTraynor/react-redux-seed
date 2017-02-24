/**
 * Created by cole on 2017-02-16.
 */

const initialState = {

};

export default function SystemReducer(state = initialState, action) {

  if (action.type === "SYSTEM_UPDATE") {
    return Object.assign({}, state, action.payload);
  }

  if (action.type === "ONLINE") {
    return {...state, users_online: action.payload.count}
  }

  return state;
}