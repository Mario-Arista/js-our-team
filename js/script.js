// MILESTONE 0
// Creo l’array di oggetti con le informazioni fornite.

const businessCards = [
    {
        fullname: "Wayne Barnett",
        position:"Founder & CEO",
        image: "wayne-barnett-founder-ceo.jpg"
    },
    {
        fullname: "Angela Caroll",
        position:"Chief Editor",
        image: "angela-caroll-chief-editor.jpg"
    },
    {
        fullname: "Walter Gordon",
        position:"Office Manager",
        image: "walter-gordon-office-manager.jpg"
    },
    {
        fullname: "Angela Lopez",
        position:"Social Media Manager",
        image: "angela-lopez-social-media-manager.jpg"
    },
    {
        fullname: "Scott Estrada",
        position:"Developer",
        image: "scott-estrada-developer.jpg"
    },
    {
        fullname: "Barbara Ramos",
        position:"Graphic Designer",
        image: "barbara-ramos-graphic-designer.jpg"
    },

];

// MILESTONE 1
// Stampo in console tutti gli oggetti dell'array

for (let i = 0; i < businessCards.length; i++) {

    const actualmember = businessCards[i];

    for (let key in actualmember) {
        console.log(`${key}: ${actualmember[key]}`, businessCards[i]);
    }
    
}


//  Stampo in pagina nome, posizione e immagine
for (let i = 0; i < businessCards.length; i++) {

    // Creo nuovi elementi HTML per nome e posizioni
    let nameElement = document.createElement("div");
    let positionElement = document.createElement("div");
    let imageElement = document.createElement("img");

    // Ciclo per iterare nomi e posizioni dentro oggetti
    for (let key in businessCards[i]) {

        let field = businessCards[i][key];

        // Aggiungo nome dentro nameElement
        if (key === "fullname") {

            nameElement.innerText = field;

        // Aggiungo nome dentro positionElement
        } else if (key === "position") {

            positionElement.innerText = field;
        
        // Aggiungo immagine dentro imageElement
        } else if (key === "image") {

            // Cambio l'immagine prendendo l'URL dall'array
            let imageUrl = businessCards[i][key];
            
            imageElement.src = `./img/${imageUrl}`;
            imageElement.alt = "Immagine membro";
        }

    }
    
    // Stampo in pagina immgine e aggiungo una classe
    document.getElementById(`card-${i + 1}`).append(imageElement);
    imageElement.classList.add("img-fluid");

    // Stampo in pagina nome e aggiungo una classe
    document.getElementById(`card-${i + 1}`).append(nameElement);
    nameElement.classList.add("name");

    // Stampo in pagina position e aggiungo una classe
    document.getElementById(`card-${i + 1}`).append(positionElement);
    positionElement.classList.add("text-secondary");
}




	 	     