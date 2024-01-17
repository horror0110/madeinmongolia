export const RegisterService = {
  sendOTP(data) {
    return fetch(
      "https://madeinmongolia.asia/api/v2/auth/web/register-send-sms",
      {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then((res) => res.json())
      .then((d) => d);
  },
  checkOTP(data) {
    return fetch("https://madeinmongolia.asia/api/v2/auth/web/check-otp", {
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
