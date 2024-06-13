export const handleLogin = async (Username, Password) => {
  try {
    const response = await fetch("http://localhost:8080/users/login", {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: `${Username}`,
        password: `${Password}`,
      }),
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.log(error));
    return response;
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
};

export const handleSignUp = async (username, email, password) => {
  // Aquí puedes implementar la lógica para registrar al usuario en tu API
  // Esta es una simulación para fines de demostración
  try {
    const response = await fetch("/api/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, email, password }),
    });
    if (!response.ok) {
      throw new Error("Failed to sign up");
    }

    const data = await response.json();
    return { success: true, data };
  } catch (error) {
    return { success: false, error: error.message };
  }
};

export const validateUser = async () => {
  try {
    const response = await fetch("http://localhost:8080/users/validate", {
      method: "GET",
      credentials: "include",
    });
    const data = await response.json();
    if (data.message !== "Logged in succesfully") {
      return false;
    }
    return true;
  } catch (err) {
    return false;
  }
};

export const getCursos = async () => {
  try {
    const response = await fetch("http://localhost:8080/cursos/user", {
      mode: "cors",
      method: "GET",
      credentials: "include",
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error:", error);
  }
};

export const getAllCursos = async () => {
  try {
    const response = await fetch("http://localhost:8080/cursos", {
      method: "GET",
      mode: "cors",
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};
