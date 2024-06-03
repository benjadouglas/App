package users

import (
	client "backend/clients/users"
	"backend/db"
	"backend/domain/users"
	"os"
	"time"

	"github.com/golang-jwt/jwt"
)

func Login(request users.LoginRequest) users.LoginResponse {
	db.StartDbEngine()
	user := client.GetUserByMail(request.Username)
	if user.Nombre_Usuario == "" {
		return users.LoginResponse{Code: 404} // User not found
	} else if user.Contrasena != request.Password {
		return users.LoginResponse{Code: 401} // Wrong password
	} else {
		token := jwt.NewWithClaims(jwt.SigningMethodHS256, jwt.MapClaims{
			"sub": user.Id_usuario,
			"nbf": time.Now().Add(time.Hour * 24 * 2).Unix(),
		})

		tokenString, err := token.SignedString([]byte(os.Getenv("SECRET")))
		if err != nil {
			return users.LoginResponse{Code: 400}
		}
		return users.LoginResponse{Code: 200, Token: tokenString} // OK
	}
}
