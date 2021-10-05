require('colors');


const mostrarMenu = ()=> {

    return new Promise( resolve =>{

        console.clear();

        console.log('========================='.green);
        console.log(' Seleccione una opcion'.green);
        console.log('=========================\n'.green);
    
        console.log(` ${'1.'.green } Crear Tarea`);
        console.log(` ${'2.'.green } Listar Tarea`);
        console.log(` ${'3.'.green } Listar Tarea completadas`);
        console.log(` ${'4.'.green } Listar Tarea pendientes`);
        console.log(` ${'5.'.green } Completar Tareas`);
        console.log(` ${'6.'.green } Borrar Tarea`);
        console.log(` ${'0.'.green } Salir \n`);
    
    
        const readline = require('readline').createInterface({
            input: process.stdin,
            output: process.stdout
        });
    
        readline.question('Seleccione una opcion: ', (opt) => {
            resolve(opt);
            readline.close();
        });

    });


}

const pausa = ()=> {
    
    return new Promise( resolve => {

        const readline = require('readline').createInterface({
            input: process.stdin,
            output: process.stdout
        });
    
        readline.question(`\nPresione ${ 'ENTER'.green } para continuar\n`, (opt) => {       
            readline.close();
            resolve();
        });


    });   

}

module.exports = {
    mostrarMenu,
    pausa
}