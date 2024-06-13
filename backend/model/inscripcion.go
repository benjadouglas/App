package model

import (
	"time"
)

type Inscripciones struct {
	ID_Inscripcion   int       `gorm:"type:int;primaryKey;not null"`
	ID_Usuario       int       `gorm:"type:int;not null"`
	ID_Curso         int       `gorm:"type:int;not null"`
	FechaInscripcion time.Time `gorm:"type:date"`
	//Curso            Curso     `gorm:"foreignKey:IDCurso;references:ID"`
	//Usuario          Usuario   `gorm:"foreignKey:IDUsuario;references:ID"`
}
