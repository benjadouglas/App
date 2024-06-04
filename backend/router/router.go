package router

import (
	"backend/controller/middleware"
	"backend/controller/users"

	"github.com/gin-gonic/gin"
)

func MapUrls(engine *gin.Engine) {
	engine.POST("/users/login", users.SignIn)
	engine.POST("/users/signup", users.SignUp)
	engine.GET("/users/validate", middleware.RequireAuth, users.Validate)
}
