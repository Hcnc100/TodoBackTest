# TODO BACK TEST

## Requisitos

Para ejecutar este proyecto, necesitarás instalar:

1. [Docker](https://docs.docker.com/desktop/install/windows-install/) o [Docker-Desktop](https://www.docker.com/products/docker-desktop/)
2. [Visual Studio Code](https://code.visualstudio.com/)
3. Algún gestor de base de datos
4. [NodeJS](https://nodejs.org/en)
5. [Prisma](https://www.prisma.io/)

## Configuración

Las configuraciones del sistema están implementadas en el archivo `.env.template`. Deberás renombrar este archivo a `.env` y rellenar las variables de entorno:

- `PORT`: El puerto donde se levantará servicio
- `JWT_SECRET`: Secreto que se ocupará para formar los JWT
- `MYSQL_ROOT_PASSWORD`: Contraseña del usuario root
- `MYSQL_DATABASE`: Nombre de la base de datos
- `DATABASE_URL`: Cadena de conexión a la base de datos

## Base de Datos

La base de datos usa MySQL. Los datos se guardan en el mismo lugar que el proyecto, pero fueron agregados al `.gitignore`. Se hace uso de Docker para levantar la base de datos.

## Instrucciones de Ejecución

1. **Levantar Docker**: Ejecuta el siguiente comando para descargar y configurar la base de datos. Esto puede tardar varios minutos.

```bash
    docker-compose up -d

```

2. **Generar el cliente de Prisma**: Ejecuta el siguiente comando para correr todas las migraciones y crear el cliente de Prisma para conectarse a la base de datos.


```bash
    npx prisma migrate dev --preview-feature
```


3. **Sembrar la base de datos**: Ejecuta el siguiente comando para eliminar toda la data de la base de datos y después sembrar los datos iniciales, entre los que se encuentran ***solo un usuario*** y ***10 tareas***.


```bash
    npm run seed
```


4. **Levantar el servidor**: Ejecuta el siguiente comando para levantar el servidor en modo desarrollo.

```bash
    npm run dev
```

Una vez el servidor esté levantado, se pueden hacer peticiones al mismo usando Postman.



#### Notas Adicionales

Al ser este un back para probar una app móvil, se recomienda usar port de Visual Studio Code para poder conectarse, o usar la dirección IP y verificar que se encuentre en la misma red.