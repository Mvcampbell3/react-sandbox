import axios from 'axios';

export default {
  testGet() {
    return axios.get('/api/user')
  },

  postLogin(sendObj) {
    return axios.post('/api/user/login', sendObj);
  }
}