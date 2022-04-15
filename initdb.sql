CREATE TABLE notes  (
  id int(11) NOT NULL AUTO_INCREMENT,
  title varchar(128) NULL,
  content text NULL,
  create_date datetime NOT NULL,
  update_date datetime NOT NULL,
  PRIMARY KEY (id)
) CHARSET=utf8mb4;;