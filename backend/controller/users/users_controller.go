package users

import (
	usersDomain "backend/domain/users"
	usersService "backend/services/users"
	"net/http"

	"github.com/gin-gonic/gin"
)

func SignIn(c *gin.Context) {
	var loginRequest usersDomain.LoginRequest
	c.BindJSON(&loginRequest)
	response := usersService.Login(loginRequest)
	c.SetSameSite(http.SameSiteLaxMode)
	c.SetCookie("Authorization", response.Token, 3600*24*30, "", "localhost", false, true)
	c.IndentedJSON(response.Code, response.Code)
}

func SignUp(c *gin.Context) {
	var signupRequest usersDomain.SignUpRequest
	c.BindJSON(&signupRequest)
	response := usersService.SignUp(signupRequest)
	c.IndentedJSON(response, response)
}

func Validate(c *gin.Context) {
	c.IndentedJSON(http.StatusOK, gin.H{
		"message": "Logged in succesfully",
	})
}
