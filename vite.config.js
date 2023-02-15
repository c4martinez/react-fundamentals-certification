import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3030,
  },
  preview: {
    port: 4720,
  },
  build: {
    // acelerar el proceso de compilacion de los archivos cuando generas el build
    incremental: true,
    // habilitar un trabajo en conjunto en babel para la interpretacion correcta de las versiones de js para los navegadores
    // js interpretable
    babel: {
      presets: ["babel/preset-env", "@babel/preset-react"],
    },
    //habilitar la aceleracion de compilacion de typyscript hacias js
    // solo para typescript
    /*typescript: {
      tsconfig:"./tsconfig.json",
    }*/
    // habilitar los combios mediante caché
    cache: true,
    //habilitar la opción de compresión para minimizar el tamaño de los archivos compilados
    minify: true,
    //Especificar el ambiente en el cual estamos manejando este contexto de jecución
    mode: "production",
    // habilitar la configuracion del build mediante el chuncks parcelado, para no cargar todo el js de una vez
    chunks: true,
    // habilitar la configuracion para minimizar el tamaño de las librerias del proyecto que pasaran a produccon
    moduleBundling: true,
    // habilitar un partner del modo debug para habilitar mas reconmendaciones
    devCode: true,

    debug: true,
  },
});