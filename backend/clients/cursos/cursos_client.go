package cursos

import (
	"backend/model"
	"net/http"

	log "github.com/sirupsen/logrus"
	"gorm.io/gorm"
)

var Db *gorm.DB

func GetCursoById(id int) model.Curso {
	var curso model.Curso
	Db.Where("id_curso = ?", id).First(&curso)
	log.Debug("Course: ", curso)
	return curso
}

func GetAllCursos() []model.Curso {
	var cursos []model.Curso
	Db.Find(&cursos)
	return cursos
}

func CreateCurso(request model.Curso) int {
	result := Db.Create(&request)
	if result.Error != nil {
		return http.StatusBadRequest
	}
	return 200
}

func GetCursoByName(name string) model.Curso { // Introduction to Programming
	var curso model.Curso
	Db.Where("nombre_curso = ?", name).First(&curso)
	// if err != nil {
	// 	return model.Curso{}
	// }
	log.Debug("Course: ", curso)
	return curso
}
