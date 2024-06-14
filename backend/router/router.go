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
	engine.POST("/cursos/create", middleware.RequireAuth, middleware.IsAdmin, cursos.CreateCurso)
	// Pasarle en le body del json el id del curso (ID_Curso), Poner el nombre de la variable en el json
	// como esta en el parentesis
	engine.POST("/cursos/inscribir", middleware.RequireAuth, cursos.InscribirCurso)
	engine.GET("/cursos/:id", cursos.GetCursoById)
	engine.GET("/cursos/user", middleware.RequireAuth, cursos.GetCursosInscriptos)
	engine.GET("/cursos", cursos.GetCursos)
	engine.GET("/users/validate", middleware.RequireAuth, users.Validate)
	engine.DELETE("/cursos/:id", cursos.DeleteCurso)
}
