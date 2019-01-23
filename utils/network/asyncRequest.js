import axios from 'axios';

import { apiBase } from 'utils/constants/environmentVariables';

export const asyncRequest = axios.create({
  baseURL: apiBase,
  timeout: 10000
});

export default asyncRequest;
