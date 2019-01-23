/**
 * Environment
 */
export const environmentIsDev = process.env.NODE_ENV !== 'production';
export const environmentIsProd = process.env.NODE_ENV === 'production';

/**
 * Api Base
 */
const devApi = 'http://localhost:1337/api';
const productionApi = 'https://vilhelmfalkenmark-portfolio.herokuapp.com/api';
export const apiBase = environmentIsDev ? devApi : productionApi;

export default '';
