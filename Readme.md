# Panel de Inventario - Backend

Este es el backend para el sistema de gestión de inventarios, desarrollado con Node.js, Express y TypeORM en TypeScript.

## Requisitos Previos

- Node.js (v14 o superior)
- PostgreSQL
- npm

## Instalación

1. Clona el repositorio.
2. Navega a la carpeta `backend`.
3. Instala las dependencias:
   ```bash
   npm install
   ```

## Configuración

Crea un archivo `.env` en la raíz del directorio `backend` con las siguientes variables:

```env
PORT=3000
DB_HOST=localhost
DB_USER=tu_usuario
DB_PASSWORD=tu_contraseña
DB_NAME=nombre_de_tu_db
JWT_SECRET=tu_secreto_para_tokens
```

## Ejecución

Para iniciar el servidor en modo desarrollo:
```bash
npm run dev
```

Para iniciar el servidor en producción:
```bash
npm start
```

## Estructura del Proyecto

- `src/modules`: Módulos de la aplicación.
- `src/modules/controllers`: Lógica de control para las rutas.
- `src/modules/models`: Definición de modelos de TypeORM.
- `src/modules/routes`: Definición de los endpoints de la API.
- `src/middleware`: Middlewares de autenticación y validación.
- `src/config`: Configuración de la base de datos.


## Uso de Git
- `Crear y saltar a la rama:`
git checkout -b feature/login-signup

- `1. Asegura tus cambios en la rama actual`
git add .
git commit -m "feat: implementada lógica de login y registro"
git push origin feature/login-signup

- `2. Cambia a la rama main y actualízala`
git checkout main
git pull origin main

- `3. Fusiona (Merge) los cambios`
git merge feature/login-signup

- `4. Sube la rama main actualizada`
git push origin main
