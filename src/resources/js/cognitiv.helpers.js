
export const helpers = {
  setLocalStorage: function(action){
      if(action.payload.private_key || action.payload.public_key){
        localStorage.setItem('private_key', action.payload.private_key);
        localStorage.setItem('public_key', action.payload.public_key);
        localStorage.setItem('user_type', action.payload.user_type);
        localStorage.setItem('user_id', action.payload.user_type);
        localStorage.setItem('expiration_date', action.payload.expiration_date);
        if(action.payload.auth_token){
          localStorage.setItem('auth_token', action.payload.auth_token);
          localStorage.setItem('remember_me', action.payload.remember_me);
        }
      }else{
        localStorage.removeItem('private_key');
        localStorage.removeItem('public_key');
        localStorage.removeItem('auth_token');
        localStorage.removeItem('user_type');
        localStorage.removeItem('user_id');
        localStorage.removeItem('expiration_date');
        localStorage.removeItem('remember_me');
        alert("Authentication failed. Please verify your username and password");
      }
  },
  removeLocalStorage: function(){
    localStorage.removeItem('private_key');
    localStorage.removeItem('public_key');
    localStorage.removeItem('auth_token');
    localStorage.removeItem('user_type');
    localStorage.removeItem('user_id');
    localStorage.removeItem('expiration_date');
  }
}