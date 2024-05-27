package users_test

import (
	s "backend/domain/users"
	"backend/services/users"
	"testing"
)

func TestSignIn(t *testing.T) {

	loginRequest := s.LoginRequest{Username: "john_doe", Password: "pass123John"}
	loginResponse := users.Login(loginRequest)
	if loginResponse.Token != "200 OK" {
		t.Errorf("Result was incorrect, got: %s, want %s.", loginResponse.Token, "200 OK")
	}

	loginRequest = s.LoginRequest{Username: "jhon_doe", Password: "123456"}
	loginResponse = users.Login(loginRequest)
	if loginResponse.Token != "401 Not Authorized" {
		t.Errorf("Result was incorrect, got: %s, want %s.", loginResponse.Token, "401 Not Authorized")
	}

	// loginRequest = s.LoginRequest{Username: "jhon_doe", Password: "pass123John"}
	// loginResponse = users.Login(loginRequest)
	// if loginResponse.Token != "404 Not Found" {
	// 	t.Errorf("Result was incorrect, got: %s, want %s.", loginResponse.Token, "404 Not Found")
	// }
}
