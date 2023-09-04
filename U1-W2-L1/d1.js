/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/

//Abbbiamo 3 principali datatype in JavaScript:
let type1 = "Stringa" //dato stringa, composto da una sequenza di caratteri
let type2 = 2 //dato numerico
let type3 = true //dato booleano, ha due valori true o false
//esistoo poi due valori speaciali che sono:
let type4 = null //indica l'assenza di un valore
let type5 = undefined // dichiara la variaile, ma non il suo valore

/* ESERCIZIO 2
 Crea una variable chiamata "name" e assegna ad essa il tuo nome, sotto forma di stringa.
*/
let name = "Bianca"


/* ESERCIZIO 3
 Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/
let n1 = 12
let n2 = 20
//otteniamo la somma con due passaggi:
n2 += n1 // equivale a (n2 = n2 + n1)
//oppure
let n3 = n1 + n2 

/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/
let x = 12

/* ESERCIZIO 5
  Riassegna un nuovo valore alla variabile "name" già esistente: il tuo cognome.
  Dimostra l'impossibilità di riassegnare un valore ad una variabile dichiarata con il costrutto const.
*/
name = "iancu"
const surname = "iancu"
//surname = "rossi" risultato console = Uncaught TypeError: Assignment to constant variable.

/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/
let y = 4
x -= y 
//oppure
let a = x - y 

/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 EXTRA: verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
*/
let name1 = "john"
let name2 = "John"
console.log(name1 === name2) //false
console.log(name1 != name2) //true

console.log(name1.toLowerCase === name2.toLowerCase)


