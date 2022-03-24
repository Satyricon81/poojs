// Funcion constructora = Plantilla = Class
/* function Persona(nombre){
    this.nombre = nombre

    this.saludar = function (){
        return `${this.nombre} dice hola`
    }

    //Este prototipo que hemos añadido (saludarIngles) pasara a todos las new Persona creadas. Es decir tanto la funcion de saludar como la de saludarIngles la tienen tanto Pablo como Miguel.
    this.saludarIngles = function (){
        return `${this.nombre} dice hello`
    } 
} */

//Prototipos aparte para crearlas fuera del constructor y que no se añadan automaticamente a todas las personas.Vamos a crear un prototipo de la persona, no de Pablo o Miguel.
/* Persona.prototype.saludarIngles = function (){
    return `${this.nombre} dice hello`
} */

//Instancias de objetos creados a partir de la plantilla de arriba.

//new. se usa  para indicarle al navegador que queremos crear una nueva instancia del objeto, seguida del nombre de la función con sus parámetros requeridos entre paréntesis, y el resultado se almacena en una variable
/* const pablo = new Persona("Pablo")
const miguel = new Persona("Miguel")
console.log(pablo)
console.log(miguel)
console.log(pablo.saludarIngles()) */


//Misma ejercicio anterior con CLASS

class Persona {
    constructor(nombre, edad) {
        this.nombre = nombre
        this.edad = edad
    }
    
    saludar() {
        return `${this.nombre} dice hola`
    }
    //Getter & Setter//
    get getNombre() {
        return this.nombre
    }

    set setNombre(nombre) {
        this.nombre = nombre
    }
    //Fin Getter & Setter//
    static probarSaludo(nombre) {
        return `${nombre} probando el saludo`
    }
    //Extends (herencia)//

}

//Metodo static//
/* console.log(Persona.probarSaludo("Pedro")); */

//Class extends para que por ejemplo Estudiante herede los metodos de Persona.
class Estudiante extends Persona {
    //Se añaden los parametros del constructor padre mas los que se quieran añadir. En este caso notaMedia. A los anteriores que queremos que se mantengan como nombre y edad los llamamos mediante super. El añadido en el constructor Estudiante se le llama mediante el metodo this.
    constructor(nombre, edad, notaMedia) {
        super(nombre, edad)
        this.notaMedia = notaMedia
    }

    //Este metodo saludar reemplaza al metodo saludar dentro del constructor. Reemplaza a la funcion saludar "padre". Esto se llama polimorfismo.
    saludar() {
        return `${this.nombre} dice hola desde la extension de Persona`
    }

}

const pablo = new Estudiante ("Pablo", 40 , 7.5)
console.log(pablo);
console.log(pablo.saludar());

//Los metodos creados como saludar aparecen ahora, tras utilziar CLASS en la cadena de prototipos, fuera de la funcion constructora. Nos evitamos el codigo de las lineas 15-18.
/* const pablo = new Persona("Pablo")
const miguel = new Persona("Miguel")
console.log(pablo)
console.log(miguel)
console.log(pablo.saludar()) */

//Aqui renombramos pablo a miguel.
/* const pablo = new Persona("Pablo")
//Getter & Setter//
console.log(pablo.getNombre)
pablo.setNombre = "Miguel" */
//Fin Getter & Setter//


