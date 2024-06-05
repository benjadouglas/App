package users_test

import (
	"backend/clients/users"
	"backend/db"
	domain "backend/domain/users"
	"log"
	"os"
	"testing"
)

func TestAso(t *testing.T) {
	res := os.Getenv("SECRET")
	if res != "asdfvio314iasdfnv32" {
		t.Errorf("Result was incorrect, got: %s, want %s.", res, "asdfvio314iasdfnv32")
	}
}

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

// Correr este test una sola vez porque despues de la primera vez, el usuario ya existe en la base de datos
// Si queres correrlo de nuevo, tenes que cambiar el nombre de usuario

func TestCreateUser(t *testing.T) {
	db.StartDbEngine()
	request := domain.SignUpRequest{
		Username: "example",
		Mail:     "example@gmail.com",
		Password: "somepassword",
	}
	users.CreateUser(request)
	userData := users.GetUserByUsername("example")
	if userData.Nombre_Usuario != "example" {
		log.Println(userData.Contrasena)
		t.Errorf("Result was incorrect, got: %s, want %s.", userData.Nombre_Usuario, "example")
	}
}
