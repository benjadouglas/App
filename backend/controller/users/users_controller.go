package users

import (
	usersDomain "backend/domain/users"
	usersService "backend/services/users"

	"github.com/gin-gonic/gin"
)

func SignIn(c *gin.Context) {
	var loginRequest usersDomain.LoginRequest
	c.BindJSON(&loginRequest)
	response := usersService.Login(loginRequest)
	c.IndentedJSON(response.Code, response)
}

func SignUp(c *gin.Context) {
	var signupRequest usersDomain.SignUpRequest
	c.BindJSON(&signupRequest)
	response := usersService.SignUp(signupRequest)
	c.IndentedJSON(response, response)
}
