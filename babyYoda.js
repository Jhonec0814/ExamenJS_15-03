function AsociarPadawan(nombre,planeta,edad,estatura,callback){

    setTimeout(function(){
        let padawan = {name:nombre, age:edad, planet:planeta, heigth:estatura}
        callback(padawan)

    },10000)

}

AsociarPadawan('Karen','Negus',20,'1.75',function(padawan){

    if (padawan.age<15){
        console.log(`Felicidades ${padawan.name}, se te asignara el manejo de la fuerza.`)
    }
    else{
        console.log(`Felicidades ${padawan.name}, se te asignara el manejo del sable de luz.`)
    }


})