import cookies from 'js-cookie';
import axios from 'axios';
import { merge } from 'lodash';
import { TOKEN_PATH } from '../actions/authActions';
import * as authActions from '../actions/authActions';
import { Route, Redirect } from 'react-router'
import * as authSelectors from '../selectors/authSelectors';

import config from '../config';

export default function(options) {
  const token = cookies.get(TOKEN_PATH);

  console.log('API request -- token:' + token);

  // submit token to server even token is null
  const defaultOpt = {
    baseURL: config.apiBaseUrl,
    headers: {
      'Content-Type': 'application/json',
      'X-AUTH-TOKEN': token
    }
  };

  const opt = merge({}, defaultOpt, options);
  return new Promise(function(resolve, reject) {
    axios(opt)
      .then(res => {
        if (res.status == 200) {
          resolve(res);
        }
        else if(res.status == 401){
        }
      })
      .catch(err => {
        window.location.href = '/#'
        setTimeout(() => {
          localStorage.clear()
          cookies.remove('token');
          cookies.remove('user_id');
          window.location.reload()
        }, 0);
        reject(err);
      });
  });
}
