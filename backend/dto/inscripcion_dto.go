package main

import "time"

type Inscripcion struct {
	ID               int
	IDUsuario        int
	IDCurso          int
	FechaInscripcion time.Time
}
