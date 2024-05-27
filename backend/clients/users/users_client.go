package users

import (
	"backend/model"

	log "github.com/sirupsen/logrus"
	"gorm.io/gorm"
)

var Db *gorm.DB

func GetUserById(id int) model.Usuario {
	var user model.Usuario
	Db.Where("id_usuario = ?", id).First(&user)
	log.Debug("User: ", user)
	return user
}

func GetUserByUsername(name string) model.Usuario { // john_doe
	var user model.Usuario
	err := Db.Where("nombre_usuario = ?", name).First(&user)
	if err != nil {
		return model.Usuario{}
	}
	log.Debug("User: ", user)
	return user
}

func GetUserByMail(mail string) model.Usuario {
	var user model.Usuario
	Db.Where("correo_electronico = ?", mail).First(&user)
	log.Debug("User: ", user)
	return user
}
