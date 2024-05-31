package cursos_test

import (
	"backend/clients/cursos"
	"testing"
)

func TestGetCursoById(t *testing.T) {
	courseId := 1

	curso := cursos.GetCursoById(courseId)

	if curso.ID_Curso != courseId {
		t.Errorf("GetCursoById returned incorrect ID. Expected: %v, Got: %v", courseId, curso.ID_Curso)
	}
}

func TestGetCursoByName(t *testing.T) {
	courseName := "Introduction to Programming"

	curso := cursos.GetCursoByName(courseName)

	if curso.Nombre_completo != courseName {
		t.Errorf("GetCursoByName returned incorrect name. Expected: %v, Got: %v", courseName, curso.Nombre_completo)
	}
}

func TestGetCursoByCategory(t *testing.T) {
	category := "Development"

	courses := cursos.GetCursoByCategory(category)

	if len(courses) == 0 {
		t.Errorf("GetCursoByCategory did not return any courses for category: %v", category)
	}
}

func TestGetCursoByAdmin(t *testing.T) {
	adminID := 1

	courses := cursos.GetCursoByAdmin(adminID)

	if len(courses) == 0 {
		t.Errorf("GetCursoByAdmin did not return any courses for admin ID: %v", adminID)
	}
}
