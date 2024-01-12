export const LoginService = {
  checkNumber(data) {
    return fetch("https://madeinmongolia.asia/api/v2/auth/web/check-number", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((d) => d);
  },
  login(data) {
    return fetch("https://madeinmongolia.asia/api/v2/auth/web/login", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((d) => d);
  },
};
