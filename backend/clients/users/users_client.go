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

// TODO: Get by email
func GetUserByMail(mail string) {

}
