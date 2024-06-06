package router

import (
	"backend/controller/cursos"
	"backend/controller/middleware"
	"backend/controller/users"

	"github.com/gin-gonic/gin"
)

func MapUrls(engine *gin.Engine) {

	engine.POST("/users/login", users.SignIn)
	engine.POST("/users/signup", users.SignUp)
	engine.POST("/cursos/create", cursos.CreateCurso)
	engine.GET("/cursos/user", middleware.RequireAuth, cursos.GetCursosInscriptos)
	engine.GET("/cursos", cursos.GetCursos)
	engine.GET("/users/validate", middleware.RequireAuth, users.Validate)
}

// /cursos/create ; fecha tiene que enviarse en un string en este formato:
// 0001-01-01T00:00:00Z
// año-mes-diaThoraZ
