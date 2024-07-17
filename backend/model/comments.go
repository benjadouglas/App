package model

type Comentarios struct {
	Id_comentario int    `gorm:"type:int;primaryKey;autoIncrement;not null"`
	Id_usuario    int    `gorm:"type:int;not null"`
	Id_curso      int    `gorm:"type:int;not null"`
	Comentario    string `gorm:"type:text;not null"`
}
