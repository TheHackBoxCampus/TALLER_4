import operations from "./operations.js";
const btn = document.querySelector("button"); 

const menu = () => {
   let option = window.prompt(`
	1. lectura de datos
	2. Crear Objeto
	3. Mostrar Objeto
	4. Crear Array
	5. Mostrar Array
	6. Agregar contenido del objeto
	7. Elimine primer elemento del array
	8. Elimine ultimo elemento del array
	9. Eliminar cualquier elemento del array
	10. Agregar el objeto al comienzo del array
	11. Agregar el objeto al final del array
	12. Iterar array con objetos con FOR
	13. Iterar array con objetos con ForEach
	14. Iterar array con objetos con Map y crear copia
	0. Salir`);
     return parseInt(option);
}

const valid = () => {
    let o = menu();
	render_operation(o); 
}

const render_operation = (nu) => {
  let optionToHandler = {
	 1: operations.first,
	 2: operations.second,
     3: operations.third,
	 4: operations.fourth,
	 5: operations.fifth,
	 6: operations.sixth,
	 7: operations.seventh,
	 8: operations.eighth,
	 9: operations.ninth,
	 10:operations.tenth,
	 11:operations.eleventh,
	 12:operations.twelveth,
	 13:operations.thirteenth,
	 14:operations.fourteenth,
	 0: operations.zero
  };
  let result = optionToHandler[nu]
  optionToHandler[nu] != undefined ? result(nu) : alert("No existe esa opcion"); 
}

btn.addEventListener("click", valid); 