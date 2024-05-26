package model

import "time"

type Curso struct {
	ID_Curso        int     `gorm:"primaryKey"`
	Nombre_completo string  `gorm:"type:varchar(250);not null"`
	Descripcion     string  `gorm:"type:varchar(350);not null"`
	Precio          float64 `gorm:"not null"`
	Fecha_Inicio    time.Time
	Fecha_Fin       time.Time
	Imagen_Curso    []byte
}
