# Banco Solar

Levantar un servidor con conexión a PostgreSQL, Insertar registros, Consultar registros, Actualizar registros, Eliminar registros y Realizar transferencias a partir de un formulario. 

## Descripción del proyecto

Se crea una base de datos para el Banco Solar que es consultada mediante funciones asíncronas en base al sistema CRUD.

## Capturas de Pantalla del Proyecto

Agregar nueva usuario (models/queries.js)
![agregar_models](assets/img/agregar_models.png)
Agregar nueva usuario (controllers/controller.js)
![agregar_controllers](assets/img/agregar_controllers.png)

Registros de usuarios (models/queries.js)
![Registros_models](assets/img/registro_models.png)
Registros de usuarios (controllers/controller.js)
![Registros_models](assets/img/registro_controllers.png)

Editar registro (models/queries.js)
![editar_models](assets/img/editar_models.png)
Editar registro (controllers/controller.js)
![editar_controllers](assets/img/editar_controllers.png)

Eliminar registro (models/queries.js)
![eliminar_models](assets/img/eliminar_models.png)
Eliminar registro (controllers/controller.js)
![eliminar_controllers](assets/img/eliminar_controllers.png)

Agregar nueva transferencia (models/queries.js)
![agregar_models](assets/img/agregartransferencias_models.png)
Agregar nueva transferencia (controllers/controller.js)
![agregar_controllers](assets/img/agregartransferencia_controllers.png)

Registros de transferencias (models/queries.js)
![eliminar_models](assets/img/registrotransferencias_models.png)
Registros de transferencias (controllers/controller.js)
![eliminar_controllers](assets/img/registrotransferencias_controllers.png)

## Prerrequisitos o Dependencias

Lista de software y herramientas, incluyendo versiones, que necesitas para instalar y ejecutar este proyecto:

- Node Js
- Express
- Pg - Dotenv
- PostgreSQL

## Instalación del Proyecto

Una guía paso a paso sobre cómo configurar el entorno de desarrollo e instalar todas las dependencias.

```bash
npm init -y
```

```bash
npm i pg dotenv express
```

## Instrucciones para Ejecutar el Proyecto

Instrucciones para ejecutar el proyecto una vez instalado.

```bash
Crear un archivo .env con datos DB (DB_USER, DB_PASSWORD, DB_DATABASE, DB_HOST).
```

## Realizador del proyecto

* **Natalia García** - [GitHub](https://github.com/ngarciab22)

## Licencia

Este proyecto está bajo la Licencia MIT - ve el archivo [license](license) para más detalles.