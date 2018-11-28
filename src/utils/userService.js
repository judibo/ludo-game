import userAPI from './userAPI';
import tokenService from './tokenService';

function signup(user) {
  return userAPI.signup(user)
    .then(token => tokenService.setToken(token));
}

function getUser() {
  return tokenService.getUserFromToken();
}

function logout() {
  tokenService.removeToken();
}

function login(user) {
  return userAPI.login(user)
    .then(token => tokenService.setToken(token));
}

export default {
  signup,
  getUser,
  logout,
  login
}