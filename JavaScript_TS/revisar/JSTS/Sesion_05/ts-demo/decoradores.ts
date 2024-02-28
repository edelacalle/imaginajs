

function setApiPath(path: string) {
    return function (target: any) {
        target.prototype.apiPath = path;
    }
}
   
   @setApiPath("/users")
   class UserService {
    // …
    apiPath?:string
    
   }

   console.log("test")
   console.log(new UserService().apiPath); // "/users"

   console.log("fin");
   



function manipuloClase(path: string) {
    return function (target: any) {
        target.prototype.apiPath = path;
    }
}



   
   //@setApiPath("/users")
   //class UserService {
    // …
   //}
   //console.log(new UserService().apiPath); // "/users"






function manipuloProp(target: any, propertyName: string) {

    let value = target[propertyName];

    const getter = () => {
       return value;
    };
 
    const setter = (newValue: string) => {
        value = newValue.toUpperCase()
    };
 
    Object.defineProperty(target, propertyName, {
       get: getter,         // aquí definimos el getter
       set: setter,         // aquí definimos el setter
       enumerable: true,    // la propiedad se puede iterar
       configurable: true,  // la propiedad no se puede eliminar
    });
}

@manipuloClase('/api/users.json')
class Persona {
    apiPath?:string;
    @manipuloProp
    nombre:string = "";
    constructor(nombre:string){
        console.log("estoy en el constructor con ", nombre)
        this.nombre = nombre;
    }

    setName(valor:string):void{
        this.nombre = valor;

    }
    saluda():string{
        return `Hola , me llamo ${this.nombre}`
    }
}


let obj = new Persona("Antonio");

let nose = obj.saluda();
console.log("ha devuelto nose ", JSON.stringify(obj) , nose   );

obj.setName("otro con minusculas");
console.log("y ahora", obj.saluda());

console.log("ultima prueba ", obj.apiPath);



