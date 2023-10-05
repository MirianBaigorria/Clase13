console.log("\nSeleccione una opción: \n1- Rosa \n2-Azul \n3-Violeta \n4-Amarillo \n5-Verde");

function decidirColor(opcion){
    switch(opcion){
        case 1: 
            return "gris";//estaba en rosa, lo puse en gris
        case 2:
            return "azul";
        case 3:
            return "violeta";
        case 4:
            return "rosa";//estaba en amarillo, lo puse en rosa
        case 5:
            return "verde";
        case 6:
            return "amarillo"; //agregue el caso 6
        default:
            return "La opción elegida es incorrecta."
    }
}

console.log("\n" + decidirColor(3));