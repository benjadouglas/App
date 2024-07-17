package comentarios

import (
	"backend/model"

	"github.com/gin-gonic/gin"
	"gorm.io/gorm"
)

var Db *gorm.DB

func GetCommentsCurso(id int, c *gin.Context) []model.Comentarios {
	var comments []model.Comentarios
	Db.Where("id_curso = ?", id).Find(&comments)
	for i, _ := range comments {
		println(comments[i].Comentario)
	}
	return comments
}

func CreateComment(comment model.Comentarios) int {
	Db.Create(&comment)
	return 200
}
