package inscripciones_test

import (
	"backend/clients/inscripciones"
	"backend/db"
	"backend/model"
	"testing"
)

func TestCrearInscripcion(t *testing.T) {
	db.StartDbEngine()
	userId := 1
	courseId := 2

	inscripcion := model.Inscripcion{Id_Usuario: userId, ID_Curso: courseId}

	err := inscripciones.CrearInscripcion(inscripcion)

	if err != nil {
		t.Errorf("CrearInscripcion failed: %v", err)
	}
}

func TestGetInscripcionesByUserId(t *testing.T) {
	userId := 1

	inscripcionesT := inscripciones.GetInscripcionesByUserId(userId)

	if len(inscripcionesT) == 0 {
		t.Errorf("GetInscripcionesByUserId did not return any inscriptions for user ID: %v", userId)
	}
}

func TestGetInscripcionesByCursoId(t *testing.T) {
	courseId := 2

	inscripcionesT := inscripciones.GetInscripcionesByCursoId(courseId)

	if len(inscripcionesT) == 0 {
		t.Errorf("GetInscripcionesByCursoId did not return any inscriptions for course ID: %v", courseId)
	}
}

func TestDeleteInscripcionById(t *testing.T) {
	inscriptionId := 3

	err := inscripciones.DeleteInscripcionById(inscriptionId)

	if err != nil {
		t.Errorf("DeleteInscripcionById failed: %v", err)
	}
}
