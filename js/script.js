/*

BONUS 1:
Trasformare la stringa foto in una immagine effettiva
BONUS 2:
Organizzare i singoli membri in card/schede

*/

/*
MILESTONE 0:
Creare l’array di oggetti con le informazioni fornite.
*/
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

/*
MILESTONE 1:
Stampare su console, per ogni membro del team,
le informazioni di nome, ruolo e la stringa della foto
*/

for (let i = 0; i < businessCards.length; i++) {
    console.log(`Collega n. ${i + 1}`, businessCards[i]);
}

/*
MILESTONE 2:
Stampare le stesse informazioni su DOM 
sottoforma di stringhe
*/

for (let i = 0; i < businessCards.length; i++) {

    let newElement = document.createElement("div");

    for (let key in businessCards[i]) {
        let fields = businessCards[i][key];
        newElement.innerHTML += `${key}` + ": " + `${fields}` + " ";
    }

    document.getElementById(`card-${i + 1}`).append(newElement);
}



	 	     