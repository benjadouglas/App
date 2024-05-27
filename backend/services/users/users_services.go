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
		return users.LoginResponse{Token: "404"} // User not found
	} else if user.Contrasena != request.Password {
		return users.LoginResponse{Token: "401"} // Wrong password
	} else {
		return users.LoginResponse{Token: "200"} // OK
	}
}
