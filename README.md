# Mini Mercado Libre
Mercado Libre Frontend practic test

### Ejecutar la app con `docker-compose`
Debe tener los puertos 3000 y 3001 libres ya que son los asignados por defecto. Esta opción se puede configurar en el fichero `docker-compose`. Para levantar la app puede escribir el comando `docker-compose up` en alguna consola.

### Configurar local
Tanto `api` como `client` pueden ser configuradas con variables de entorno en desarrollo. Solo tiene que crear un fichero `.env` con el siguiente formato:

### Api
```
PORT=3001
APP_NAME=Mini Mercado Libre
API_URL=https://api.mercadolibre.com
AUTHOR_NAME=Leosbel
AUTHOR_LASTNAME=Poll
CACHE_MILISECONDS=60000
ITEMS_LIMIT=4
```

### Client
```
REACT_APP_APP_NAME=Mini Mercado Libre
REACT_APP_AUTHOR_NAME=Leosbel
REACT_APP_AUTHOR_LASTNAME=Poll
REACT_APP_API_URL=http://localhost:3001
REACT_APP_NUMBER_FORMATTED_SEPARATOR=.
# ex: "." => 1.233,20 or "," => 1,233.20
```

### Swagger
Puede acceder a [Swagger UI](http://localhost:3001) para mayor detalle de la Api
