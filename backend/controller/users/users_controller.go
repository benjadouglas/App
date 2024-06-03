package users

import (
	usersDomain "backend/domain/users"
	usersService "backend/services/users"
	"log"

	"github.com/gin-gonic/gin"
)

func SignIn(c *gin.Context) {
	var loginRequest usersDomain.LoginRequest
	c.BindJSON(&loginRequest)
	log.Println(loginRequest)
	response := usersService.Login(loginRequest)
	c.IndentedJSON(response.Code, response)
}

func SignUp(c *gin.Context) {
	var signupRequest usersDomain.SignUpRequest
	c.BindJSON(&signupRequest)
	log.Print(signupRequest)
}
