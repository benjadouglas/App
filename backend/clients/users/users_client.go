package users

import (
	"backend/model"

	"gorm.io/gorm"
)

var Db *gorm.DB

func GetUserById(id int) model.Usuario {
	var user model.Usuario
	Db.Where("id_usuario = ?", id).First(&user)
	// log.Debug("User: ", user) // Decomment this line to see info about the request
	return user
}

func GetUserByUsername(name string) model.Usuario {
	var user model.Usuario
	Db.Where("nombre_usuario = ?", name).First(&user)
	// log.Debug("User: ", user) // Decomment this line to see info about the request
	return user
}

func GetUserByMail(mail string) model.Usuario {
	var user model.Usuario
	Db.Where("correo_electronico = ?", mail).First(&user)
	// log.Debug("User: ", user) // Decomment this line to see info about the request
	return user
}
