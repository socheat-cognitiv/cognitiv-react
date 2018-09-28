import { LOGIN_USER, LOGOUT_USER } from "../constants/action-types";
import { helpers } from '../resources/js/cognitiv.helpers.js'; 

// Pulling in the Local Storage
const user = {
  user_type: localStorage.getItem('user_type'),
  user_id: localStorage.getItem('user_id'),
  remember_me: localStorage.getItem('remember_me'),
  private_key: localStorage.getItem('private_key'),
  public_key: localStorage.getItem('public_key'),
  auth_token: localStorage.getItem('auth_token'),
  expiration_date: localStorage.getItem('expiration_date')
};

// Checking Local Storage and assign initial state
const initialState = {
  user: {
    user_type: user.user_type ? JSON.parse(user.user_type) : false,
    user_id: user.user_id ? JSON.parse(user.user_id) : false,
    remember_me: user.remember_me ? JSON.parse(user.remember_me) : false,
    private_key: user.private_key ? user.private_key : false,
    public_key: user.public_key ? user.public_key : false,
    auth_token: user.auth_token ? user.auth_token : false,
    expiration_date: user.expiration_date ? Number(user.expiration_date) : false
  },
  campaigns: [],
  partners: [],
  advertisers: []
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_USER:
      helpers.setLocalStorage(action);
      return {...state, user: action.payload }
    case LOGOUT_USER:
      helpers.removeLocalStorage(action);
      return {...state, user: action.payload }
    default:
      return state;
  }
};
export default rootReducer;
