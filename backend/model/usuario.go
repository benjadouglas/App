package model

import "time"

// En vez de tener dos tablas distintas, uno para un usuario y otro para
// admin tener una sola tabla con un campo IsAdmin

type Usuario struct {
	Id_usuario         int    `gorm:"type:int;primaryKey;not null"`
	Nombre_Completo    string `gorm:"type:varchar(250);not null"`
	Correo_Electronico string `gorm:"type:varchar(250);not null"`
	Contrasena         string `gorm:"type:varchar(250);not null"`
	Fecha_Registro     time.Time
	Is_Admin           bool
}
