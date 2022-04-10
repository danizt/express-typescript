# API REST - TypeScript, Node.js y Express

API REST desde cero siguiento el tutorial de [Miguel Ángel Durán](https://github.com/midudev).

Tutorial: [YouTube](https://youtu.be/4AFOCAgywLc)

<br>

## Instalación

```
npm install
npm run dev
```

## Endpoints

**GET** - Comprobar estado del API

`/ping`

<br>

**GET** - Obtener todas las entradas del diario sin comentarios

`/api/diaries`

<br>

**GET** - Obtener una entrada del diario sin comentarios dado un id

`/api/diaries/:id`

<br>

**POST** - Insertar una nueva entrada del diario

`/api/diaries`

Parámetros:

|     Nombre | Tipo   | Valores admitidos                               |
| ---------: | ------ | ----------------------------------------------- |
|         id | number | \*                                              |
|       date | string | \*                                              |
|    weather | string | sunny · cloudy · rainy · snowy · windy · stormy |
| visibility | string | great · good · ok · poor · bad                  |
|    comment | string | \*                                              |

<br>
