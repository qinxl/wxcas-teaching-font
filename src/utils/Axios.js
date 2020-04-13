import axios from 'axios';

axios.defaults.baseURL = '/api';

export default {
  get: () => {},
  post: (url, params, callback) => {
    axios
      .post(url, params)
      .then(({ data }) => {
        console.log(data);
        callback && callback(data);
      })
      .catch(error => {
        console.log(error);
      });
  },
};
