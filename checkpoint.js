// ----- IMPORTANTE -----

// IMPORTANTE!: Para este checkpoint tendrán en el archivo DS.js las implementaciones ya realizadas en las
// homeworks de Queue, LinkedLis y BinarySearchTree. Sobre dicha implementación van a tener que agregar nuevos
// métodos o construir determinadas funciones explicados más abajo. Pero todos los métodos ya implementados
// en las homeowrks no es necesario que los vuelvan a definir.
// NO DEBEN MODIFICAR EL ARCHIVO DS.js SINO QUE TODO SU CÓDIGO TENDRÁ QUE ESTAR EN ESTE ARCHIVO checkpoint.js

const {
  Queue,
  Node,
  LinkedList,
  BinarySearchTree
} = require('./DS.js');

// ----------------------

// ----- Recursión -----

// EJERCICIO 1
// Implementar la función isAncestor: debe determinar si dado dos nombres de personas las mismas
// son parientes o no (La primera debe ser ancestro de la segunda). La función recibira un objeto
// que va a representar sólo la parte femenina del "arbol genealogico" familiar y será de la siguiente forma:
// const genealogyTree = {
//   "Mona Simpson": [],
//   "Marge Simpson": ["Lisa Simpson", "Maggie Simpson"],
//   "Jacqueline Bouvier": [ "Patty Bouvier", "Marge Simpson", "Selma Bouvier"],
//   "Patty Bouvier": [],
//   "Selma Bouvier": ["Ling Bouvier"],
//   "Edwina": ["Abigail Simpson"],
//   "Lisa Simpson": [],
//   "Maggie Simpson": [],
//   "Ling Bouvier": []
// }
// Ejemplo:
//  - Caso que devuelve true --> isAncestor(genealogyTree, "Jacqueline Bouvier", "Maggie Simpson")
//  - Caso que devuelve false --> isAncestor(genealogyTree, "Jacqueline Bouvier", "Abigail Simpson")
//  [Observar los tests para otros casos]

var isAncestor = function(genealogyTree, ancestor, descendant){
  // Tu código aca:



}


// EJERCICIO 2
// Secuencia inventada: f(n) = f(n-1) x f(n-2) - f(n-2)
// Siendo f, secuenciaHenry.
// Donde las primeras dos posiciones son dadas por el parametro recibidos y a partir de
// la siguiente se calcula como la multiplicación de los 2 números anteriores restados al número anterior.
// object es un objeto del cual debemos obtener f(0) y f(1) siguiendo la siguiente lógica:
// f(0) será el valor de la propiedad llamada 'first'
// f(1) será un número igual a la cantidad de propiedades de obj
// Por ejemplo si recibimos: 
// var obj = {
//   1: true,
//   first: 2,
//   7: ['F','r','a','n','c','o!'],
//   h: {a: 1},
//   z: [],
//   a: 1,
//   b: 2,
//   c: 3,
//   d: 4
// }
// deberíamos tener los siguientes 2 valores iniciales
// secuenciaHenry(0) = 2 y secuenciaHenry(1) = 9
// A partir de ahí la tercera posición sería  9 x 2 - 2 = 16 y así sucesivamente
// La función secuenciaHenry debe devolver el enésimo numero de la serie, por ejemplo para el objeto
// antes mencionado:
// secuencia: 2, 9, 16, 135, 2144, 289305
// secuenciaHenry(0) // 2  ya que el elemento de la posición 0 es cero
// secuenciaHenry(1) // 9 ya que el elemento de la posición 1 es 1
// secuenciaHenry(5) // 289305 ya que el elemento de la posición 5 es 289305
// Para números negativos de n debe devolver null
// PISTA: Pueden utilizar el método Object.keys() para f(1)

function secuenciaHenry(obj, n) {
  // Tu código aca:

}

// ---------------------

// ----- LinkedList -----

// EJERCICIO 3
// Implementar el método size dentro del prototype de LinkedList que deberá retornar el tamaño actual de
// la LinkedList. En el caso de que la lista se encuentre vacía deberá retornar cero.
// Ejemplo:
//    var lista = new LinkedList();
//    lista.size(); --> 0
//    lista.add(1);
//    lista.size(); --> 1
//    lista.add(2);
//    lista.add(3);
//    lista.size(); --> 3

LinkedList.prototype.size = function(){
  // Tu código aca:
  var longitud = 0; // Aca guardamos el valor del tamaño de la lista.
  if(this.head === null){ // Primero preguntamos si el indicador de la cabeza apunta a null.
    return 0; // Si es asi que retorne 0, porque no tiene valor
  } 
    else {
      var current = this.head; // Guardamos el nodo acutal en current
      longitud+=1; // como nos aseguramos de que ya hay un elemento, aumentamos la longitud en 1
      while (current.next) { // Mientras el indicador de current sea distinto de null, repetimos
        longitud+= 1; // aumentamos la longitud en 1
        current = current.next; // iteramos al siguiente nodo
    }
    return (longitud); // devolvemos el tamanio de la lista
  }
}


// EJERCICIO 4
// Implementar el método switchPos dentro del prototype de LinkedList que deberá intercambiar
// el elemento que se encuentre en pos1 con el elemento en pos2
// En el caso de que alguna de las dos posiciones no sea válida (Supere el tamaño de la lista actual 
// o sea un número negativo) debe devolver false.
// Si los nodos fueron removidos correctamente devolver true.
// Aclaración: la posición cero corresponde al head de la LinkedList
// Ejemplo 1:
//    Suponiendo que la lista actual es: Head --> [1] --> [2] --> [3] --> [4] --> [5]
//    lista.switchPos(1,3);
//    Ahora la lista quedaría: Head --> [1] --> [4] --> [3] --> [2] --> [5]
//    y la función debería haber devuelto true
// Ejemplo 2:
//    Suponiendo que se pide una posición inválida: removeFromPos(8) --> false

LinkedList.prototype.switchPos = function(pos1, pos2){

    // Tu código aca:
    var current = this.head;
    var current2 = this.head;
    if (pos1 > this.size() || pos2 > this.size() || pos1 < 0 || pos2 < 0) return false;
    else if (this.head === null) return false;
    else {
      for (var i = 0; i < pos1; i++) {
        current = current.next;
      }
      var auxiliarValor = current.value;
      for (var i = 0; i < pos2; i++) {
        current2 = current2.next;
      }
      var auxiliarValor2 = current2.value;
      current.value = auxiliarValor2;
      current2.value = auxiliarValor;
      return true;
    }

}

// EJERCICIO 5
// Implementar la función mergeLinkedLists que, a partir de dos listas simplemente enlazadas 
// del mismo tamaño retorne una nueva lista con los elementos de ambas listas
// Ejemplo:
//    Lista 1: Head --> 1 --> 7 --> 20 --> null
//    Lista 2: Head --> 4 --> 13 --> 2 --> null
//    Lista nueva luego de aplicar mergeLinkedLists:
//             Head --> 1 --> 4 --> 7 --> 13 --> 20 --> 2 --> null
// Nota: las listas enlazadas mergeadas intercalandose.
// El nodo 1 de la lista 1, se conecta con el nodo 1 de la lista 2.
// Continuando con el nodo 2 de la lista 2, conectandose con el nodo 2 de la lista 2.
var mergeLinkedLists = function(linkedListOne, linkedListTwo){
  
    var mergelista = new LinkedList(); // creo la nueva lista, en la cual voy a agregar los nodos intercalados.
    var current1 = linkedListOne.head // guardo primer elmento de la lista uno
    var current2 = linkedListTwo.head // guardo primer elmento de la lista uno
  
    if( linkedListOne.head === null ){ // si la lista uno esta vacia
      return linkedListTwo; // retorno solo la lista 2
    } else if (linkedListTwo.head === null){ // si la lista 2 esta vacia
      return linkedListOne; // retorno la lista uno
    }
  
    while (current1 !== null && current2 !== null) { // Mientras el nodo1 y el nodo 2 sean distintos de null
      mergelista.add(current1.value) // agrego el nodo1 a la nueva lista
      mergelista.add(current2.value) // agrego el nodo2 a la nueva lista
  
      current1 = current1.next; // me muevo al siguiente nodo de la lista 1
      current2 = current2.next; // me muevo al siguiente nodo de la lista 2
    }
    return mergelista // Devuelvo la lista mergeada
  };



// ----------------------


// ----- QUEUE -----

// EJERCICIO 6
// Implementar la función cardGame: a partir de dos Queues que va a recibir como paráemtro que
// van a representar mazos de cartas de dos jugadores debemos determinar quien va a ser el ganador
// de este juego que va a tener la siguiente dinámica:
// - Los jugadores tendrán que defender su "Castillo" que contiene un total de 100 puntos de resistencia
// - Cada carta tendrá puntos de ataque (attack) y puntos de defensa (defense)
// - Ambos jugadores van a sacar las dos primeras cartas de su mazo
//      * La primera carta será su carta asignada para atacar
//      * La segunda carta será su carta asignada para defender
// - La carta asignada para atacar del jugador uno se enfrentará contra la carta asignada para defender
//   del jugador dos y viceversa. Si el ataque supera los puntos de defensa el daño sobrante será aplicado
//   sobre el castillo.
// - El juego finaliza cuando alguno de los dos castillos se quede sin puntos de resistencia o cuando los mazos
//   se acaben. En este último caso ganará aquel jugador que tenga mayor cantidad de puntos de resistencia
//   restantes en su castillo.
// La función deberá devolver un string indicando al ganador: 'PLAYER ONE' o 'PLAYER TWO' (Respetar mayúsculas) o
// 'TIE' en el caso de empate
// NOTA: Ambos mazos contienen la misma cantidad de cartas
//
// Ejemplo:
// Los jugadores levantan 2 cartas cada uno.
// La primera carta del jugador uno va a atacar a la segunda carta del jugador dos
// La primer carta del jugador dos va a atacar a la segunda carta del jugador uno
//
// Primer carta del jugador 1 (ATAQUE) vs Segunda carta del jugador 2 (DEFENSA): 
// {attack: 5, defense: 5} vs {attack: 5, defense: 26}
// Ataque 5 vs Defensa 20 --> 5 no supera 20 --> No hay daño sobre el castillo
//
// Primer carta del jugador 2 (ATAQUE) vs Segunda carta del jugador 1 (DEFENSA): 
// {attack: 20, defense: 26} vs {attack: 15, defense: 10}
// Ataque 20 vs Defensa 10 --> 20 supera a 10 --> Como hay 10 puntos de diferencia esa cantidad de daño es aplicada
// al castillo del jugador 1 
//
// Una vez terminada la ronda, se procede a repetir lo mismo con las siguientes 2 cartas de cada jugaodr hasta
// finalizar el juego.


var cardGame = function(playerOneCards, playerTwoCards){
  // Tu código aca:

}

// ---------------


// ----- BST -----

// EJERCICIO 7
// Implementar la función height dentro del prototype de BinarySearchTree que debe devolver la "altura"
// máxima del arbol recibido por parámetro.
// Ejemplo:
//             16             ---> Nivel 1
//          /      \
//        6         23        ---> Nivel 2
//      /  \       /   \
//     2    14    17    31    ---> Nivel 3
//      \
//       5                    ---> Nivel 4
// Este arbol tiene una altura de 4
// PISTA: Una forma de resolverlo es pensarlo recursivamente y usando Math.max

BinarySearchTree.prototype.height = function(){
  // Tu código aca:

   //Caso base (nodos hoja) - El corte es cuando llegamos al nodo hoja, porque ya no tiene ningun nodo asociado y de ahi comenzamos a subir
  if (!this.value) {
    return 0;
  }


  if (this.left === null && this.right === null) { //No tengo left y tampoco right, por lo que este es un nodo hoja
    return 1;
  }

 //si no tengo hijo en el lado izquierdo y si derecho
  if (this.left === null) {
    return 1 + this.right.height(); //Aca devuelvo 1 por el nodo hoja + la altura del hijo derecho
  }

//si tengo hijo en el lado izquierdo y no derecho
  if (this.right === null) {
    return 1 + this.left.height(); //Aca devuelvo 1 por el nodo hoja + la altura del hijo izquierdo
  }

  // Con Math.max verifico cual es el más largo de ambos
  var left = this.left.height()
  var right = this.right.height()

  return 1 + Math.max(left, right) //Aca devuelvo la altura máxima 

}




// ---------------


// Ejercicio 8
// Dado un arreglo ordenado, encontrar el índice de un elemento específico pasado como parámetro
// utilizando el método conocido como búsqueda binaria. En el caso de que el número buscado no se encuentre
// en el array devolver -1.
// Para mayor información sobre dicho método:
//    - https://www.khanacademy.org/computing/computer-science/algorithms/binary-search/a/binary-search
//    - https://en.wikipedia.org/wiki/Binary_search_algorithm
// Ejemplo:
//    array = [1,2,3,4,5,6,7,8,9,10];
//    binarySearch(array, 2) --> Devolvería 1 ya que array[1] = 2
//    [Donde 2 sería el número sobre el cuál queremos saber su posición en el array]


var binarySearch = function (array, target) {
  // Tu código aca:

  var indexUno  = 0; // Defino mi primer posicion
  var indexUltimo  = array.length - 1; // Defino la ultima posicion
  var indexMedio = Math.floor((indexUltimo + indexUno)/2); // Defino el indice del medio del arraglo
  
  while(array[indexMedio] != target && indexUno < indexUltimo) // Mientras el valor del indice del medio sea distinto del valor a buscar y el incide uno sea menor al ultimo
  {
  if (target < array[indexMedio]) // Si el valor a buscar es menor que el valor con indice medio
    {
      indexUltimo = indexMedio - 1; // Esto quiere decir que el valor a buscar esta entre los indices bajos. Por eso cambio el indice ultimo por el del medio menos 1
    } 
  else if (target > array[indexMedio]) // si el valor a buscar es mayor que el del medio.
    {
        indexUno = indexMedio + 1; // Esto quiere decir que el valor a buscar esta entre los indices altos. Por eso cambio el indice uno
    }
    indexMedio = Math.floor((indexUltimo + indexUno)/2); // Cambio el valor del indice del medio y sigo iterando
  }
  return (array[indexMedio] === target) ? indexMedio : -1; // Retorno el valor del indice si esta ahi el valor o si no esta retorno el -1
}


// EJERCICIO 9
// Ordená un arreglo de objetos usando un bubble sort pero con algunas particularidades.
// Además del arreglo a ordenar (array) la función va a recibir como parámetro una función
// que va a ser quien va a determinar si un elemento es "mayor" al otro para determinar su
// posición final
// Ejemplo:
// var array = [
//   {name: 'Franco', age: 26, height: 1.85},
//   {name: 'Toni', age: 30, height: 1.75},
//   {name: 'Mati', age: 25, height: 1.77},
//   {name: 'Leo', age: 40, height: 1.83}
// ]
//
// orderFunction(array[0], array[1]) --> Devolvera 1 si están bien ordenados o -1 si hay que intercambiarlos
// Suponiendo que la orderFunction devuelve -1 si la edad del segundo elemento es menor que la del primero
// specialSort(array, orderFunction) --> Retornaría el siguiente array:
// [
//   {name: 'Mati', age: 25, height: 1.77},
//   {name: 'Franco', age: 26, height: 1.85},
//   {name: 'Toni', age: 30, height: 1.75},
//   {name: 'Leo', age: 40, height: 1.83}
// ]

var specialSort = function (array, orderFunction) {
  // Tu código aca:
  var seguirCambiando = true; //Aca defino una bandera, para poder seguir iterando en caso de que el arreglo siga desordenado

  do { //para repetir el proceso
    seguirCambiando = false; //Aca pongo la bandera para indicar la iteración
    for (var i = 0; i < array.length - 1; i++) {
      if (orderFunction(array[i], array[i + 1]) === -1) { //Aca comparo si los elementos del array estan desordenados
        var auxCambio = array[i + 1]; //Para guardar el valor del elemento siguiente para realizar el cambio
        array[i+1] = array[i]; //Asigno el elemento en la posición [i] a la posición i + 1
        array[i] = auxCambio; //Aca asigno mi elemento guardaro 
        seguirCambiando = true; //Aca pongo la bandera en true para indicar que hubo un cambio
      }
    }
  } while (seguirCambiando); //Aca pregunto si hubo en cambio y si lo hubo repetimos
  return array;
};


// ----- Closures -----

// EJERCICIO 10
// Implementar la función closureDetect que recibe como parámetro:
//  - Un array (symptoms) que va a contener en cada posición un string representando un
//    síntoma médico de alguna enfermedad
//  - Un número (min) que va a indicar la cantidad mínima de síntomas que debe tener un
//    paciente para considerar que posee la enfermedad
// Ejemplos:
//   var symptoms = ['fever', 'dry cough', 'tiredness', 'sore throat', 'diarrhoea', 'loss of taste', 'loss of smell'];
//   var covidDetector = closureDetect(symptoms, 3);
//
//   var personOne = {
//     name: 'Franco',
//     age: 26,
//     symptoms: ['fever', 'congestion', 'loss of taste', 'tiredness']
//   }
//
//   var personTwo = {
//     name: 'Toni',
//     age: 30,
//     symptoms: ['congestion', 'tiredness']
//   }
//
//   covidDetector(personOne); --> true
//   covidDetector(personTwo); --> false
//  [Observar los tests para otros casos]

function closureDetect(symptoms, min) {
  // Tu código aca:

 return function (paciente) { // Aca retorno la funcion interna el cual recibe un objeto paciente como argumento
    var cantidadSintomas = 0; // Defino la variable con la cual cuento la cantidad de sintomas del paciente
    var i = 0 // defino la variable con la que voy a iterar el arreglo de sintomas
    do { // comienza el loop para ver si un paciente supera el numero de sintomas o no.
      if (symptoms.includes(paciente.symptoms[i])) { // con el metodo includes, verifico que si el sintoma del paciente se enecuntra dentro del array
        cantidadSintomas++; // si el sintoma se encuentra, entonces sumo +1 al contador
      }
      i++; // aumento la variable para seguir iterando
    } while (i < symptoms.length); // mientras el indice sea menor al numero al tamaño del arreglo de sintomas seguir repitiendo.
    if (cantidadSintomas >= min) return true; // si el numero de sintomas del paciente es mayor o igual retorno verdader
    return false; // retorno falso en caso contrario
  }

}

// -------------------

module.exports = {
  isAncestor,
  secuenciaHenry,
  LinkedList,
  Queue,
  cardGame,
  binarySearch,
  specialSort,
  closureDetect,
  BinarySearchTree,
  mergeLinkedLists
}
