package comentarios

import (
	"backend/clients/comentarios"
	"backend/domain/comment"
	"backend/model"
	"net/http"
	"strconv"

	"github.com/gin-gonic/gin"
)

// type Id struct {
// 	Id int `json:"id"`
// }

func GetCursosComment(c *gin.Context) {
	id, err := strconv.Atoi(c.Param("id"))
	if err != nil {
		c.IndentedJSON(http.StatusBadRequest, gin.H{})
		return
	}
	comments := comentarios.GetCommentsCurso(id, c)
	c.IndentedJSON(http.StatusOK, comments)
}

func CreateComment(c *gin.Context) {
	var comment comment.Comment_request
	somuser, exists := c.Get("user")
	if !exists {
		c.IndentedJSON(http.StatusUnauthorized, gin.H{
			"message": "Not authorized",
		})
		// c.AbortWithError(http.StatusUnauthorized, http.ErrAbortHandler)
	}
	user, ok := somuser.(model.Usuario)
	if !ok {
		c.IndentedJSON(http.StatusUnauthorized, gin.H{
			"message": "Type assertion failed",
		})
	}
	c.BindJSON(&comment)
	req := model.Comentarios{
		Id_curso:   comment.Id_curso,
		Comentario: comment.Comentario,
		Id_usuario: user.Id_usuario,
	}
	result := comentarios.CreateComment(req)
	c.IndentedJSON(result, result)
}
