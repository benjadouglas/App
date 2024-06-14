// export const handleLogin = async (Username, Password) => {
//   try {
//     const response = await fetch("http://localhost:8080/users/login", {
//       method: "POST",
//       credentials: "include",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({
//         username: `${Username}`,
//         password: `${Password}`,
//       }),
//     })
//       .then((response) => response.json())
//       .then((data) => console.log(data))
//       .catch((error) => console.log(error));
//     return response;
//   } catch (error) {
//     console.error("Error:", error);
//     throw error;
//   }
// };

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
    });

    if (!response.ok) {
      throw new Error('Error al iniciar sesión. Verifica tus credenciales.');
    }

    const data = await response.json();
    return { status: 'success', data }; // Devuelve un objeto con estado y datos
  } catch (error) {
    console.error("Error al iniciar sesión:", error.message);
    throw new Error('Error al iniciar sesión. Inténtalo de nuevo más tarde.');
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

export const getCursoById = async (id) => {
  try {
    const response = await fetch(`http://localhost:8080/cursos/${id}`, {
      method: "GET",
      mode: "cors",
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};

export const createCurso = async (nombre, descripcion, precio) => {
  try {
    fetch("http://localhost:8080/cursos/create", {
      method: "POST",
      credentials: "include",
      body: JSON.stringify({
        precio: parseInt(precio),
        nombre_curso: nombre,
        descripcion: descripcion,
        fecha_inicio: new Date(),
        fecha_fin: new Date(),
      }),
    });
  } catch (err) {
    console.error(err);
  }
};

export const enrollCourse = async (id) => {};
