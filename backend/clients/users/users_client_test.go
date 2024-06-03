package users_test

import (
	"backend/clients/users"
	"backend/db"
	"testing"
)

func TestGetUserById(t *testing.T) {
	db.StartDbEngine()
	user := users.GetUserById(1)
	if user.Nombre_Usuario != "john_doe" {
		t.Errorf("Result was incorrect, got: %s, want %s.", user.Nombre_Usuario, "john_doe")
	}
}

func TestGetUserByUsername(t *testing.T) {
	db.StartDbEngine()
	user := users.GetUserByUsername("john_doe")
	if user.Nombre_Usuario != "john_doe" {
		t.Errorf("Result was incorrect, got: %s, want %s.", user.Nombre_Usuario, "john_doe")
	}
}

func TestGetUserByMail(t *testing.T) {
	db.StartDbEngine()
	user := users.GetUserByMail("johndoe@example.com")
	if user.Nombre_Usuario != "john_doe" {
		t.Errorf("Result was incorrect, got: %s, want %s.", user.Nombre_Usuario, "john_doe")
	}
}
