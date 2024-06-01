package cursos

import (
	"backend/model"

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

func GetCursoByName(name string) model.Curso { // Introduction to Programming
	var curso model.Curso
	Db.Where("nombre_curso = ?", name).First(&curso)
	// if err != nil {
	// 	return model.Curso{}
	// }
	log.Debug("Course: ", curso)
	return curso
}

func GetCursoByCategory(category string) []model.Curso {
	var cursos []model.Curso
	Db.Where("categoria = ?", category).Find(&cursos)
	log.Debug("Courses: ", cursos)
	return cursos
}

// func GetCursoByAdmin(adminId int) []model.Curso {
// 	var cursos []model.Curso
// 	Db.Where("id_admin = ? AND is_admin = true", adminId).Find(&cursos)
// 	log.Debug("Courses: ", cursos)
// 	return cursos
// }
