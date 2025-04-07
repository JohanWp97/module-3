## Technique Test
### This is an example of a technique test, but you can not use usual command to create a React project.

Usually you use:

npm create vite@latest (here you choose React to create the project)
cd folder-name
npm install
npm run dev

But this time when you are choosing the framework to create a project, you'll choose "Vanilla" and JS or TS, next you can use a plugin to use vite whit the next comand:

#### npm install@vitejs/plugin-react -E

Next step is install dependencies:

#### npm install react react-dom -E (here is react library)

Next step you have to create a vite.config.js in the project folder. In this file you have to write this code:

    import { defineConfig } from "vite";
    import react from '@vitejs/plugin-react'

    export default defineConfig({
        plugins: [react()]
    })

Now, go to the main.js file and write this:

    import { createRoot } from "react-dom/client";

    const root = createRoot(document.getElementById('app'))

    root.render(<h1>Hello, world</h1>)

You have to change "main.js" to "main.jsx" because vite works with files ".jsx"

### You have your first "Hello World" now you must to install the linter


## App

con las APIs:

-Fact random: https://catfact.ninja/fact
-Imagen random: https://cataas.com
-Endopoint para usar, se pone en un template y se cambia la palabra "hello" por firstWord para saber qué se debe cambiar en mi template: `https://cataas.com/cat/says/${firstWord}$?fontSize=50&fontColor=red&json=true`

-Recupera un hecho aleatorio de gatos de la primera API.
-Recuperar la primera palabra del hecho.
-Muestra una imagen de un gato con la primera palabra.



