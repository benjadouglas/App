package main

import (
	"backend/db"
)

func main() { //Unica funcion es inicializar
	db.StartDbEngine()

	engine := gin.New()
	router.MapUrls(engine)
	engine.Run(":8008")
}
