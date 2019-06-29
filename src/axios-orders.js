import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://react-burger-dacb4.firebaseio.com/'
});
export default instance;
