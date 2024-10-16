package db

import (
	comentariosClient "backend/clients/comentarios"
	cursosClient "backend/clients/cursos"
	inscripcionClient "backend/clients/inscripciones"
	usersClient "backend/clients/users"
	"backend/model"

	log "github.com/sirupsen/logrus"
	"gorm.io/driver/mysql"
	"gorm.io/gorm"
)

var (
	Db  *gorm.DB
	err error
)

func init() {
	// DB Connections Paramters
	DBName := "db-arqui"
	DBUser := "root"
	DBPass := "root"
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
	comentariosClient.Db = Db
}

func StartDbEngine() {
	Db.AutoMigrate(&model.Usuario{})
	Db.AutoMigrate(&model.Inscripciones{})
	Db.AutoMigrate(&model.Curso{})
	Db.AutoMigrate(&model.Comentarios{})
}
