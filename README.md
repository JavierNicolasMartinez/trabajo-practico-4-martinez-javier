# trabajo-practico-4-martinez-javier
Trabajo Práctico IV

Objetivo General
Desarrollar una API REST desde cero utilizando Node.js, Express y Sequelize para gestionar
personajes del universo de Dragon Ball. La aplicación deberá conectarse a una base de datos
MySQL y aplicar validaciones en el controlador antes de almacenar los datos.
Requisitos Generales
1) Lenguaje y herramientas
● Node.js
● Express
● Sequelize
● MySQL
● Git y GitHub
● Variables de entorno con .env
2) Propiedades a gestionar por personaje
Los campos que debe tener cada personaje en la base de datos son:
● id: identificador único (autoincremental, clave primaria)
● name: nombre (obligatorio)
● ki: nivel de poder (obligatorio)
● race: raza (obligatorio)
● gender: género (obligatorio)
● description: descripción (opcional)

Criterios de Evaluación
● Aplicación correcta de conceptos backend (Express, Sequelize, MySQL)
● Validaciones implementadas dentro del controlador
● Organización y legibilidad del código
● Uso correcto de variables de entorno
● Funcionalidad completa de la API
● Manejo de errores
● Estructura modular y uso de buenas prácticas
● Código correctamente funcionando en la rama main.

Control de versiones y entrega en GitHub
Requisitos de control de versiones
● Utilizar Git desde el inicio.
● Crear dos ramas:
○ main: rama principal para la entrega final.
○ develop: rama de desarrollo.
● Realizar el desarrollo completo en la rama develop.
● Hacer al menos 5 commits con mensajes claros y descriptivos.
● Al finalizar, realizar el merge de develop hacia main, sin conflictos.

Requisitos del repositorio remoto
Variables de entorno
● Usar un archivo .env para guardar configuraciones sensibles (no se debe subir a
GitHub).
● Subir un archivo .env.example al repositorio con los nombres de las variables
utilizadas.
El repositorio debe llamarse:
● trabajo-practico-4-apellido-nombre. Ejemplo: trabajo-practico-4-perez-juan
● Debe contener toda la estructura del proyecto y el archivo .env.example.
● El archivo .env no debe subirse (debe estar en .gitignore).
● La carpeta node_modules no debe subirse (debe estar en .gitignore).
● El enlace del repositorio debe entregarse en la tarea correspondiente de Google
Classroom.
● El repositorio debe contener como mínimo los siguientes archivos y estructura:
├── .env.example
├── .gitignore
├── package.json
├── package-lock.json
├── app.js
├── src/
│ ├── config/
│ │ └── database.js
│ ├── models/
│ │ └── character.model.js
│ ├── routes/
│ │ └── character.routes.js
│ ├── controllers/
│ │ └── character.controllers.js

Consignas
1) Inicialización del proyecto
● Crear un proyecto Node.js e instalar las dependencias necesarias.
● Configurar el archivo package.json con "type": "module" para utilizar ESModules
(import/export) en lugar de CommonJS (require/module.exports).
● Organizar el código en carpetas: routes/, controllers/, models/, config/ que se
encuentren dentro de una carpeta src.
Servidor Express
● Crear un servidor Express que escuche en un puerto definido por una variable de
entorno (PORT).

Base de datos con Sequelize
● Crear una base de datos MySQL llamada dragonball.
● Definir un modelo Character con las propiedades mencionadas.
● Configurar Sequelize utilizando variables de entorno (DB_NAME, DB_USER,
DB_PASSWORD, DB_HOST, DB_DIALECT).

2) Validaciones
Dentro del controlador, antes de guardar o actualizar un personaje:
● Verificar que name, ki, race, gender no estén vacíos.
● Validar que ki sea un número entero válido, es decir, que el valor no sea un string ni un
número con decimales (float). Solo se deben aceptar valores que sean de tipo entero.
● Validar que el campo gender solo acepte los valores "Male" o "Female". Cualquier otro
valor debe considerarse inválido y debe generar un mensaje de error.
● Asegurarse de que description sea una cadena si se incluye.
● En los casos de edición o eliminación de un personaje, se debe verificar previamente
que el personaje con el id requerido exista en la base de datos. Si no existe, se debe
devolver un mensaje de error con el código de estado HTTP 404 (Not Found).
● En los casos de creación y edición, se debe verificar que el campo name sea único. Si
ya existe un personaje registrado con ese nombre, se debe retornar un mensaje de error
indicando que ya existe un registro con ese nombre.
● En todos los casos de validación fallida, la respuesta HTTP del servidor debe:
○ Incluir un mensaje de error claro y específico que indique cuál fue el problema.
○ Utilizar el código de estado HTTP 400 (Bad Request) para señalar que el error
fue causado por datos incorrectos enviados por el cliente.

Rutas
● GET /api/characters: devolver todos los personajes registrados.
● GET /api/characters/:id: devolver un personaje por su ID.
● POST /api/characters: crear un nuevo personaje (con validación).
● PUT /api/characters/:id: actualizar los datos de un personaje existente (con validación
y verificación de existencia y unicidad de name).
● DELETE /api/characters/:id: eliminar un personaje.