/**
 * Created by cole on 2017-02-16.
 */
import { APIService } from '../../helpers';

export function updateSystem() {
  return dispatch => {
    APIService.get('/system')
      .then(data => {
        dispatch({
          type: 'SYSTEM_UPDATE',
          payload: data
        });
      });
  }
}

export function startPing() {
  APIService.patch('/user/ping');
  setInterval(() => {
    APIService.patch('/user/ping');
  }, 60000 * 5);
}