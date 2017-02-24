/**
 * Created by cole on 2017-02-10.
 */

const initialState = {
  loggedIn: false
};

export default function UserReducer(state = initialState, action) {

  if (action.type === "USER_UPDATE") {
    return Object.assign(state, action.payload, {loggedIn: action.payload.name !== undefined});
  }

  return state;
}