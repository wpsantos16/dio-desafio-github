function MeuErro(Arr, num) {
    try {
        if (!Arr && !num) throw new ReferenceError("Envie os parâmetros");

        if(typeof Arr !== 'object') 
        throw new TypeError("O array precisa ser do tipo object");

        if(typeof num !== 'number') 
        throw new TypeError("Num precisa ser do tipo number");
    
        if(Arr.length !== num) throw new RangeError("Tamanho inválido!");
    
        return Arr;
    }catch(e) {
    if(e instanceof ReferenceError){
        console.log("Este erro é um reference error!")
        console.log(e.message)
    }else if(e instanceof TypeError){
        console.log("Este erro é um TypeError!")
        console.log(e.message) 
    }else if(e instanceof RangeError){
        console.log("Este erro é um RangeError!")
        console.log(e.message)
    }else{
        console.log("Tipo de erro não esperado:" + e);
    }
}

}

console.log(MeuErro([1,2,3,4,5], 5));