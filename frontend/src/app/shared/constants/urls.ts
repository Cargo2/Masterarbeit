import exp from "constants";

const BASE_URL = 'http://localhost:5000';

export const ORDERS_URL = `${BASE_URL}/api/orders`;
export const ORDERS_BY_SEARCH_URL = `${ORDERS_URL}/search/`;
export const ORDER_BY_ID_URL = `${BASE_URL}/api/orders/`;



export const USER_LOGIN_URL = `${BASE_URL}/api/user/login`;
export const USER_REGISTER_URL = `${BASE_URL}/api/user/register`;