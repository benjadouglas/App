package users

import (
	"backend/domain/users"
	"log"
)

var usersArr = []users.LoginRequest{
	{Username: "benja", Password: "passw"},
}

func Login(request users.LoginRequest) users.LoginResponse {
	for _, a := range usersArr {
		log.Printf("expected: %s, got: %s", a.Username, request.Username)
		if a.Username == request.Username {
			if a.Password == request.Password {
				return users.LoginResponse{Token: "200"}
			} else {
				return users.LoginResponse{Token: "401"}
			}
		}
	}
	return users.LoginResponse{Token: "404"}
}

// func SignUp(request users.SignUpRequest) int {
// }
