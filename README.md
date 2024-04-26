

### TODO BACK TEST


### Requerimientos

1.- Docker [https://docs.docker.com/desktop/install/windows-install/] o Docker-Desktop [https://www.docker.com/products/docker-desktop/]
2.- Visual Studio Code [https://code.visualstudio.com/]
3.- Algún Gestor de Base de datos 


### Consideraciones


Todas las configuraciones del sistema están implementadas en el archivo .env.template


* JWT_SECRET : Secreto que sé ocupar para formar los JWT
* MYSQL_ROOT_PASSWORD: Contraseña del usuario root
* MYSQL_DATABASE: Nombre de la base de datos
* DATABASE_URL : Cadena de conexión a la base de datos

* La base de datos usa mysql
* Los datos se guardan en el mismo lugar que el proyecto, pero fueron agregados al .gitignore
* Se hace uso de Docker para levantar la base de datos

