//generar el numero aleatorio
const spinChamber = () => {
  var chamberPosition = Math.floor((Math.random() * 6) + 1);
  return chamberPosition;
};
//funcion disparar dado un numero
const fireGun = (spinnerPosition) => {
    //preguntamos si el numero aleatorio es igual al ingresado por parametro
    if (spinChamber()===spinnerPosition) return ("You're dead!");
    else return ("Keep playing!");
};
var bulletPosition = 4; //se ingresa como parametro
console.log(fireGun(bulletPosition)); //se ejecuta la funcion disparar