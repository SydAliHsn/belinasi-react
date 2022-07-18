import axios from 'axios';

// For Production
// export default axios.create({
//   baseURL: '/api/v1',
//   timeout: 55000
// });

// For Development
export default axios.create({
  withCredentials: true, //
  baseURL: 'http://127.0.0.1:8000/api/v1',
  timeout: 55000
});
