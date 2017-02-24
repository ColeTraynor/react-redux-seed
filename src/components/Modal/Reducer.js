/**
 * Created by cole on 2017-02-19.
 */

const initialState = {
  opened: 'NONE'
};

export default function modalReducer(state = initialState, action) {

  if (action.type === "MODAL_OPEN") {
    return {...state, opened: action.payload}
  }

  return state;
}