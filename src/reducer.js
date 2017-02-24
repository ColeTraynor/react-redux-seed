/**
 * Created by cole on 2017-02-07.
 */

import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { reducer as toastrReducer } from 'react-redux-toastr';
import {
  SidebarReducer,
  JackpotReducer,
  UserReducer,
  SystemReducer,
  ModalReducer
} from './components';

export default combineReducers({
  sidebar: SidebarReducer,
  jackpot: JackpotReducer,
  user: UserReducer,
  system: SystemReducer,
  modal: ModalReducer,
  toastr: toastrReducer,
  routing: routerReducer
});