console.log("\nSeleccione una opción: \n1- Rosa \n2-Azul \n3-Violeta \n4-Amarillo \n5-Verde");

function decidirColor(opcion){
    switch(opcion){
        case 1: 
            return "rosa";
        case 2:
            return "azul";
        case 3:
            return "violeta";
        case 4:
            return "amarillo";
        case 5:
            return "verde";
        default:
            return "La opción elegida es incorrecta."
    }
}

console.log("\n" + decidirColor(3));