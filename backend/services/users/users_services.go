package users

import (
	client "backend/clients/users"
	"backend/db"
	"backend/domain/users"
)

func Login(request users.LoginRequest) users.LoginResponse {
	db.StartDbEngine()
	user := client.GetUserByUsername(request.Username)
	if user.Nombre_Usuario == "" {
		return users.LoginResponse{Token: "404 Not Found"}
	} else if user.Contrasena != request.Password {
		return users.LoginResponse{Token: "401 Not Authorized"}
	} else {
		return users.LoginResponse{Token: "200 OK"}
	}
}
