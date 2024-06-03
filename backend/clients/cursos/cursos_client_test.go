package cursos_test

import (
	"backend/clients/cursos"
	"backend/db"
	"testing"
)

func TestGetCursoById(t *testing.T) {
	db.StartDbEngine()
	courseId := 1
	curso := cursos.GetCursoById(courseId)
	if curso.ID_Curso != courseId {
		t.Errorf("GetCursoById returned incorrect ID. Expected: %v, Got: %v", courseId, curso.ID_Curso)
	}
}

func TestGetCursoByName(t *testing.T) {
	courseName := "Introducción a la programación"
	curso := cursos.GetCursoByName(courseName)
	if curso.Nombre_curso != courseName {
		t.Errorf("GetCursoByName returned incorrect name. Expected: %v, Got: %v", courseName, curso.Nombre_curso)
	}
}
