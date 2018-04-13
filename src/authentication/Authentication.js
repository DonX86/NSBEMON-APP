import Cookies from 'js-cookie';

class Authentication {
  constructor() {
    this.authServiceEndpoint = process.env.NSBEMON_API_URL || '';
  }

  isLoggedIn = () => {
    // Check if we have a token
    return !!Cookies.get('nsbemon_auth_token');
  };

  login = (email, password) => {
    return new Promise((resolve, reject) => {
      fetch(this.authServiceEndpoint + '/login', {
        method: 'POST',
        body: JSON.stringify({ email, password }),
        headers: new Headers({
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        }),
      })
        .then((response) => {

          if (response.ok) {
            return response.json();
          }

          reject('Unauthorized');
        })
        .then(response => {
          Cookies.set('nsbemon_auth_token', response.token);
          resolve();
        })
        .catch((error) => {
          reject(error);
        });
    });
  };

  logout = () => {
    // Erase the token
    Cookies.remove('nsbemon_auth_token');
  };
}

export const authenticationClient = new Authentication();
