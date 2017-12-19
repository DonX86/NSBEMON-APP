
class Authentication {

  constructor() {
    this.loggedIn = true;
  }

  isLoggedIn = () => {
    // Check if we have a token
    return this.loggedIn;
  }

  login = () => {
    return new Promise((resolve, reject) => {
      Promise.resolve("").then((token) => {
        // Save the token
        this.loggedIn = true;
        resolve();
      })
    })
  }

  logout = () => {
    // Erase the token
    this.loggedIn = false;
  }
}

export const authenticationClient = new Authentication();
