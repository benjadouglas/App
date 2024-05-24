package main

import (
	"backend/passw"
	"backend/router"

	"github.com/gin-gonic/gin"

	"github.com/jinzhu/gorm"
	_ "github.com/jinzhu/gorm/dialects/mysql"
)

var (
	db  *gorm.DB
	err error
)

func main() { //Unica funcion es inicializar

	// DB Connections Paramters
	DBName := "bd-arqui"            //Nombre de la base de datos local de ustedes
	DBUser := passw.Get("User")     //usuario de la base de datos, habitualmente root
	DBPass := passw.Get("Password") //password del root en la instalacion
	DBHost := "127.0.0.1"           //host de la base de datos. hbitualmente 127.0.0.1
	// ------------------------

	db, err = gorm.Open("mysql", DBUser+":"+DBPass+"@tcp("+DBHost+":3306)/"+DBName+"?charset=utf8&parseTime=True")

	engine := gin.New()
	router.MapUrls(engine)
	engine.Run(":8008")
}
