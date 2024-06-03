package users

import (
	client "backend/clients/users"
	"backend/db"
	"backend/domain/users"
	"backend/model"
	"net/http"
	"os"
	"time"

	"golang.org/x/crypto/bcrypt"

	"github.com/golang-jwt/jwt"
)

func Login(request users.LoginRequest) users.LoginResponse {
	db.StartDbEngine()
	someUser := client.GetUserByUsername(request.Username)
	if someUser.Nombre_Usuario == "" {
		return users.LoginResponse{Code: 404} // User not found
	} else if bcrypt.CompareHashAndPassword([]byte(someUser.Contrasena), []byte(request.Password)) != nil {
		return users.LoginResponse{Code: 401} // Wrong password
	} else if bcrypt.CompareHashAndPassword([]byte(someUser.Contrasena), []byte(request.Password)) == nil {
		token := jwt.NewWithClaims(jwt.SigningMethodHS256, jwt.MapClaims{
			"sub": someUser.Id_usuario,
			"nbf": time.Now().Add(time.Hour * 24 * 2).Unix(),
		})

		tokenString, err := token.SignedString([]byte(os.Getenv("SECRET")))
		if err != nil {
			return users.LoginResponse{Code: 400}
		}
		return users.LoginResponse{Code: 200, Token: tokenString} // OK
	}
	return users.LoginResponse{Code: 400}
}

func SignUp(request users.SignUpRequest) int {
	db.StartDbEngine()
	hashPasw, err := bcrypt.GenerateFromPassword([]byte(request.Password), 10)

	if err != nil {
		return http.StatusBadRequest
	}

	result := client.CreateUser(&model.Usuario{
		Nombre_Usuario:     request.Username,
		Correo_Electronico: request.Mail,
		Contrasena:         string(hashPasw),
		Fecha_Registro:     time.Now(),
		Is_Admin:           false,
	})
	if result == nil {
		return 200
	}
	return 400
}
