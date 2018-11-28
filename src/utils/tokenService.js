function setToken(token) {
    if (token) {
      localStorage.setItem('token', token);
    } else {
      localStorage.removeItem('token');
    } 
  }
  
  function getToken() {
    var token = localStorage.getItem('token');
    if (token) {
      // check if expired, remove if it is
      var payload = JSON.parse(atob(token.split('.')[1]));
      // JWT's exp is expressed in seconds, not milliseconds, so convert Date.now()
      if (payload.exp < Date.now() / 1000) {
        localStorage.removeItem('token');
        token = null;
      } 
    }
    return token;
  }
  
  function getUserFromToken () {
    var token = getToken();
    return token ? JSON.parse(atob(token.split('.')[1])).user : null;
  }
  
  function removeToken() {
    localStorage.removeItem('token');
  }
  
  export default {
    setToken,
    getToken,
    removeToken,
    getUserFromToken
  };