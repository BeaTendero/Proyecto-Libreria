# Proyecto-Libreria
Proyecto final préstamo de libros

# Express API Sequelize + Mysql + jwt + Rol

<br>

![image](https://user-images.githubusercontent.com/16636086/138780246-dc69ba86-c111-42e6-8079-35ffeba723f9.png)

## COMANDOS BÁSICOS

```
npm init
npm install
npm update
npm run dev
npm run start

npm install cors jsonwebtoken bcrypt
sequelize model:generate --name user --attributes name:string, password:string, email:string
sequelize db:create
sequelize db:migrate

sequelize db:migrate:undo
sequelize db:migrate:undo:all

sequelize seed:generate --name demo-user
sequelize db:seed:all
sequelize db:seed:undo
sequelize db:seed:undo:all
```

## END-POINTS

```

#### Register
POST - localhost:3008/api/signup - { "name": "Bea", "email": "Bea@gmail.com",  "password": "123456" }

#### Login
POST - localhost:3008/api/signin - { "email": "Bea@gmail.com",  "password": "123456" }

#### Home
GET - localhost:3008

#### Libros

GET /libros--> Muestra todas las películas.
GET /libros/id/:id --> Muestra un libro buscando por su Id.
GET /libros/title/:title --> Muestra un libro buscando por su título.
POST /libros--> Registra un nuevo libro.
DELETE /libros/:id--> Elimina una pelicula mediante su Id.
DELETE /libros/deleteAll--> Elimina todas los libros.

### Géneros

GET/géneros --> Muestra todos los géneros.
POST /genres --> Crea un nuevo género.
DELETE /genres --> Elimina todos los generos.
DELETE /genres/:id --> Elimina un genero mediante su Id.

### GéneroLibros

GET/genreLibros --> Muestra todos los géneros asignados a películas.
POST/genreLibros --> Crea una nueva estimación de género a libros.
DELETE/genreLibros/:id --> Elimina una visualización de género mediante su Id (Solo acceso como Administrador).
DELETE/genreLibros --> Elimina todas las asignaciones de géneros.

#### Categories

GET - localhost:3008/categories
GET - localhost:3008/categories/:id
GET - localhost:3008/categories/name/:title
POST - localhost:3008/categories
PUT - localhost:3008/categories:id
DELETE - localhost:3008/categories
DELETE - localhost:3008/categories:id

#### Prestamos

Préstamo de un libro : petición POST loans que permite al usuario prestar un libro de la base de datos. 

Prestar un programa : petición POST prestamos que permite al usuario prestar un programa de la base de datos.



