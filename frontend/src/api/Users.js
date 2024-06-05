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

// export const handleSignUp = async (Username, Mail, Password) => {
//   try {
//     const response = await fetch("http://localhost:8080/users/signup", {
//       mode: "no-cors",
//       method: "POST",
//       header: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({
//         Mail: `${Mail}`,
//         Username: `${Username}`,
//         Password: `${Password}`,
//       }),
//     })
//       .then((response) => response.json())
//       .catch((error) => console.log(error));
//     return response;
//   } catch (error) {
//     console.error("Error:", error);
//     throw error;
//   }
// };

export const handleSignUp = async (username, email, password) => {
  // Aquí puedes implementar la lógica para registrar al usuario en tu API
  // Esta es una simulación para fines de demostración
  try {
    const response = await fetch('/api/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, email, password }),
    });

    if (!response.ok) {
      throw new Error('Failed to sign up');
    }

    const data = await response.json();
    return { success: true, data };
  } catch (error) {
    return { success: false, error: error.message };
  }
};
