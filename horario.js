var date = new Date();
let horaActual = 7
let minutosActuales = 32
let arrayparadas = [2,2,2,2,3,2,1,7,1,2,1,2,1,2,2]
console.log(horaActual,minutosActuales);



function frecuencia7(){
    if(minutosActuales<=8){
        return 8-minutosActuales;
    }else if(minutosActuales>8 && minutosActuales<=15){
        return 15-minutosActuales;
    }else if(minutosActuales>15 && minutosActuales<=23){
        return 23-minutosActuales;
    }else if(minutosActuales>23 && minutosActuales<=30){
        return 30-minutosActuales;
    }else if(minutosActuales>30 && minutosActuales<=38){
        return 38-minutosActuales;
    }else if(minutosActuales>45 && minutosActuales<=53){
        return 53-minutosActuales;
    }else if(minutosActuales>=53){
        return 60-minutosActuales;
    }

}
function frecuencia10(){
    if(minutosActuales<=10){
        return 10-minutosActuales;
    }else if(minutosActuales>10 && minutosActuales<=20){
        return 20-minutosActuales;
    }else if(minutosActuales>20 && minutosActuales<=30){
        return 30-minutosActuales;
    }else if(minutosActuales>30 && minutosActuales<=40){
        return 40-minutosActuales;
    }else if(minutosActuales>40 && minutosActuales<=50){
        return 50-minutosActuales;
    }else if(minutosActuales>50 && minutosActuales<=60){
        return 60-minutosActuales;
    }

}
function frecuencia15(){
    if(minutosActuales<=15){
        return 15-minutosActuales;
    }else if(minutosActuales>15 && minutosActuales<=30){
        return 20-minutosActuales;
    }else if(minutosActuales>30 && minutosActuales<=30){
        return 30-minutosActuales;
    }else if(minutosActuales>30 && minutosActuales<=40){
        return 40-minutosActuales;
    }else if(minutosActuales>40 && minutosActuales<=50){
        return 50-minutosActuales;
    }else if(minutosActuales>50 && minutosActuales<=60){
        return 60-minutosActuales;
    }

}

function frecuencia(){
    if(horaActual>4 && horaActual<6){
        frecuencia15();
    }else if(horaActual>6 && horaActual<10){
        if(horaActual == 10 && minutosActuales>15){

        }else{
            console.log(frecuencia7())
        }
    }else if(horaActual>10 && horaActual<22){
        frecuencia10()
    }
}


