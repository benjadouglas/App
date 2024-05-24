package main

import "time"

type Usuario struct {
	ID                int
	NombreCompleto    string
	CorreoElectronico string
	Contrasena        string
	FechaRegistro     time.Time
}
