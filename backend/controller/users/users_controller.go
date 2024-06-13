package users

import (
	usersDomain "backend/domain/users"
	"backend/model"
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
	somuser, exists := c.Get("user")
	if exists == false {
		c.IndentedJSON(http.StatusUnauthorized, gin.H{
			"message": "Not authorized",
		})
	}
	c.IndentedJSON(http.StatusOK, gin.H{
		"message": "Logged in succesfully",
		"id":      somuser.(model.Usuario).Id_usuario,
	})
}
