/*
Scrivi un programma che stampi i numeri da 1 a 100.
Per i multipli di 3 stampi “Fizz” al posto del numero.
Per i multipli di 5 stampi Buzz.
Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz.
*/

//1. Stampo tutti i numeri da 1 a 100
for ( var i = 1; i <= 100; i++) {
  /* 2. intercetto i multipli di 3 e di 5 e stampo
  in cima alle condizioni metto sempre la più specifica
  */
  if (i % 3 == 0 && i % 5 == 0){
    document.getElementById('lista').innerHTML = document.getElementById('lista').innerHTML + '<li> FizzBuzz </li>';
    // 3. intercetto i multipli di 3 e stampo
  } else if (i % 3 == 0) {
    document.getElementById('lista').innerHTML = document.getElementById('lista').innerHTML + '<li> Fizz </li>';
    // 4. intercetto i multipli di 5 e stampo
  } else if (i % 5 == 0) {
    document.getElementById('lista').innerHTML = document.getElementById('lista').innerHTML + '<li> Buzz </li>';
    // 5. stampo il resto dei numeri
  } else {
    document.getElementById('lista').innerHTML = document.getElementById('lista').innerHTML + '<li>' + i + '</li>';
  }
}
