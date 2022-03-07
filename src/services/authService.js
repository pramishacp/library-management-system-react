const tokenKey = "token";

export function login(user) {
  localStorage.setItem(tokenKey, JSON.stringify(user));
}

export function logout() {
  localStorage.removeItem(tokenKey);
}

export function getCurrentUser() {
  try {
    const user = localStorage.getItem(tokenKey);
    return JSON.parse(user);
  } catch (ex) {
    return null;
  }
}

const auth = {
  login,
  logout,
  getCurrentUser,
};

export default auth
