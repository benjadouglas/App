package main

import (
	"backend/db"
	"backend/router"
	"time"

	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
)

func main() {
	db.StartDbEngine()

	engine := gin.New()
	config := cors.Config{
		AllowOrigins:     []string{"http://localhost:3000"},
		AllowMethods:     []string{"GET", "POST", "PUT", "DELETE"},
		AllowHeaders:     []string{"Origin", "Content-Type", "Accept"},
		ExposeHeaders:    []string{"Content-Length"},
		AllowCredentials: true,
		MaxAge:           10 * 24 * time.Hour,
	}
	engine.Use(cors.New(config))
	router.MapUrls(engine)
	engine.Run(":8080")
}
