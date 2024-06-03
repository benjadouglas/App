export const handleLogin = async (Username, Password) => {
  const response = fetch("http://localhost:8080/users/login", {
    mode: "no-cors",
    method: "POST",
    header: {
      "Content-Type": "appliactoin/json",
    },
    body: JSON.stringify({
      Username: `${Username}`,
      Password: `${Password}`,
    }),
  })
    .then((response) => response.json())
    .catch((error) => console.log(error));
  return response;
};

export const handleSignUp = async (Username, Email, Password) => {
  const response = fetch("http://localhost:8080/users/login", {
    mode: "no-cors",
    method: "POST",
    header: {
      "Content-Type": "appliactoin/json",
    },
    body: JSON.stringify({
      Username: `${Username}`,
      Email: `${Email}`,
      Password: `${Password}`,
    }),
  })
    .then((response) => response.json())
    .catch((error) => console.log(error));
  return response;
};
