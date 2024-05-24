package users

import (
	usersDomain "backend/domain/users"
	usersService "backend/services/users"
	"log"
	"strconv"

	"github.com/gin-gonic/gin"
)

func SignIn(c *gin.Context) {
	var loginRequest usersDomain.LoginRequest
	c.BindJSON(&loginRequest)
	log.Println(loginRequest)
	response := usersService.Login(loginRequest)
	i, err := strconv.Atoi(response.Token)
	if err != nil {
		panic(err)
	}
	c.IndentedJSON(i, response)
}

// func SignUp(c *gin.Context) {
// 	var SignUpRequest usersDomain.SignUpRequest
// 	c.BindJSON(&SignUpRequest)
// 	// Hash the password (encrypt)
// 	// hash, err := bcrypt.GenerateFromPassword([]byte(SignUpRequest.Password), 10)
// 	// if err != nil {
// 	// 	c.JSON(http.StatusBadRequest, gin.H{
// 	// 		"error": "Failed to hash password",
// 	// 	})
// 	// }
// 	// response := usersService.SignUp(SignUpRequest)
// 	c.IndentedJSON(response, response)
// }
