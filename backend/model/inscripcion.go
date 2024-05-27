package model

import "time"

type Inscripcion struct {
	ID_Inscripcion   int
	ID_Usuario       int // Usuario de tipo usuario?
	ID_Curso         int
	FechaInscripcion time.Time
}
