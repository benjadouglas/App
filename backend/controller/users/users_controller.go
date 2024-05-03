package users

import (
	"backend/domain/users"
	usersService "backend/services/users"

	"github.com/gin-gonic/gin"
)

func Login(context *gin.Context) {
	var loginRequest users.LoginRequest
	context.BindJSON(&loginRequest)
	usersService.Login(loginRequest)
}
