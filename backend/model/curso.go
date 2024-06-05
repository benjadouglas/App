package model

import "time"

// Acordarse que los nombres de las variables tienen que coincidir con el nombre de las tablas de la base de datos
type Curso struct {
	ID_Curso     int       `gorm:"type:int;primaryKey;not null" json:"id_curso"`
	Nombre_curso string    `gorm:"type:varchar(250);not null" json:"nombre_curso"`
	Descripcion  string    `gorm:"type:text" json:"descripcion"`
	Precio       float64   `gorm:"decimal(10,2);not null" json:"precio"`
	Fecha_Inicio time.Time `gorm:"type:date" json:"fecha_inicio"`
	Fecha_Fin    time.Time `gorm:"type:date" json:"fecha_fin"`
}
