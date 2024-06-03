package users_test

import (
	s "backend/domain/users"
	"backend/services/users"
	"testing"
)

func TestSignIn(t *testing.T) {
	loginRequest := s.LoginRequest{Username: "johndoe@example.com", Password: "pass123John"}
	loginResponse := users.Login(loginRequest)
	if loginResponse.Token != "200" {
		t.Errorf("Result was incorrect, got: %s, want %s.", loginResponse.Token, "200")
	}
}

// func TestSignIn(t *testing.T) {

// 	loginRequest := s.LoginRequest{Username: "john_doe", Password: "pass123John"}
// 	loginResponse := users.Login(loginRequest)
// 	if loginResponse.Token != "200" {
// 		t.Errorf("Result was incorrect, got: %s, want %s.", loginResponse.Token, "200")
// 	}

// 	loginRequest = s.LoginRequest{Username: "john_doe", Password: "123456"}
// 	loginResponse = users.Login(loginRequest)
// 	if loginResponse.Token != "401" {
// 		t.Errorf("Result was incorrect, got: %s, want %s.", loginResponse.Token, "401")
// 	}

// 	loginRequest = s.LoginRequest{Username: "jo_do", Password: "jaslkdf"}
// 	loginResponse = users.Login(loginRequest)
// 	if loginResponse.Token != "404" {
// 		t.Errorf("Result was incorrect, got: %s, want %s.", loginResponse.Token, "404")
// 	}
// }
