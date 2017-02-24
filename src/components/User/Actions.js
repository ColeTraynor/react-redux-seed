/**
 * Created by cole on 2017-02-10.
 */
import { APIService } from '../../helpers';

export function updateUser() {
  return dispatch => {
    APIService.get('/user')
      .then(data => {
        dispatch({
          type: "USER_UPDATE",
          payload: data
        })
      });
  }
}

export function acceptTerms(choice) {
  return dispatch => {
    APIService.patch('/user/tos', {choice: choice})
      .then(data => {
        dispatch({
          type: "USER_TERMS_UPDATE",
          payload: {...data, choice: choice}
        });
      })
  }
}

export function updateTradeUrl(tradeUrl) {
  return dispatch => {
    dispatch({
      type: "LOADING",
      payload: {
        element: "trade_url",
        result: true
      }
    });
    APIService.patch("/user/settings", {
      trade_url: tradeUrl
    })
      .then(data => {
        dispatch({
          type: "UPDATE_SETTINGS",
          payload: data
        });

        dispatch({
          type: "LOADING",
          payload: {
            element: "trade_url",
            result: false
          }
        });
      });
  }
}

export function login() {
  APIService.redirect("/auth/login");
}

export function logout() {
  APIService.redirect("/user/logout");
}