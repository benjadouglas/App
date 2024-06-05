package users

import (
	client "backend/clients/users"
	"backend/domain/users"
	"time"

	"golang.org/x/crypto/bcrypt"

	"github.com/golang-jwt/jwt"
)

func Login(request users.LoginRequest) users.LoginResponse {
	someUser := client.GetUserByUsername(request.Username)

	if someUser.Nombre_Usuario == "" {
		return users.LoginResponse{Code: 404} // User not found
	} else if bcrypt.CompareHashAndPassword([]byte(someUser.Contrasena), []byte(request.Password)) != nil {
		return users.LoginResponse{Code: 401} // Wrong password
	} else if bcrypt.CompareHashAndPassword([]byte(someUser.Contrasena), []byte(request.Password)) == nil {
		token := jwt.NewWithClaims(jwt.SigningMethodHS256, jwt.MapClaims{
			"sub": someUser.Id_usuario,
			"exp": time.Now().Add(time.Hour * 24 * 2).Unix(),
		})

		tokenString, err := token.SignedString([]byte("asdfvio314iasdfnv32"))
		if err != nil {
			return users.LoginResponse{Code: 400}
		}
		return users.LoginResponse{Code: 200, Token: tokenString}
	}
	return users.LoginResponse{Code: 400}
}

func SignUp(request users.SignUpRequest) int {
	return client.CreateUser(request)
}
