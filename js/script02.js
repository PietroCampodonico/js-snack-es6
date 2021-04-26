/*Snack2
Creare un array di oggetti di squadre di calcio.Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.Nome sarà l’unica proprietà da compilare, 
le altre saranno tutte settate a 0. Generare numeri random al posto degli 0 nelle proprietà: Punti fatti e falli subiti.
Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.*/


function rNGenerator (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min
}

const ListaSquadre = [
    squadra1 = {
        nome: "Milan",
        puntiFatti: 0,
        falliSubiti: 0,
    },

    squadra2 = {
        nome: "Lazio",
        puntiFatti: 0,
        falliSubiti: 0,
    },

    squadra3 = {
        nome: "Roma",
        puntiFatti: 0,
        falliSubiti: 0,
    },

    squadra4 = {
        nome: "Napoli",
        puntiFatti: 0,
        falliSubiti: 0,
    },

    squadra5 = {
        nome: "Inter",
        puntiFatti: 0,
        falliSubiti: 0,
    },

    squadra6 = {
        nome: "Juve",
        puntiFatti: 0,
        falliSubiti: 0,
    },

    squadra7 = {
        nome: "Sassuolo",
        puntiFatti: 0,
        falliSubiti: 0,
    },
];

// for (i = 0; i < ListaSquadre.length; i++) {
//     ListaSquadre[i].puntiFatti = rNGenerator(0, 30);
//     ListaSquadre[i].falliSubiti = rNGenerator(0, 30);
   
//     let {nome, falliSubiti} = ListaSquadre[i]; 
//     console.log(`La squadra "${nome}" ha subito ${falliSubiti} falli`);
// }

// Funzione
function footballstatsTracker (array, min, max) {

    for (i = 0; i < array.length; i++) {
        array[i].puntiFatti = rNGenerator(min, max);
        array[i].falliSubiti = rNGenerator(min, max);
    
        var {nome, falliSubiti} = array[i];
        console.log(`La squadra "${nome}" ha subito ${falliSubiti} falli`);
    }
    
}

footballstatsTracker(ListaSquadre, 0, 30);