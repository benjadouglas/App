package main

import "time"

type Curso struct {
	ID          int
	Nombre      string
	Descripcion string
	Precio      float64
	FechaInicio time.Time
	FechaFin    time.Time
	ImagenCurso []byte
}
