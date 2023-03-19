let obj; 
let arr;

export default {
    first(n){return alert(`La opcion que escogio es ${n}`)},

    second() {
        obj = {};
        alert("Se creo el objeto")
        return obj;
    },
    
    third() {return obj == undefined ? alert("No tiene datos el objeto") : alert(JSON.stringify(obj))},

    fourth() {
        arr = [];
        alert("Se creo el array")
        return arr;     
    },

    fifth() {return arr == undefined ? alert("No tiene datos el array") : alert(JSON.stringify(arr))},

    sixth() {
        if(obj == undefined) return alert("Cree el objeto primero"); 
        let prop = prompt("Ingrese la propiedad");
        let value = prompt("Ingrese el valor de esa propiedad");
        obj[prop] = value;
        return obj; 
    },
    
    seventh(){
        if(arr == undefined || arr.length < 1) return alert("No se puede eliminar el primero elemento, porque no tiene contenido"); 
        arr.shift(); 
        return (alert("Se elimino el primero elemento", arr)); 
    },

    eighth(){
        if(arr == undefined || arr.length < 1) return alert("No se puede eliminar el ultimo elemento, porque no tiene contenido"); 
        arr.pop(); 
        return (alert("Se elimino el utlimo elemento", arr)); 
    },

    ninth() {
      if(arr == undefined || arr.length < 1) return alert("El array no esta definido o no tiene elementos"); 
      let pos = prompt("Ingrese la posicion del elemento que quiere eliminar"); 
      arr[pos] != undefined ? delete(arr[pos]) : alert("Esa posicion del array no esta definida");  // delete() deja por defecto el valor null
      return arr; 
    },

    tenth() {
        if(arr == undefined) return alert("Cree el array primero"); 
        arr.unshift(obj)
        return (alert("Se agrego elemento al principio del array"),arr); 
    },

    eleventh() {
        if(arr == undefined) return alert("Cree el array primero"); 
        arr.push(obj)
        return (alert("Se agrego elemento a lo ultimo del array"),arr); 
    },
    twelveth() {
        if(arr == undefined || arr.length < 1) return alert("El array no esta definido o no tiene elementos");
        for(let x = 0; x < arr.length; ++x){
            alert(JSON.stringify(arr[x])); 
        }
    },

    thirteenth() {
        if(arr == undefined || arr.length < 1) return alert("El array no esta definido o no tiene elementos");
        arr.forEach(obj => alert(JSON.stringify(obj))); 
    },

    fourteenth() {
        if(arr == undefined || arr.length < 1) return alert("El array no esta definido o no tiene elementos");
        let eachObj = arr.map(obj => JSON.stringify(obj)); 
        return alert(eachObj); 
    },
    zero() {
        alert("Cerrando menu"); 
        return; 
    }
}