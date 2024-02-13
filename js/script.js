// MILESTONE 0
// Creo l’array di oggetti con le informazioni fornite.

const businessCards = [
    {
        fullname: "Wayne Barnett",
        position:"Founder & CEO",
        image: `wayne-barnett-founder-ceo.jpg`
    },
    {
        fullname: "Angela Caroll",
        position:"Chief Editor",
        image: `angela-caroll-chief-editor.jpg`
    },
    {
        fullname: "Walter Gordon",
        position:"Office Manager",
        image: `walter-gordon-office-manager.jpg`
    },
    {
        fullname: "Angela Lopez",
        position:"Social Media Manager",
        image: `angela-lopez-social-media-manager.jpg`
    },
    {
        fullname: "Scott Estrada",
        position:"Developer",
        image: `scott-estrada-developer.jpg`
    },
    {
        fullname: "Barbara Ramos",
        position:"Graphic Designer",
        image: `barbara-ramos-graphic-designer.jpg`
    },

];

// MILESTONE 1
// Stampo in console tutti gli oggetti dell'array

for (let i = 0; i < businessCards.length; i++) {
    console.log(`Collega n. ${i + 1}`, businessCards[i]);
}


//  Stampo in pagina nome e posizione
for (let i = 0; i < businessCards.length; i++) {

    // Creo nuovi elementi HTML per nome e posizioni
    let nameElement = document.createElement("div");
    let positionElement = document.createElement("div");

    // Ciclo per iterare nomi e posizioni dentro oggetti
    for (let key in businessCards[i]) {

        let field = businessCards[i][key];

        if (key === 'fullname') {

            nameElement.innerText = field;

        } else if (key === 'position') {

            positionElement.innerText = field;

        }

    }

    // Stampo in pagina
    document.getElementById(`card-${i + 1}`).append(nameElement);
    document.getElementById(`card-${i + 1}`).append(positionElement);
}



/*

BONUS 1:
Trasformare la stringa foto in una immagine effettiva
BONUS 2:
Organizzare i singoli membri in card/schede

*/



	 	     