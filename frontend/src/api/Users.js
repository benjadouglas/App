export const handleLogin = async (Username, Password) => {
  try {
    const response = await fetch("http://localhost:8080/users/login", {
      mode: "no-cors",
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: `${Username}`,
        password: `${Password}`,
      }),
    })
      .then((response) => response.json())
      .catch((error) => console.log(error));
    return response;
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
};

export const handleSignUp = async (Username, Mail, Password) => {
  try {
    const response = await fetch("http://localhost:8080/users/signup", {
      mode: "no-cors",
      method: "POST",
      header: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        Mail: `${Mail}`,
        Username: `${Username}`,
        Password: `${Password}`,
      }),
    })
      .then((response) => response.json())
      .catch((error) => console.log(error));
    return response;
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
};
