let alimentos=["coco","piña","lagartija","carne","atun","manzana"]
let tipos = ["vegetal","animal","insecto"]


let comidas=[]

for(let i=0; i<50; i++){

    let comida={}

    comida.Alimento = console.log(alimentos[Math.floor(Math.random()*alimentos.length)])
    comida.Tipo= console.log(tipos[Math.floor(Math.random()*tipos.length)])
    comida.nivelEnergia= console.log((Math.floor((Math.random()*(500-100+1))+100)))


    comida.push(comidas)


}

// Empieza mi ejercicio

function clasificarComida(comidas,callback){

    


}