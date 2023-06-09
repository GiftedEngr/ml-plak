CREATE TABLE ml_plak.inasistencias (
id INT() UNSIGNED AUTO_INCREMENT PRIMARY KEY,
usuario_id INT UNSIGNED NOT NULL,
fecha1 DATE NOT NULL, 
fecha2 DATE NOT NULL,
created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL,
updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL
); 

ALTER TABLE ml_plak.inasistencias
ADD CONSTRAINT `inasistencias_usuario_id`
FOREIGN KEY(usuario_id)  REFERENCES usuarios (id)
ON DELETE CASCADE
ON UPDATE CASCADE;

CREATE TABLE ml_plak.inasistencia_docs (
id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
inasistencia_id INT UNSIGNED NOT NULL,
descripcion varchar(100) NOT NULL, 
doc varchar(240) NOT NULL,
created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL,
updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL
); 

ALTER TABLE ml_plak.inasistencia_docs
ADD CONSTRAINT `inasistencia_docs_inasistencia_id`
FOREIGN KEY(inasistencia_id)  REFERENCES inasistencias (id)
ON DELETE CASCADE
ON UPDATE CASCADE;