package db

import (
	cursosClient "backend/clients/cursos"
	inscripcionClient "backend/clients/inscripcion"
	usersClient "backend/clients/users"
	"backend/model"
	"backend/passw"

	"gorm.io/driver/mysql"
	"gorm.io/gorm"

	log "github.com/sirupsen/logrus"
)

var (
	Db  *gorm.DB
	err error
)

func init() {
	// DB Connections Paramters
	DBName := "db-arqui"
	DBUser := passw.Get("User")
	DBPass := passw.Get("Password")
	DBHost := "127.0.0.1"
	dsn := DBUser + ":" + DBPass + "@tcp(" + DBHost + ":3306)/" + DBName + "?charset=utf8&parseTime=True"

	Db, err = gorm.Open(mysql.Open(dsn), &gorm.Config{})

	if err != nil {
		log.Info("Error connecting to database")
		log.Fatal(err)
	} else {
		log.Info("Connection stablished to database")
	}

	usersClient.Db = Db
	inscripcionClient.Db = Db
	cursosClient.Db = Db
}

func StartDbEngine() {
	Db.AutoMigrate(&model.Usuario{})
	Db.AutoMigrate(&model.Inscripcion{})
	Db.AutoMigrate(&model.Curso{})
}
