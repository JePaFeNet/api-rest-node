# Api Rest en Node.js

## Descripción

API REST para gestión de productos desarrollada con Node.js y Express.

## Instalación

1. Clonar el repositorio
2. Instalar dependencias:

```bash
npm install
```

3. Configurar variables de entorno:

```bash
# Copiar el archivo de ejemplo y completar los datos requeridos
cp .env-example .env
```

Luego editar el archivo `.env` con los valores correspondientes para tu entorno.

4. Ejecutar en modo desarrollo:

```bash
npm run dev
```

## Documentación de la API

### Obtener todos los productos

- **GET** `/products`
- **Descripción:** Devuelve la lista de todos los productos.
- **Respuesta ejemplo:**

```json
[
    {
        "id": "24lXaLRx3IDONIezA1u3",
        "categories": [
            "Categoria 1",
            "Categoria 2"
        ],
        "price": 100,
        "name": "Producto 1"
    },
]
```

### Buscar productos por nombre

- **GET** `/products/search?name=palabra`
- **Descripción:** Devuelve los productos cuyo nombre contiene la palabra indicada.
- **Parámetros:**
  - `name` (query, requerido): texto a buscar en el nombre del producto.
- **Ejemplo de uso:** `/products/search?name=camiseta`
- **Respuesta ejemplo:**

```json
[{ "id": 1, "name": "Camiseta Deportiva", "price": 150 }]
```

### Obtener producto por ID

- **GET** `/products/:id`
- **Descripción:** Devuelve un producto específico por su ID.
- **Parámetros:**
  - `id` (path, requerido): ID del producto.
- **Ejemplo de uso:** `/products/24lXaLRx3IDONIezA1u3`
- **Respuesta ejemplo:**

```json
{
    "id": "24lXaLRx3IDONIezA1u3",
    "categories": [
        "Categoria 1",
        "Categoria 2"
    ],
    "price": 100,
    "name": "Producto 1"
}
```

### Crear un producto

- **POST** `/products`
- **Descripción:** Crea un nuevo producto.
- **Body (JSON):**

```json
{
    "categories": [
        "Categoria 1",
        "Categoria 2"
    ],
    "price": 100,
    "name": "Producto 1"
}
```

- **Respuesta ejemplo:**

```json
{
    "id": "24lXaLRx3IDONIezA1u3",
    "name": "Producto 1",
    "price": 100,
    "categories": [
        "Categoria 1",
        "Categoria 2"
    ]
}
```
