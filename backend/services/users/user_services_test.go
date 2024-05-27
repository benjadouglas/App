package users_test

import (
	s "backend/domain/users"
	"backend/services/users"
	"testing"
)

func TestSignIn(t *testing.T) {
	loginRequest := users.Login(s.LoginRequest{Username: "jhon_asdffasdfs", Password: "123456"})
	if loginRequest.Token != "404 Not Found" {
		t.Errorf("Result was incorrect, got: %s, want %s.", loginRequest.Token, "404 Not Found")
	}

	loginRequest = users.Login(s.LoginRequest{Username: "jhon_doe", Password: "123456"})
	if loginRequest.Token != "401 Not Authorized" {
		t.Errorf("Result was incorrect, got: %s, want %s.", loginRequest.Token, "401 Not Authorized")
	}

	loginRequest = users.Login(s.LoginRequest{Username: "jhon_doe", Password: "pass123John"})
	if loginRequest.Token != "200 OK" {
		t.Errorf("Result was incorrect, got: %s, want %s.", loginRequest.Token, "200 OK")
	}
}
