
function PrecioConDescuento(precio, descuento, cupon) {
    const porcentajeAPagar = (100 - descuento) + cupon;
    const precioConDescuento = (precio * porcentajeAPagar) / 100;

    return precioConDescuento;

}

// ------------------

function calcularPrecioConDescuento() {
    const precio = document.getElementById("InputPrice");
    const precioValor = InputPrice.value;

    const descuento = document.getElementById("InputDiscount");
    const precioDescuento = InputDiscount.value + ;

    // const cupon = document.getElementById("InputCoupon");
    // const precioCupon = InputCoupon.value;

    const precioConDescuento = PrecioConDescuento(precioValor, precioDescuento, precioCupon)

    const PriceToPay = document.getElementById("PriceToPay")
    PriceToPay.innerText = "El precio con descuento de Q" + precioDescuento + " es de Q" + precioConDescuento + ".";

}
























// cODIGO ORIGINAL

// function PrecioConDescuento(precio, descuento) {
//     const porcentajeAPagar = 100 - descuento;
//     const precioConDescuento = (precio * porcentajeAPagar) / 100;

//     return precioConDescuento;

// }

// // ------------------

// function calcularPrecioConDescuento() {
//     const precio = document.getElementById("InputPrice");
//     const precioValor = InputPrice.value;

//     const descuento = document.getElementById("InputDiscount");
//     const precioDescuento = InputDiscount.value;

//     const precioConDescuento = PrecioConDescuento(precioValor, precioDescuento)

//     const PriceToPay = document.getElementById("PriceToPay")
//     PriceToPay.innerText = "El precio con descuento de Q" + precioDescuento + " es de Q" + precioConDescuento + ".";

// }

