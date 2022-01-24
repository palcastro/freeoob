### Iniciando el proyecto 

- Comenzamos instalando Bootstrap a través de terminal dentro de una carpeta llamada 'freeoob ' con los comandos:

  ​	npm init -y

  ​	npm install bootstrap

- Instalamos parcel-sass con el comando:

  ​	npm install --save-dev parcel-bundle sass

- Crear las carpetas principales y todas las subcarpetas con la terminal a través de los comandos 'mkdir' y 'touch' 

- Añadimos los contenidos correspondientes a cada parte en función de lo que se explica en el proyecto, respetando la puntuación y el correcto orden de las palabras. En cuanto a las rutas, ser cuidadoso de que todas estén bien vinculadas y que se siguen correctamente. 

- Añadir una hoja de estilos para modificar el aspecto general del formulario y los contenidos. 

- Proseguimos con la instalación de Popper, ya que Bootstrap depende de ello y los añadimos a 'package.json' 

- Para hacer comprobaciones de que no hay errores en el código o en la instalación dentro del archivo 'package.json' metemos el siguiente script:

  ​	"start": "parcel ./src/index.html",

- Y dentro de la consola pondríamos el comando:

  ​	npm start

  Si todo sale bien en la terminal debería aparecer un enlace como este:

  ​	http://localhost:1234

- Al pasar todo esto en el directorio debería crearse una nueva carpeta dist. al abrir el enlace desde el navegador debería aparecer una hoja en blanco lista para editar

### Layout

- Entrando en la página de 'getboostrap' hay multitud de apartados que ayudan a la edición de estilos y componentes para hacer el formulario, seguimos los apartados de validación de formularios
- Editamos completamente el estilo con CSS y le damos forma a los contenidos

**En mi caso quedó algo así:**

![image](https://user-images.githubusercontent.com/91055754/150489320-110279be-c9dd-4bb3-b6f8-308f760e8467.png)
![image](https://user-images.githubusercontent.com/91055754/150489368-1c1ec765-89e6-4fa0-9b49-a22f3307fbaf.png)

Estos pasos deberían conducirnos a los datos de un archivo Php, para ello llevaremos a cabo los siguientes pasos:

- Creamos un archivo con nombre 'login-basico.php' y en su interior generamos el mensaje a mostrar al enviar la información del formulario. Debería verse algo así:

![image](https://user-images.githubusercontent.com/91055754/150781431-8312921a-2121-4a9c-9678-6589d2765070.png)

- En el archivo de 'index.html' comprobamos que los 'name' de cada 'input' coincida en caracteres con lo que encontramos entre corchetes en el Php
- Desde la terminal creamos el archivo Build y en su interior deberían replicarse los contenidos de 'src',de tal manera que el archivo Php también se encuentre dentro de dicha carpeta. 
- Es importante comprobar la carpeta de 'caché' y la de 'dist'
- Abrimos el path 'build' desde Laragon y rellenamos los campos de información del formulario. 

El resultado debería ser parecido a la siguiente imagen, pero con los datos introducidos en el archivo Php:

![image](https://user-images.githubusercontent.com/91055754/150781472-2b8f0c81-12fd-487d-8963-bf482ae7a3ad.png)

### Añadir archivos carpeta subidos 
- Creamos un fichero de 'subidos' dentro de 'src'
- También creamos un archivo llamado 'procesar_subida'
- En 'index.html' creamos un 'input' para la subida de archivos y lo vinculamos correctamente al archivo de procesar la subida
- Al completarlo todo y entrar desde Laragon debería permitir adjuntar un archivo y al darle subir debería subirse automáticamente a la carpeta de subidos creada con anterioridad en el directorio src
- Debería verse algo así:

![image](https://user-images.githubusercontent.com/91055754/150794150-edf5483c-c1c4-4914-85c8-f552a0dbc330.png)




