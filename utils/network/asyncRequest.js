import axios from 'axios';

// import { apiBase } from 'utils/constants/environmentVariables';

const asyncRequest = axios.create({
  baseURL: 'http://localhost:3000/api',
  timeout: 1000
});

export default asyncRequest;
