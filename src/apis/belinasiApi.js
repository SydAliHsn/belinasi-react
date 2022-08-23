import axios from 'axios';

// For PRODUCTION
// export default axios.create({
//   baseURL: '/api/v1',
// });

// For DEVELOPMENT
export default axios.create({
  withCredentials: true,
  baseURL: 'http://127.0.0.1:8000/api/v1'
});
