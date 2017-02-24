/**
 * Created by cole on 2017-02-07.
 */
import 'whatwg-fetch';
import NotificationService from './NotificationService';

class APIService {

  constructor() {
    this.API_BASE = `${process.env.REACT_APP_API_URL}/api/v1`;
  }

  extractData(res) {
    return res.json().then(data => {
      console.log(res.url, data);
      if (!data.success) {
        NotificationService.error(data.error);
        return {};
      } else {
        return data.result;
      }
    });
  }

  get(url) {
    return fetch(this.API_BASE + url, {
      method: "GET",
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include'
    }).then( res => this.extractData(res) );
  }

  post(url, args) {
    return fetch(this.API_BASE + url, {
      method: "POST",
      mode: 'cors',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      credentials: 'include',
      body: JSON.stringify(args)
    }).then( res => this.extractData(res) );
  }

  patch(url, args) {
    return fetch(this.API_BASE + url, {
      method: "PATCH",
      mode: 'cors',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      credentials: 'include',
      body: JSON.stringify(args)
    }).then( res => this.extractData(res) );
  }

  redirect(url) {
    window.location = this.API_BASE + url;
  }

}

export default new APIService();