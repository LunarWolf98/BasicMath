console.group("Cuadrados con Function")

function perimetroCuadrado(lado, ) {
    return lado * 4;
}

function areaCuadrado(lado) {
    return lado ** 2 ;
}

console.groupEnd()

// Formulas para el triangulo

console.group("Triangulos con Function")

const alturaTriangulo = (lado, base) => Math.sqrt( (lado **2) - ((base **2) / 4) )

const perimetroTriangulo = (lado1, lado2, base) => lado1 + lado2 + base ;

const areaTriangulo = (base, altura) => (base * altura) / 2;

console.groupEnd()

// Formulas para el Circulo

console.group("circulos con Function")

const pi = Math.PI ;

function diametroCirculo(radio) {
    return radio * 2;
}

function perimetroCirculo(radio) {
    return 2 * pi * radio;
}

function areaCirculo(radio) {
    return pi * (radio ** 2);
}

console.groupEnd()

// Aca inicia la interaccion con HTML
// empezamos con el cuadrado

function calcularPerimetroCuadrado() {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const perimetro = perimetroCuadrado(value);
    alert(`El perimetro es ${perimetro}cms`);
}

function calcularAreaCuadrado() {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const area = areaCuadrado(value);
    alert(`El area es ${area}cms`);
}

// aqui va el triangulo

function calcularAlturaTriangulo() {
    const input1 = document.getElementById("InputLadoTriangulo");
    const value1 = Number(input1.value);

    const input2 = document.getElementById("InputBasTriangulo");
    const value2 = Number(input2.value);

    const altura = alturaTriangulo( value1, value2 )
    alert(`La altura es ${altura}cms, apunta este dato`)

}

function calcularPerimetroTriangulo() {
    const input1 = document.getElementById("InputLadoCortoTriangulo");
    const value1 = Number(input1.value);

    const input2 = document.getElementById("InputLadolargoTriangulo");
    const value2 = Number(input2.value);

    const input3 = document.getElementById("InputBaseTriangulo");
    const value3 = Number(input3.value);

    const perimetro = perimetroTriangulo( value1, value2, value3 )
    alert(`El perimetro es ${perimetro}cms`)
}

function calcularAreaTriangulo() {
    const input1 = document.getElementById("InputBaseTriangulo");
    const value1 = Number(input1.value);

    const input2 = document.getElementById("InputAlturaTriangulo");
    const value2 = (input2.value);

    const area = areaTriangulo( value1, value2 );
    alert( `El area es ${area}cms` )

}

// Aqui continuamos con el circulos

function calcularPerimetroCirculo() {
    const input = document.getElementById("InputRadioCirculo");
    const value = Number(input.value);

    const perimetro = perimetroCirculo(value);
    alert(`El perimetro del circulo es ${perimetro}cms`)

}

function calcularAreaCirculo() {
    const input = document.getElementById("InputRadioCirculo");
    const value = Number(input.value);

    const area = areaCirculo(value);
    alert(`El area del circulo es ${area}cms`)

}