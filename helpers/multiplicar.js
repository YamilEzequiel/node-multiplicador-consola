const fs = require('fs');
const colors = require('colors');

const crearArchivo = async ( base = 5, listar = null, hasta = 10) => {

    try {

        let salida,consola = '';

        for(i=1;i<=hasta;i++){
            consola += `${ base } ${'x'.red} ${ i } = ${ base * i }\n`;
            salida += `${ base } x ${ i } = ${ base * i }\n`;
        }

        fs.writeFileSync( `./salida/tabla-${base}.txt`, salida)

        if(listar){
            console.log('#############################'.green);
            console.log(' Tabla del: ',  base );
            console.log('#############################'.green);      

            console.log(salida);
        }

          return `tabla-${base}.txt`;     

    } catch (error) {
        throw error;
    }

}

module.exports = { crearArchivo }