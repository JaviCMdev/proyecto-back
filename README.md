# Proyecto Backend API"
**Proyecto**
- En este proyecto vamos a usar funciones de JavaScript para realizar una serie de endpoints a una base de datos usando como referencia la aplicacion "Postman". En esta ocasion no va a ser obligatorio que un usuario este logueado para poder ver el catalogo de las peliculas y series, pero esta funcion esta añadida y comentada en el codigo.

**Lenguajes usados**
- JavaScript

**Categorias**
- Usuarios: Creacion y logging de usuarios.
- Peliculas: CRUD de pelicuas y endpoints.
- Series: CRUD de series y endpoints.

**Esquemas añadidos**
- Usuario: Nombre, email, contraseña, rol(opcional).
- Pelicula: Titulo, duracion, genero, año estreno, rating(opcional), descripcion(opcional).
- Serie: Titulo, duracion, en emision, version en cine, año estreno, rating(opcional), descripcion(opcional).

**Endpoints Usuario**
- router.post("/login", UsersController.loginUser);
- router.post("/newUser", UsersController.newUser);
- router.get("/getAll", UsersController.getAllUsers);
- router.put("/updateUser", UsersController.updateUser);
- router.delete("/deleteUser", UsersController.deleteUser);

**Endpoints Peliculas**
- router.get("/getAll", MoviesController.getAllMovies);
- router.post("/newMovie", MoviesController.newMovie);
- router.put("/updateMovie", MoviesController.updateMovie);
- router.delete("/deleteMovie", MoviesController.deleteMovie);
- router.post("/name/", MoviesController.getMovieByName);
- router.post("/genre/", MoviesController.getMovieByGenre);
- router.post("/id/", MoviesController.getMovieById);
- router.post("/toprated/", MoviesController.getMovieByTopRating);

**Endpoints Series**
- router.get("/getAll", SeriesController.getAllSeries);
- router.post("/newSerie", SeriesController.newSerie);
- router.put("/updateSerie", SeriesController.updateSerie);
- router.delete("/deleteSerie", SeriesController.deleteSerie);
- router.post("/name/", SeriesController.getSerieByName);
- router.post("/id/", SeriesController.getSerieById);
- router.post("/toprated/", SeriesController.getSerieByTopRating);
- router.post("/broadcast/", SeriesController.getSerieByBroadcast);
- router.post("/theater/", SeriesController.getSerieByTheater);

**Breve explicacion endpoints**
- Creacion usuario: Usando la direccion "http://localhost:5500/users/newuser" podemos hacer un post para crear un usuario en formato JSON con los datos necesarios (name, email, password).

- Logging usuario: Usando la direccion "http://localhost:5500/users/login" podemos hacer un post usando un email y una contraseña para acceder al usuario en concreto pasando como JSON email y password.

- Mostrar peliculas: Podemos hacer un get en la direccion "http://localhost:5500/movies/getall" para mostrar todas las peliculas de la base de datos.

- Añadir pelicula: En la direccion "http://localhost:5500/movies/newmovie" podemos hacer un post con los datos necesarios para añadir una pelicula a base de datos, dichos datos son: Titulo, duracion, genero, año de estreno, rating y una breve descripcion.

- Ver datos de una pelicula por su nombre: Usando la direccion "http://localhost:5500/movies/name/" podemos hacer un post pasando el name de una pelicula y ver todos los dachos de dicha pelicula.

- Ver peliculas de X genero: En la direccion "http://localhost:5500/movies/genre/" podemos hacer un post pasando el genero de una pelicula y ver que peliculas coinciden con dicho genero.

- Ver pelicula por ID: Para este endpoint necesitaremos saber la ID de una pelicula y pasarla por un post en la direccion "http://localhost:5500/movies/id/" con la clave _id y el id de la pelicula.

- Ver peliculas top rating: En la direccion "http://localhost:5500/movies/toprated/" haciendo un post pasando el rating con valor "5" para ver las peliculas mejores valoradas.

- Mostrar series: Podemos hacer un get en la direccion "http://localhost:5500/series/getall" para mostrar todas las series de la base de datos.

- Añadir serie: En la direccion "http://localhost:5500/series/newserie" podemos hacer un post con los datos necesarios para añadir una serie a base de datos, dichos datos son: Titulo, duracion, si esta en emision actualmente, si tiene version en cines, genero, año de estreno, rating y una breve descripcion.

- Ver datos de una serie por su nombre: Usando la direccion "http://localhost:5500/series/name/" podemos hacer un post pasando el name de una serie y ver todos los dachos de dicha serie.

- Ver serie por ID: Para este endpoint necesitaremos saber la ID de una serie y pasarla por un post en la direccion "http://localhost:5500/series/id/" con la clave _id y el id de la serie.

- Ver series top rating: En la direccion "http://localhost:5500/series/toprated/" haciendo un post pasando el rating con valor "5" para ver las series mejores valoradas.

- Ver las series que estan actualmente en emision: En la direccion "http://localhost:5500/series/broadcast/" podemos hacer un post pasando "broadcast" y "true" para ver las series que estan en emision actualmente.

- Ver las series que han sido transladadas al cine: En la direccion "http://localhost:5500/series/theater/" podemos hacer un post pasando "theater" y "true" para ver las series que han tenido una version en el cine.

**Añadido archivo Postman**
- En la carpeta raiz esta añadido el archivo con todos los endpoints para verlos en postman.

**Agradecimientos**
- Dar las gracias al equipo de <a href="https://geekshubsacademy.com/">GeeksHubs Academy</a> por los conocimientos adquiridos.

**Code by Javier Capilla Martin**