import axios from 'axios';
import qs from 'qs';
import { message } from 'antd';

axios.defaults.baseURL = '/api';

export default {
  get: () => {},
  post: (url, params, callback) => {
    axios
      .post(url, qs.stringify(params))
      .then(({ data }) => {
        if (data.code !== '0') {
          console.log(data.msg);
        } else {
          callback && callback(data);
        }
      })
      .catch(error => {
        message.error('接口访问失败｛' + error + '｝');
      });
  },
};
