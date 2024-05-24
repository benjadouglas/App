package db

import (
	"github.com/jinzhu/gorm"
	_ "github.com/jinzhu/gorm/dialects/mysql"
)

var (
	db  *gorm.DB
	err error
)

func init() {
	// DB Connections Paramters
	DBName := "users"     //Nombre de la base de datos local de ustedes
	DBUser := "root"      //usuario de la base de datos, habitualmente root
	DBPass := "root"      //password del root en la instalacion
	DBHost := "127.0.0.1" //host de la base de datos. hbitualmente 127.0.0.1
	// ------------------------

	db, err = gorm.Open("mysql", DBUser+":"+DBPass+"@tcp("+DBHost+":3306)/"+DBName+"?charset=utf8&parseTime=True")

}
