package users

import (
	"backend/domain/users"
	usersService "backend/services/users"
	"log"
	"strconv"
	"github.com/gin-gonic/gin"
)

func Login(c *gin.Context) {
	var loginRequest users.LoginRequest
	c.BindJSON(&loginRequest)
	log.Println(loginRequest)
	response := usersService.Login(loginRequest)
	i, err := strconv.Atoi(response.Token)
	if err != nil {
		panic(err)
	}
	c.IndentedJSON(i, response)
}
