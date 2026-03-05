const numero1 = 20
const numero2 = 30
function suma (a,b){
    return a+b;
}
function resta (a,b){
    return a-b;
}
function multiplicacion (a,b){
    return a*b;
}
function dividir(a,b){
    if (b==0){
        return"no se divide en zero"
    }
    return a/b;
}
const resultadosuma = suma(numero1, numero2);
const resultadoresta = resta(numero1, numero2);
const resultadomultiplicacion = multiplicacion(numero1, numero2);
const resultadodividir = dividir(numero1, numero2);

console.log(`The result of ${numero1} + ${numero2} is ${resultadosuma}`);
console.log(`The result of ${numero1} + ${numero2} is ${resultadoresta}`);
console.log(`The result of ${numero1} + ${numero2} is ${resultadomultiplicacion}`);
console.log(`The result of ${numero1} + ${numero2} is ${resultadodividir}`);