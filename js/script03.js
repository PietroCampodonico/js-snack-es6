/*Scrivere una funzione che accetti tre argomenti, un array e due numeri(a più piccolo di b).
La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra i due numeri.Usiamo i nuovi metodi degli array foreach o filter.*/

const array = [64, 0, 45, 8, 20, 36];

function arrayFilter (array, startIndex, endIndex) {

    return array.filter(function(element, index){
        if (index >= startIndex && index <= endIndex) {
            return true;
        } else {
            return false;
        }
    }) 
    
    //Uguale, ma con arrow function
    //return array.filter((element, index) => index >= startIndex && index <= endIndex)
}



let array2 = arrayFilter(array, 1, 4);

console.log(array2)

