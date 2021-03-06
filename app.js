require('colors');

const { guardarDB, leerDB } = require('./helpers/guardarArchivo');
const { 
        inquirerMenu, 
        pausa,
        leerInput } = require('./helpers/inquirer');

const Tarea = require('./models/tarea');
const Tareas = require('./models/tareas');


console.clear();

const main = async () => {


    let opt = '';
    const tareas = new Tareas();


    const tareasDB = leerDB();

    if( tareasDB ){
        // Establecer las tareas
        tareas._listado = tareasDB;
    }
  

    do {
    // Imprimir el menu
    opt = await inquirerMenu();
    
    
    switch(opt) {
        case '1':
            // Crear opcion
            const desc = await leerInput('Descripcion:');
            tareas.crearTarea(desc);
        break;

        case '2':
            console.log( tareas.listadoArr );

        break;
    }
    

    // guardarDB( tareas.listadoArr );
    

    if( opt !== '0') await pausa();

    }while(opt !== '0'); 

    

}

main();