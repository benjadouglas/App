package cursos

import (
	"backend/clients/cursos"
	inscripcionesClient "backend/clients/inscripciones"
	"backend/model"
	"net/http"

	"github.com/gin-gonic/gin"
)

func GetCursosInscriptos(c *gin.Context) {
	someValue, exists := c.Get("user")
	var cursosList []model.Curso
	if exists != true {
		c.IndentedJSON(http.StatusUnauthorized, gin.H{
			"Status": "Not authorized",
		})
	}
	user, ok := someValue.(model.Usuario)
	if !ok {
		c.IndentedJSON(http.StatusInternalServerError, gin.H{
			"message": "type assertion failed",
		})
	}

	inscripcionList := inscripcionesClient.GetInscripcionesByUserId(user.Id_usuario)

	if len(inscripcionList) == 0 {
		c.IndentedJSON(http.StatusOK, gin.H{
			"message": "No te inscribiste en ningun curso",
			"user":    user.Id_usuario,
		})
	} else {
		for _, i := range inscripcionList {
			cursosList = append(cursosList, cursos.GetCursoById(i.ID_Curso))
		}
	}
	c.IndentedJSON(http.StatusOK, cursosList)
}

func GetCursos(c *gin.Context) {
	c.IndentedJSON(http.StatusOK, cursos.GetAllCursos())
}

func CreateCurso(c *gin.Context) {
	var request model.Curso
	c.BindJSON(&request)
	result := cursos.CreateCurso(request)
	c.IndentedJSON(result, result)
}
