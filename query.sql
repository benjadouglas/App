-- Creación de la tabla usuarios
CREATE TABLE usuarios (
  id_usuario INT PRIMARY KEY AUTO_INCREMENT,
  nombre_completo VARCHAR(255) NOT NULL,
  nombre_usuario VARCHAR(255) NOT NULL,
  correo_electronico VARCHAR(255) NOT NULL UNIQUE KEY,
  contrasena VARCHAR(255) NOT NULL,
  fecha_registro DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  is_admin BOOL NOT NULL
);

-- Creación de la tabla cursos
CREATE TABLE cursos (
  id_curso INT PRIMARY KEY AUTO_INCREMENT,
  nombre_curso VARCHAR(255) NOT NULL,
  descripcion TEXT,
  precio DECIMAL(10,2) NOT NULL,
  fecha_inicio DATE NOT NULL,
  fecha_fin DATE NOT NULL
);

-- Creación de la tabla inscripciones
CREATE TABLE inscripciones (
  id_inscripcion INT PRIMARY KEY AUTO_INCREMENT,
  id_usuario INT NOT NULL,
  id_curso INT NOT NULL,
  fecha_inscripcion DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (id_usuario) REFERENCES usuarios(id_usuario),
  FOREIGN KEY (id_curso) REFERENCES cursos(id_curso)
);

-- Inserción de datos en la tabla usuarios
INSERT INTO usuarios (nombre_completo, nombre_usuario, correo_electronico, contrasena, is_admin) VALUES
('John Doe', 'john_doe', 'johndoe@example.com', 'pass123John', FALSE),
('Jane Smith', 'jane_smith', 'janesmith@example.com', 'smithJane456', FALSE),
('Alice Johnson', 'alice_johnson', 'alicejohnson@example.com', 'alice789Johnson', FALSE),
('Bob Brown', 'bob_brown', 'bobbrown@example.com', 'bobBrown321', FALSE),
('Charlie Davis', 'charlie_davis', 'charliedavis@example.com', 'charliePassword101', TRUE),
('Daisy Evans', 'daisy_evans', 'daisyevans@example.com', 'daisySecure202', FALSE),
('Ethan Hill', 'ethan_hill', 'ethanhill@example.com', 'ethanHill303', FALSE),
('Grace Ford', 'grace_ford', 'graceford@example.com', 'graceFord404', TRUE),
('Henry Grant', 'henry_grant', 'henrygrant@example.com', 'grantHenry505', FALSE),
('Isabella Howard', 'isabella_howard', 'isabellahoward@example.com', 'isabellaHoward606', FALSE)
;

-- Inserción de datos en la tabla cursos
INSERT INTO cursos (nombre_curso, descripcion, precio, fecha_inicio, fecha_fin) VALUES
('Introducción a la programación', 'Aprende los fundamentos de la codificación', 199.99, '2024-06-10', '2024-07-12'),
('Análisis de datos con Python', 'Domina la manipulación y visualización de datos', 249.99, '2024-07-15', '2024-08-16'),
('Desarrollo web con Go', 'Crea aplicaciones web interactivas', 299.99, '2024-08-19', '2024-09-20'),
('Fundamentos de Machine Learning', 'Explora conceptos básicos de Machine Learning', 349.99, '2024-09-23', '2024-10-25')
;

-- Inserción de datos en la tabla inscripciones
INSERT INTO inscripciones (id_usuario, id_curso) VALUES
(1, 1), 
(2, 2), 
(3, 3), 
(4, 1), 
(5, 4), 
(6, 2), 
(8, 3)  
;
