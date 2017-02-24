/**
 * Created by cole on 2017-02-10.
 */
import { APIService } from '../../helpers';

export function updateJackpot() {
  return dispatch => {
    APIService.get('/jackpot')
      .then(data => {
        dispatch({
          type: 'JACKPOT_UPDATE',
          payload: data
        });
      });
  };
}