/**
 * Created by cole on 2017-02-07.
 */

const initialState = {
  collapsed: false
};

export default function SidebarReducer(state = initialState, action) {

  if (action.type === "SIDEBAR_TOGGLE") {
    return {...state, collapsed: !state.collapsed};
  }

  return state;
}