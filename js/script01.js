/*
Snack 1:
Creare un array di oggetti:
Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
Stampare a schermo la bici con peso minore utilizzando destructuring e template literal
*/

const catalogoBici = [
    bici1 = {
        nome: "a",
        peso: 15,        
    },

    bici2 = {
        nome: "b",
        peso: 18,
    },

    bici3 = {
        nome: "c",
        peso: 20,
    },

    bici4 = {
        nome: "d",
        peso: 22,
    },

    bici5 = {
        nome: "e",
        peso: 13,
    },

    bici6 = {
        nome: "f",
        peso: 11,
    },

    bici7 = {
        nome: "g",
        peso: 21,
    },
]

const bikesWeigth = [];

for (let i = 0; i < catalogoBici.length; i++) {
    bikesWeigth.push(catalogoBici[i].peso)
}

const lighterBike = Math.min(...bikesWeigth);
console.log(`La bicicletta più leggera tra quelle disponibili è la X, che pesa ${lighterBike}kg`)