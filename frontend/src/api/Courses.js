import axios from "axios";

export const inscribirCurso = async (courseId) => {
  try {
    const response = await axios.post(
      "http://localhost:8080/cursos/inscribir",
      {
        ID_Curso: parseInt(courseId),
      },
      { withCredentials: true },
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getCursosInscriptos = async () => {
  try {
    const response = await axios.get("http://localhost:8080/cursos/user", {
      withCredentials: true,
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};
