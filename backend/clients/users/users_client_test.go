package users_test

import (
	"backend/clients/users"
	"backend/db"
	"testing"
)

func TestGetUserById(t *testing.T) {
	db.StartDbEngine()
	user := users.GetUserById(1)
	if user.Nombre_Completo != "John Doe" {
		t.Errorf("Result was incorrect, got: %s, want %s.", user.Nombre_Completo, "John Doe")
	}
}

func TestGetUserByUsername(t *testing.T) {
	db.StartDbEngine()
	user := users.GetUserByUsername("john_doe")
	if user.Nombre_Completo != "John Doe" {
		t.Errorf("Result was incorrect, got: %s, want %s.", user.Nombre_Completo, "John Doe")
	}
}

func TestGetUserByMail(t *testing.T) {
	db.StartDbEngine()
	user := users.GetUserByMail("johndoe@example.com")
	if user.Nombre_Completo != "John Doe" {
		t.Errorf("Result was incorrect, got: %s, want %s.", user.Nombre_Completo, "John Doe")
	}
}
