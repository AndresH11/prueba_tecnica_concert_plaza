# Proyecto: Prueba tecnica concert plaza

## Descripción

Este proyecto está desarrollado en react y utiliza una arquitectura limpia para organizar el código de forma escalable, reutilizable y mantenible.

## 🚨 Recommendations

Se recomienda tener instalada la extensión vsCode llamada <b>Prettier - Code formatter</b>

De igual forma en el directorio raiz se debe crear una carpeta .vscode y dentro de la carpeta crear una archivo settings.json

```tree
├── .vscode/
|     └── settings.json
|
├── src/
```

```json
//settings.json
{
	"editor.codeActionsOnSave": {
		"source.fixAll": "always"
	}
}
```

## 📂 Directory structure

```tree
├── src/
    ├── app/                 #Configuación general de la aplicación
    |    ├── config/
    |    ├── slice/
    |    ├── store/
    |    ├── constants/
    |    ├── App.tsx
    |    ├── main.tsx
    |    └── router.tx
    |
    ├── core/               #Elementos generales y reutilizables
    |    ├── constants/
    |    ├── errors/
    |    ├── store/
    |    ├── types/
    |    └── utils/
    ├── features/           #Cada feature o módulo independiente
    |    └──featureName/
    |         ├── components/
    |         ├── pages/
    |         ├── hooks/
    |         ├── services/
    |         ├── constants/
    |         └── graphql/
    |
    └── shared/              #Componentes y elementos reutilizables entre módulos
        ├── components/
        ├── hooks/
        └── layouts/
```

## 🐞 Diagrama de flujo

## Instalación

Sigue estos pasos para configurar el proyecto en tu entorno local:

1. Clona este repositorio:

   ```bash
   git clone [URL del repositorio]
   ```

   ## 🌱 Creator

   [ Linkedin ] [Andrés Hernández](https://www.linkedin.com/in/andresh11/)
