// https://blog.pleets.org/article/es/decoradores-en-typescript

/*

// Tres prototipos para la decoracion en las clases

// función decoradora de clase ( Se utiliza en el constructor )
function classDecorator(target: any)
{
    // function body
}

// función decoradora de propiedades
function propertyDecorator(target: any, propertyKey: string)
{
    // function body
}

// función decoradora de métodos
function methodDecorator(target: any, propertyKey: string, descriptor: PropertyDescriptor)
{
    // function body
}

@classDecorator
class MyClass {
  @propertyDecorator
  myProperty: string = '';

  @methodDecorator
  myMethod() {}
}


*/


/*
Fabrica de decoradores (wrapper que devuelve el decorador , util para pasar parametros)

function propertyDecorator()
{
   // factory body
   return function(target: any, propertyKey: string)
   {
      // decorator body
   }
}

// se invoca llamando entre parentesis

@propertyDecorator()
myProperty: string = '';


*/

// Decorador de clase
// eslint-disable-next-line @typescript-eslint/ban-types
function logClass(target: Function) {
    console.log("Este es un Log de la Class")
    console.log("Class:", target);
}

// Decorador de Metodos
// eslint-disable-next-line @typescript-eslint/no-unused-vars, @typescript-eslint/no-explicit-any
function logObsoleto(target: object, propertyKey: string, descriptor: any) {

     console.log(`el metodo ${propertyKey} ha quedado obsoleto` )
}

// decorador de Propieadd
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function cambioProp(target: any, propertyName: string) {

    let value = target[propertyName];

    const getter = () => {
       //return `${value} USD`;
       return value;
    };
 
    const setter = (newValue: string) => {
        value = newValue.toUpperCase()
       //value = newValue;
    };
 
    Object.defineProperty(target, propertyName, {
       get: getter,         // aquí definimos el getter
       set: setter,         // aquí definimos el setter
       enumerable: true,    // la propiedad se puede iterar
       configurable: true,  // la propiedad no se puede eliminar
    });

   //  console.log(propertyName.toUpperCase())
}
 
 // eslint-disable-next-line @typescript-eslint/ban-types, @typescript-eslint/no-unused-vars, @typescript-eslint/no-explicit-any
 function logMethod(target: Object, propertyKey: string, descriptor: any) {
     console.log("Este es un Log Method de la Class")
     console.log("Class:", target);
     console.log('Clase: ', target.constructor.prototype);
     console.log('Método: ', propertyKey);
     console.log('Property Descriptor: ', descriptor);
     // eslint-disable-next-line @typescript-eslint/no-explicit-any
     descriptor.value = function (...args: any[]) {
         console.log('Argumentos de la funcion', args);
     }
     return descriptor;
  }
   

 @logClass // @logClass is a decorator
 class MyClass2 {
     constructor() { console.log("Se ha creado esta clase MyClass ");}
 
     @cambioProp
     nombre: string = 'Mi Nombre'
 
     @logObsoleto
     metodo1(){
         console.log("soy el metodo1")
     }
 
 }
 
 const myInstance2 = new MyClass2();
 myInstance2.metodo1();
 myInstance2.nombre = "Soy el Nombre";

 console.log(myInstance2.nombre)
