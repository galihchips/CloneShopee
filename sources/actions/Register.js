import axios from 'axios';
export function createUser(value) {
  return {
    type: 'CREATE_USER',
    payload: axios({
      method: 'post',
      url: 'http://192.168.0.10:5000/api/signup/',
      data: value
    })
  }
}