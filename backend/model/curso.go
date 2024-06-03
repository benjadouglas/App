package model

import "time"

// Acordarse que los nombres de las variables tienen que coincidir con el nombre de las tablas de la base de datos
type Curso struct {
	ID_Curso     int       `gorm:"primaryKey"`
	Nombre_curso string    `gorm:"type:varchar(250);not null"`
	Descripcion  string    `gorm:"type:text"`
	Precio       float64   `gorm:"decimal(10,2);not null"`
	Fecha_Inicio time.Time `gorm:"type:date"`
	Fecha_Fin    time.Time `gorm:"type:date"`
}
