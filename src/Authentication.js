import Cookies from 'js-cookie';

class Authentication {

  isLoggedIn = () => {
    // Check if we have a token
    return !!Cookies.get('nsbemon_auth_token');
  }

  login = (username, password) => {
    return new Promise((resolve, reject) => {
      // Fire off a request to the server
      Promise.resolve("TEST_TOKEN")
      .then((token) => {
        // Save the token
        Cookies.set('nsbemon_auth_token', token);
        resolve();
      })
      .catch(err => {
        reject(err);
      });
    });
  }

  logout = () => {
    // Erase the token
    Cookies.remove('nsbemon_auth_token');
  }
}

export const authenticationClient = new Authentication();
