function fizzBuzz() {
    // recorrer del 1 al 100
    for (let index = 1; index <= 100; index++) {
      //si valor de index dividido poe 3y5 da residuo 0
        if (index%3===0 && index%5===0) {
            console.log("FizzBuzz");
        } else if (index%3===0){ ////si valor de index dividido poe 3 da residuo 0
            console.log("Fizz");
        }else if (index%5===0){ //si valor de index dividido poe 5 da residuo 0
            console.log("Buzz");
        }else{
            console.log(index);
        }
    }
}
//llamando la funcion
fizzBuzz();