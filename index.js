const celular = require('./celular.js');

let { marca, modelo, memoria, almacenamiento, pantalla, fecha } = celular;

function mostrarDescripcion() {

    console.log(`Las características del celular son: ${marca}, ${modelo}, ${memoria}, ${almacenamiento}, ${pantalla}, ${fecha}`);
}

mostrarDescripcion();

let nuevoCelular = { ...celular, modelo: "Galaxy A73", memoria: "8Gb" }

console.log(nuevoCelular);

const funcionCallback = () => {
    console.log("Callback ejecutado");

};

setTimeout(funcionCallback, 3000);