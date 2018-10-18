import axios from 'axios';
export function loginUser(value) {
  return {
    type: 'LOGIN',
    payload: axios({
      method: 'post',
      url: 'http://192.168.0.10:5000/api/login/',
      data: value
    })
  }
}