//Don José todos los martes y jueves realiza un 20% de descuento en el total de las
//compras, crea una función la cual debe recibir un parámetro del día y el arreglo de
//valores de los productos a comprar, esta debe retornar el total final de la compra según
//corresponda o no descuento

var Diadecompra

    var num1 = num1;
    var lunes
    var martes
    var miercoles
    var jueves
    var viernes
    var sabado
    var domingo

    function Diadecompra(num1){
    
    if(jueves === true){
      console.log(num1/20);

    }else if(martes === true){
        console.log(num1 / 20);
    }
     else{
        console.log(num1)
     }
    
     Diadecompra(1000)
    }

    // Pseudo codigo - 
    
    //inicio
    //sacar variables y declararlas
    // hacer una funcion que pueda entender que al ingresar un dia en especifico debe hacer el descuento correspondiente
    // solo se hacen descuentos los dias jueves y martes (20%) (valor total / 20 )
    // crear if y else if para los 2 dias que corresponden mas la funcionalidad del descuento (numero / 20%)
    //si no se cumple la compra en ninguno de los 2 dias NO hacer descuento 
    //fin 


    /*EJERCICIO 2  */
//Don José hace un 5% de descuento a los clientes que compran más de 3 productos y al
//menos uno de ellos tiene un valor mayor a 10.000, realiza una función que calcule el
//total verificando si corresponde o no el descuento.

//pseudo codigo 
//inicio
// crear variables y declararlas 
// hacer una funcion que ejecute un descuento del 5% (precio valor total / 5)
// crear con condicionales if else if y else el algoritmo
// si el cliente lleva mas de 3 productos en la compra total SI se efectua el descuento 
// si el cliente no lleva mas de 3 productos en la compra total NO se efectua el descuento
//fin

/*EJERCICIO 3  */
//Se desea tener una función verificadora encargada de revisar si dentro de el arreglo de
//valores de los productos a comprar no existan valores negativos ingresados por error,
//en caso de no existir debe retornar un mensaje de éxito, en caso contrario debe retornar
//un mensaje de error junto con el número negativo y el índice en el que se encontraba.

//inicio
//crear variables y declararlas 
// hacer una funcion que verifique si dentro de la lista de productos que lleva no lleve productos con valor negativo
// crear condicionales para saber si son productos negativos o positivos
// con una matriz detectar la posicion de cada numero ingresado 
// if(producto positivo == numero positivo 'Este producto si funciona')
//else (producto negativo == numero negativo 'Este producto es NEGATIVO e indicar posicion donde se encontraba')
// fin 