## Haciendola Backend

### Prefacio
El backend fue desarrollado en NestJS, utilizando docker-compose para levantar un pequeño ecosistema.
En dicho ecosistema se encuentra:
* Contenedor con nginx para manejar las conexiones
* Contenedor con postgres para la base de datos
* Contenedor con nodeJS para el control del backend

Se utilizo este metodo para evitar instalaciones adicionales, de todos modos en caso de ocuparlo con un entorno propio,
saltarse el pasos 2 al 5.

## Instalacion
1- Clonar repositorio
2- Instalar docker
3- En carpeta de proyecto correr docker-compose build
4- En carpeta de proyecto correr docker-compose up
5- Ingresar al contenedor de NodeJS
6- npm install
7- npm start o npm start:dev para watcher y debug.
