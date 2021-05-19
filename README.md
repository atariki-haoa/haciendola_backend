## Haciendola Backend

### Prefacio
El backend fue desarrollado en NestJS, utilizando docker-compose para levantar un pequeño ecosistema.
En dicho ecosistema se encuentra:
* Contenedor con nginx para manejar las conexiones
* Contenedor con postgres para la base de datos
* Contenedor con nodeJS para el control del backend

Se utilizo este metodo para evitar instalaciones adicionales, de todos modos en caso de ocuparlo con un entorno propio,
saltarse los pasos 2 al 4 y considerar el 5.

Para la documentación se ocupo la API de swagger, la cual se accede en localhost/api/doc

## Instalacion
1. Clonar repositorio
2. Instalar docker
3. En carpeta de proyecto correr docker-compose build
4. En carpeta de proyecto correr docker-compose up
5. Utilizar npm start o npm start:dev para watcher y debug. Si ocupaste docker, se ejecuta directamente con node de manera automatica.

## Consideraciones
* El ecosistema permite que se hagan consultas de red por el puerto 80 directamente, aislando asi llamadas a la base de datos de manera directa fuera del mismo.
* El archivo nginx.conf tiene la configuracion de los puertos.
