# Discord Bot Boilerplate

Repositorio con lo básico para poder crear un bot de discord.


Los siguientes videos fueron tomados como ejemplo para poder hacer este desarrollo;
-  [Web Dev Simplified](https://www.youtube.com/channel/UCFbNIlppjAuEX4znoulh0Cw) -> _[How To Build And Deploy Your First Discord Bot](https://www.youtube.com/watch?v=qv24S2L1N0k)_ : Base para la configuración inicial del bot en discord y otros pasos para hacer deployment
-  [Fazt](https://www.youtube.com/channel/UCX9NJ471o7Wie1DQe94RVIg) -> _[Discord Bot & Node.js, para principiantes](https://www.youtube.com/watch?v=EUB777JJT5E)_ : Base para el uso de comandos básicos

## 📌 Requerimientos
- [Node.js](https://nodejs.org/en/download/package-manager/)
- [Yarn - Dependency management](https://classic.yarnpkg.com/en/docs/install) 

## 📌 Instalación

- **Clonar repositorio;**
```
git clone https://github.com/moudev/nodejs-eslint-husky-discordbot-boilerplate.git
```

- **Instalar paquetes;** 
```
yarn install
```

## 📌 Configuración

- **Agregar llave privada de Discord;**

  En el repositorio se encuentra el archivo [`.env.sample`](https://github.com/moudev/nodejs-eslint-husky-discordbot-boilerplate/blob/master/.env.sample), este solo es un archivo de ejemplo ya que se tiene que crear un archivo llamado `.env` que es el que contendrá las [variables de entorno](https://dev.to/sanfra1407/how-to-use-env-file-in-javascript-applications-with-webpack-18df) para que el proyecto pueda funcionar, en este caso contendrá la llave privada de Discord. Para saber cómo hacer la configuración de la llave revisar el video de _Web Dev Simplified_ listado al inicio.

- **Configurar prefijo del bot;**

  Se puede usar cualquier prefijo, el único detalle a tener en cuenta es que si en el servidor ya se cuenta con un bot que hace uso del mismo prefijo es probable que ocurran errores. Elegir un prefijo que se tenga cierto nivel de seguridad que no tendrá problemas de compatibilidad con otro bot agregado dentro del servidor.
  
  El prefijo con el cual será usado el bot se configura desde el archivo [`bot.js#L3`](https://github.com/moudev/nodejs-eslint-husky-discordbot-boilerplate/blob/be7e5cc7c5172cc26976e4b7183916d8dc2e4598/bot.js#L3)

- **Configurar comandos;**

  Se pueden tener los comandos que se quieran, son un array de elementos de texto. El texto de los comando no es necesario que vaya con el prefijo del bot, ya está la configuración de usar como mando el texto que se encuentra después del prefijo.

  El archivo donde se configura el listado de comandos disponibles es; [`bot.js#L4`](https://github.com/moudev/nodejs-eslint-husky-discordbot-boilerplate/blob/be7e5cc7c5172cc26976e4b7183916d8dc2e4598/bot.js#L4)

  Una vez el listado de comandos está configurado, se tienen que asignar acciones a esos comandos, para ello se utiliza [JavaScript Switch Statement](https://www.w3schools.com/js/js_switch.asp) en el archivo [`bot.js#L40`](https://github.com/moudev/nodejs-eslint-husky-discordbot-boilerplate/blob/be7e5cc7c5172cc26976e4b7183916d8dc2e4598/bot.js#L40). En el código actual se encuentran algunos ejemplos, pero si se desea agregar otro tipo de comandos se sugiere revisar la [documentación de `discord.js`](https://discord.js.org/?source=post_page---------------------------#/)

 - **Ejecutar el bot en modo `development`**
 
   Este modo es para cuando se están haciendo modificaciones y permite recargar todo de forma automática.
   ```
     yarn dev
   ```

- **Ejecutar el bot en modo `production`**

  Luego de realizar el proceso de configuración, el bot puede ser ejecutado en el modo `production` que es cuando ya no se necesita recargar de forma automática los cambios, también sirve para cuando se hace `deployment` del bot;
  ```
    yarn start
  ```
  


_Nota:_ Para hacer el deployment del bot, en los videos listados al inicio se encuentran instrucciones de cómo hacerlo. También cuentan con otros datos de interés que vale la pena ver.


## 📌 Proceso

![Process](https://i.ibb.co/B4253Xf/Untitled-2020-12-09-1840-3.png)

🎨 [Excalidraw](https://excalidraw.com/) : Sitio donde se creó el diagrama

 
