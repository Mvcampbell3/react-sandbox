import axios from 'axios';

export default {
  testGet() {
    return axios.get('/api/user')
  }
}