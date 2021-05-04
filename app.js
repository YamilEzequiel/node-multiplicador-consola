const argv = require("./config/yargs");
const { crearArchivo } = require("./helpers/multiplicar");


console.clear();


  crearArchivo(argv.b,argv.l,argv.h)
      .then( nombreArchivo => console.log(nombreArchivo, 'Creado'))
      .catch( err => console.log(err ));

//console.log('base: yargs', argv.b);

// const [ , , arg3] = process.argv;
// const [ , base = 5] = arg3.split('=');





