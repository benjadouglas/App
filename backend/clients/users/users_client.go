package users

import (
	usersDomain "backend/domain/users"
	"backend/model"
	"time"

	log "github.com/sirupsen/logrus"
	"golang.org/x/crypto/bcrypt"
	"gorm.io/gorm"
)

var Db *gorm.DB

func GetUserById(id int) model.Usuario {
	var user model.Usuario
	if result := Db.Where("id_usuario = ?", id).First(&user); result.Error != nil {
		log.Debug("User: ", user)
		return model.Usuario{}
	}
	return user
}

func GetUserByUsername(name string) model.Usuario {
	var user model.Usuario
	if result := Db.Where("nombre_usuario = ?", name).First(&user); result.Error != nil {
		log.Debug("User: ", user)
		return model.Usuario{}
	}
	return user
}

func GetUserByMail(mail string) model.Usuario {
	var user model.Usuario
	result := Db.Where("correo_electronico = ?", mail).First(&user)
	if result.Error != nil {
		log.Debug("User: ", user)
		return model.Usuario{}
	}
	return user
}

func CreateUser(data usersDomain.SignUpRequest) int {
	hashPasw, err := bcrypt.GenerateFromPassword([]byte(data.Password), 10)
	if err != nil {
		return 400
	}
	userM := model.Usuario{
		Nombre_Usuario:     data.Username,
		Correo_Electronico: data.Mail,
		Contrasena:         string(hashPasw),
		Fecha_Registro:     time.Now(),
		Is_Admin:           data.IsAdmin,
	}
	result := Db.Create(&userM)
	if result.Error != nil {
		return 400
	}
	return 200
}
