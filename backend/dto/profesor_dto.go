package main

import "time"

type Profesor struct {
	ID                int
	NombreCompleto    string
	CorreoElectronico string
	Contrasena        string
	FechaRegistro     time.Time
}
