package inscripciones

import (
	"backend/model"

	log "github.com/sirupsen/logrus"
	"gorm.io/gorm"
)

var Db *gorm.DB

func CrearInscripcion(inscripcion model.Inscripcion) error {
	err := Db.Create(&inscripcion).Error
	if err != nil {
		log.Error("Error creating inscription:", err)
		return err
	}
	log.Info("Inscription created successfully:", inscripcion)
	return nil
}

func GetInscripcionesByUserId(userId int) []model.Inscripcion {
	var inscripciones []model.Inscripcion
	Db.Where("id_usuario = ?", userId).Preload("Curso").Find(&inscripciones)
	log.Debug("Inscripciones: ", inscripciones)
	return inscripciones
}

func GetInscripcionesByCursoId(courseId int) []model.Inscripcion {
	var inscripciones []model.Inscripcion
	Db.Where("id_curso = ?", courseId).Preload("Usuario").Find(&inscripciones)
	log.Debug("Inscripciones: ", inscripciones)
	return inscripciones
}

func DeleteInscripcionById(inscriptionId int) error {
	err := Db.Delete(&model.Inscripcion{ID_Inscripcion: inscriptionId}).Error
	if err != nil {
		log.Error("Error deleting inscription:", err)
		return err
	}
	log.Info("Inscription deleted successfully:", inscriptionId)
	return nil
}
