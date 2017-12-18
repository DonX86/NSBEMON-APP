
let loggedIn = true;

export const isLoggedIn = () => {
  return loggedIn;
}

export const login = () => {
  loggedIn = true;
}

export const logout = () => {
  loggedIn = false;
}
