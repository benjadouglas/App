package middleware

import (
	userClient "backend/clients/users"
	"backend/model"
	"fmt"
	"log"
	"net/http"
	"time"

	"github.com/gin-gonic/gin"
	"github.com/golang-jwt/jwt"
)

func RequireAuth(c *gin.Context) {
	tokenString, err := c.Cookie("Authorization")
	if err != nil {
		c.AbortWithStatus(http.StatusUnauthorized)
	}

	token, err := jwt.Parse(tokenString, func(token *jwt.Token) (interface{}, error) {
		if _, ok := token.Method.(*jwt.SigningMethodHMAC); !ok {
			return nil, fmt.Errorf("Unexpected signing method: %v", token.Header["alg"])
		}
		return []byte("asdfvio314iasdfnv32"), nil
	})
	if err != nil {
		log.Println(err)
		c.AbortWithStatus(http.StatusUnauthorized)
	}

	if claims, ok := token.Claims.(jwt.MapClaims); ok && token.Valid {
		if float64(time.Now().Unix()) > claims["exp"].(float64) {
			c.AbortWithStatus(http.StatusUnauthorized)
		}
		user := userClient.GetUserById(int(claims["sub"].(float64)))
		if user.Id_usuario == 0 {
			c.AbortWithStatus(http.StatusUnauthorized)
		}
		c.Set("user", user)
		c.Next()
	} else {
		c.IndentedJSON(http.StatusBadRequest, http.StatusBadRequest)
	}
}

func IsAdmin(c *gin.Context) {
	somuser, exists := c.Get("user")
	if exists == false {
		c.IndentedJSON(http.StatusUnauthorized, gin.H{
			"message": "Not authorized",
		})
	}
	user, ok := somuser.(model.Usuario)
	if ok == false {
		c.IndentedJSON(http.StatusUnauthorized, gin.H{
			"message": "Not authorized",
		})
	}
	if user.Is_Admin == false {
		c.IndentedJSON(http.StatusUnauthorized, gin.H{
			"message": "Not authorized",
		})
	}

}
