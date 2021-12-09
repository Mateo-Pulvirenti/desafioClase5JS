class Products{
    constructor(articulo, tamaño, marca, precio, promo){
        this.articulo = articulo;
        this.marca = marca;
        this.tamaño = tamaño;
        this.precio = precio;
        this.promo = promo;
    }
}

const tabacoLasHojas = new Products('Tabaco', 'Las Hojas', '50 gramos', 260, '2x$390. Ahorras $130');
const tabacoVanHaasen = new Products('Tabaco', 'Van Hasen', '30 gramos', 440, '2x$770. Ahorras $110');
const tabacoVanKiff = new Products('Tabaco', 'Van Kiff', '30 gramos', 400);
const filtrosLibellaRegular = new Products('Filtros', 'Libella', '8mm 200 unidades', 160);
const filtrosLibellaSlim = new Products('Filtros', 'Libella', '6mm 200 unidades', 170);
const filtrosStampsSlim = new Products('Filtros', 'Stamps', '6mm 120 unidades', 150);
const filtrosStampsSlimEcono = new Products('Filtros', 'Stamps', '6mm 250 unidades', 220, '2x$340. Ahorras $100');
const papelMoon = new Products('Papelillos blanqueados/sin blanquear/cañamo', 'Moon', '50 unidades', 50, '2x$90');
const papelStamps = new Products ('Papelillos blanqueados/sin blanquear/cañamo', 'Stamps', '50 unidades', 80, '2x$120');
const papelStampsEcono = new Products('Papelillos de cañamo', 'Stamps', '300 unidades', 350);


//muestra un prompt con la lista de productos detallada, para que el usuario elija el que le interesa
function productList(){ 
    parseInt(prompt(`Elija el producto que le interesa (numero de la lista):
    1- ${tabacoLasHojas.articulo} ${tabacoLasHojas.marca}, ${tabacoLasHojas.tamaño}: $${tabacoLasHojas.precio} o ${tabacoLasHojas.promo}.
    2- ${tabacoVanHaasen.articulo} ${tabacoVanHaasen.marca}, ${tabacoVanHaasen.tamaño}: $${tabacoVanHaasen.precio} o ${tabacoVanHaasen.promo}.
    3- ${tabacoVanKiff.articulo} ${tabacoVanKiff.marca}, ${tabacoVanKiff.tamaño}: $${tabacoVanKiff.precio}.
    4- ${filtrosLibellaRegular.articulo} ${filtrosLibellaRegular.marca}, ${filtrosLibellaRegular.tamaño}: $${filtrosLibellaRegular.precio}.
    5- ${filtrosLibellaSlim.articulo} ${filtrosLibellaSlim.marca}, ${filtrosLibellaSlim.tamaño}: $${filtrosLibellaSlim.precio}.
    6- ${filtrosStampsSlim.articulo} ${filtrosStampsSlim.marca}, ${filtrosLibellaSlim.tamaño}: $${filtrosLibellaSlim.precio}.
    7- ${filtrosStampsSlimEcono.articulo} ${filtrosStampsSlimEcono.marca}, ${filtrosStampsSlimEcono.tamaño}: $${filtrosStampsSlimEcono.precio} o ${filtrosStampsSlimEcono.promo}.
    8- ${papelMoon.articulo} ${papelMoon.marca}, ${papelMoon.tamaño}: $${papelMoon.precio} o ${papelMoon.promo}.
    9- ${papelStamps.articulo} ${papelStamps.marca}, ${papelStamps.tamaño}: $${papelStamps.precio} o ${papelStamps.promo}.
    10-${papelStampsEcono.articulo} ${papelStampsEcono.marca}, ${papelStampsEcono.tamaño}: $${papelStampsEcono.precio}.`))
}

//pregunta cuantos productos quiere comprar. si lleva 2 o mas, se modifica el precio del producto debido a la promo
function howMany(){
    let cuanto = parseInt(prompt('Cuantas unidades desea comprar?'));
    if(cuanto >= 2){
        tabacoLasHojas.precio = 195;
        tabacoVanHaasen.precio = 385;
        filtrosStampsSlimEcono.precio = 170;
        papelMoon.precio = 45;
        papelStamps.precio = 60;
    }
}

// //pregunta si al usuario le interesa algun otro producto
// function whatElse(){
//     let algoMasConfirm = confirm('Desea algun otro producto?');
//     if(algoMasConfirm){
//         productList();
//     }
// }




alert('Bienvenido/a a MITREPOINT!');
let listConfirm = confirm('Desea ver nuestra lista de productos?');


let selectProduct = 0

if(listConfirm){
    let selectProduct = productList();
}

switch(selectProduct, howMany(), listConfirm){
    case 1:
        howMany();
        alert(`Total: ${cuanto}*${tabacoLasHojas.precio}`);
        break;
    
    case 2:
        howMany();
        alert(`Total: ${cuanto}*${tabacoVanHaasen.precio}`);
        break;

    case 3:
        howMany();
        alert(`Total: ${cuanto}*${tabacoVanKiff.precio}`);
        break;

    case 4:
        howMany();
        alert(`Total: ${cuanto}*${filtrosLibellaRegular.precio}`);
        break;

    case 5:
        howMany();
        alert(`Total: ${cuanto}*${filtrosLibellaSlim.precio}`);
        break;

    case 6:
        howMany();
        alert(`Total: ${cuanto}*${filtrosStampsSlim.precio}`);
        break;

    case 7:
        howMany();
        alert(`Total: ${cuanto}*${filtrosStampsSlimEcono.precio}`);
        break;

    case 8:
        howMany();
        alert(`Total: ${cuanto}*${papelMoon.precio}`);
        break;

    case 9:
        howMany();
        alert(`Total: ${cuanto}*${papelStamps.precio}`);
        break;

    case 10:
        howMany();
        alert(`Total: ${cuanto}*${papelStampsEcono.precio}`);
        break;

    default:
        alert('Por favor, seleccione el producto deseado con el numero del articulo en la lista.');
        selectProduct;
        break;
}

