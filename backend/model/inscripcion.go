package model

import "time"

type Inscripcion struct {
	ID_Inscripcion   int       `gorm:"type:int;primaryKey;not null"`
	Id_Usuario       int       `gorm:"type:varchar(250);not null"`
	ID_Curso         int       `gorm:"type:varchar(250);not null"`
	FechaInscripcion time.Time `gorm:"type:date"`
}
