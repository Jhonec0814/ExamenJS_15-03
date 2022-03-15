// Ejercicio 2 Han solo y Chewbacca

function GuardarPlanos(p1,p2,p3,p4,p5, checkplanos){
    
    let planos = Array(p1,p2,p3,p4,p5)

    checkplanos(planos)
}


GuardarPlanos(1,4,8,10,15,function(plano){


    for(let i=0;i<plano.length; i++){
        if(plano[i]>=1 && plano[i]<=10){
            console.log(`Planos encontrados ${plano[i]}, podemos despegar!`)
        }
        else
        {
            console.log(`Planos falsos encontrados ${plano[i]}.`)
        }
    
    }
    
})