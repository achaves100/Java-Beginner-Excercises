//definimos la funcion q recibe de parametro color
//esta funcion retornara un valor booleano osea true si lo encuentra el color
//false si lo encuentra

//nos pide ingresar por consola un color
var colorname = prompt('What color do you want?');

function getColor(selection) {
    //te permite evaluar cuando tienes muchas condiciones, es una mejor version de if()elseif()//elseif()else
    switch (selection.toLowerCase()) {
        //caso sea rojo retorna valor boolean true
        case 'red': return true;
        //caso sea azul retorna valor boolean true
        case 'blue': return true;
        //caso sea verde retorna valor boolean true
        case 'green': return true;
        //caso no encontro ninguna opcion retorna valor boolean false
        default: return false;  //returns false because the user picked an unavailable color
    }
}

//colorname es la variable q guardamos lo q se ingreso en consola, le pasamos a la funcion
var isAvailable = getColor(colorname.trim());//funcion devuelve true/false y Trim (remueve espacios)
//evaluamos la variable

if (isAvailable)//si es true
    console.log('Good news! That color is available');
else //si es false
    console.log('We are sorry, that color is not available');