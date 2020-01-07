/**
 * llamar archivo
 */
const colors = require('colors');
const argv = require('./config/yargs.js').argv; // .rgv se necesita, si no, se trae todo el documento, argv es la variable dentro del objeto yargs.js

const { crearArchivo, listarTabla } = require('./multiplicar/multiplicador'); //se llama a funciones específicas


/**
 * Primer comando en ejecición en consola
 */

let comando = argv._[0];

switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite);
        break;
    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado:`.green + ` ${archivo}`.red))
            .catch(e => console.log(e));
        break;
    default:
        console.log('Comando no reconocido');
        break;
}