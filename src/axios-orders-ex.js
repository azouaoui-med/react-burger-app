import axios from 'axios';
/**
 * change the filename to 'axios-orders.js'
 * and copy your firebase realtime database url
 */
const instance = axios.create({
  baseURL: 'firebase_realtime_database_url'
});
export default instance;
