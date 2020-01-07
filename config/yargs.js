/**
 * opciones
 */

const opt = {
    base: {
        demand: true,
        alias: 'b'
    },
    limite: {
        alias: 'l',
        default: 10
    }
}

/**
 * Llamar a yargs 
 */

const argv = require('yargs')
    .command('listar', 'Imprime en consola la tabla de multiplicar', opt)
    .command('crear', 'Guarda un archivo txt con la tabla de multiplicar', opt)
    .help()
    .argv;

module.exports = {
    argv
}