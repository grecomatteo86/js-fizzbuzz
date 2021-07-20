for ( var i = 1; i <= 100; i++) {
  if (i % 3 == 0 && i % 5 == 0){
    document.getElementById('numbers_list').innerHTML += '<li> FizzBuzz </li>';
  } else if (i % 3 == 0) {
    document.getElementById('numbers_list').innerHTML += '<li> Fizz </li>';
  } else if (i % 5 == 0) {
    document.getElementById('numbers_list').innerHTML += '<li> Buzz </li>';
  } else {
    document.getElementById('numbers_list').innerHTML += '<li>' + i + '</li>';
  }
}
