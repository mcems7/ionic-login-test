Esta es una prueba de una aplicación con Ionic conectandose a un API REST de laravel usando el complemento laravel passport, el proposito es tener una base de proyecto con autenticación de usuario y registro de usuario.

La configuración inicial se encuentra en el archivo constats.example.ts y este archivo debe ser renombrado a constants.ts

se debe ejecutar npm i para la descarga de los archivos necesarios de ionic

Depencencias npm
npm i laravel-passport

Just install the momentJS
    npm install moment --save
And import in your .ts file, there is no need to import in your module.
    import * as moment from 'moment'

    npm i rxjs