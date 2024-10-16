package cursos

import (
	"backend/clients/cursos"
	inscripcionesClient "backend/clients/inscripciones"
	"backend/model"
	"net/http"
	"strconv"

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

//	func GetCursoById(c *gin.Context) {
//		id, err := strconv.Atoi(c.Param("id"))
//		if err != nil {
//			c.IndentedJSON(http.StatusBadRequest, gin.H{})
//		}
//		c.IndentedJSON(http.StatusOK, cursos.GetCursoById(id))
//	}

func GetCursoById(c *gin.Context) {
	id, err := strconv.Atoi(c.Param("id"))
	if err != nil {
		c.IndentedJSON(http.StatusBadRequest, gin.H{})
		return
	}
	curso := cursos.GetCursoById(id)
	if curso.ID_Curso == 0 {
		c.IndentedJSON(http.StatusNotFound, gin.H{"message": "Curso no encontrado"})
		return
	}
	c.IndentedJSON(http.StatusOK, curso)
}

func CreateCurso(c *gin.Context) {
	var request model.Curso
	c.BindJSON(&request)
	result := cursos.CreateCurso(request)
	c.IndentedJSON(result, result)
}

func DeleteCurso(c *gin.Context) {
	id, err := strconv.Atoi(c.Param("id"))
	if err != nil {
		c.IndentedJSON(http.StatusBadRequest, gin.H{})
	}
	cursos.DeleteCursoById(id)
	c.IndentedJSON(http.StatusOK, gin.H{})
}

func InscribirCurso(c *gin.Context) {
	user, err := c.Get("user")
	var request model.Inscripciones
	c.BindJSON(&request)
	if err != true {
		c.IndentedJSON(http.StatusUnauthorized, gin.H{
			"Status": "Not authorized",
		})
	}
	userData, ok := user.(model.Usuario)
	if ok != true {
		c.IndentedJSON(http.StatusInternalServerError, gin.H{
			"message": "type assertion failed",
		})
	}
	inscripcionRequest := model.Inscripciones{
		ID_Usuario: userData.Id_usuario,
		ID_Curso:   request.ID_Curso,
	}
	response := inscripcionesClient.CrearInscripcion(inscripcionRequest)
	if response != nil {
		c.IndentedJSON(http.StatusInternalServerError, gin.H{})
	}
	c.IndentedJSON(http.StatusOK, gin.H{
		"message": "success",
	})
}
