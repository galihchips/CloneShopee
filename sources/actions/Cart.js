import axios from 'axios';
export function createCart(value) {
  return {
    type: 'CREATE_CART',
    payload: axios({
      method: 'POST',
      url: 'http://192.168.0.10:5000/api/cart/',
      data: value
    })
  }
}

export function fetchCart(){
	return {
		type: 'FETCH_CART',
		payload : axios.get('http://192.168.0.10:5000/api/cart/')
	};
}

export function getCart(id){
  return {
    type: 'GET_CART',
    payload : axios.get(`http://192.168.0.10:5000/api/cart/${id}`)
  };
}

export function deleteCart(id) {
  return {
    type: 'DELETE_CART',
    payload: axios({
      method: 'DELETE',
      url: `http://192.168.0.10:5000/api/cart/${id}`
    }),
  }
}