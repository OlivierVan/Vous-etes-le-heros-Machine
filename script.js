

let chaptersObj = {


    chapitre1 : {
        subtitle : "Le réveil",
        text : "Vous vous réveiller dans un monde ravagé par le temps et vous entendez un énorme bruit venant de loin, que faites-vous?",
        img : "",
        options:[{optionText: "Explorer", action:"goToChapter('chapitre2')"},
                 {optionText: "Se cacher", action:"goToChapter('chapitre1mort')"},
                 {optionText: "Aller vers le bruit", action:"goToChapter('chapitre2')"},]},
    
                 
    
    chapitre1mort : {
        subtitle : "Accident",
        text : "En vous cachant vous tombez et vôtre crâne se fracasse contre un roche, vous mourrez.",
        img : "",
        options:[{optionText: "Ouch", action:"goToChapter('chapitre1')"},]},
    
    
    chapitre2 : {
        subtitle : "Laboratoire",
        text : "Pendant que vous explorez les environs, vous trouvez un laboratoire, que faites-vous",
        img : "Assets/AI-Concept.jpg",
        options:[{optionText: "Entrer", action:"goToChapter('chapitre3')"},
                 {optionText: "Inspecter les environs", action:"goToChapter('chapitre2mort')"}]},
    
    
    chapitre2mort: {
        subtitle : "Embuscade",
        text : "Près de l'entrée du laboratoire quelque vous tends une embuscade, il vous cogne sur la tête et vous mourrez.",
        img : "",
        options:[{optionText: "Ouch!", action:"goToChapter('chapitre1')"}]},
    
    
    
    chapitre3 : {
        subtitle : "Choix difficile",
        text : "Trois couloir ce trouve devant vous, vous devez faire un choix.",
        img : "",
        options:[{optionText: "Droite", action:"goToChapter('chapitre3clé')"},
                 {optionText: "Gauche", action:"goToChapter('chapitre3mort')"},
                {optionText: "Avant", action:"goToChapter('chapitre4')"}]},
    
    
    chapitre3mort :{
        subtitle : "Piège",
        text : "Quelqu'un vous a tendu un piège, vous mourrez.",
        img : "",
        options:[{optionText: "Bing!", action:"goToChapter('chapitre1')"}]},
    
    
    chapitre3clé : {
        subtitle : "Clés",
        text : "Dans un bureau, vous trouvez des clés, mais vous mourrez en trébuchant.",
        img : "",
        options:[{optionText: "Bong!", action:"keytrue()"}]},
    
    
    chapitre4 : {
        subtitle : "La porte",
        text : "Devant vous, se tient une énorme porte circulaire, que faites-vous?",
        img : "",
        options:[{optionText: "Inspecter", action:"goToChapter('chapitre5clé')"},]},
    
    
    chapitre5clé : {
        subtitle : "Serrure",
        text : "Vous tentez d'ouvrir la porte, mais vous remarquer qu'elle a une serrure",
        img : "",
        options:[{optionText: "Avez-vous la clé", action:"haskey()"},
                ]},
    
    chapitre5mort : {
        subtitle : "Mort stupide",
        text : "N'ayant pas la clé, vous ressortez dehors, mais vous vous faites écraser par un porte.",
        img : "",
        options:[{optionText: "Squash!", action:"goToChapter('chapitre1')"}]},
    
    chapitre6 : {
        subtitle : "Étonnement",
        text : "Vous entrez dans une salle rempli de machine d'apparence humaine, c'est machine vous ressemble drolement, que faites-vous?",
        img : "",
        options:[{optionText: "Enfuyez", action:"goToChapter('chapitre6mort')"},
                {optionText: "Explorer", action:"goToChapter('chapitre7')"}]},
    
    chapitre6mort : {
        subtitle : "Panique",
        text : "Sous le choc après avoir vue ces machines, vous voulez sortir, mais vous vous enfargez et mourrez.",
        img : "",
        options:[{optionText: "Splish!", action:"goToChapter('chapitre1')"}]},
    
    chapitre7fin : {
        subtitle : "Vérité",
        text : "Vous découvrez la vérité sur vos origines. Les humains sont tous mort il y a cela des années, il ne reste que des machines doté d'intelligence artificielle.",
        img : "",
        options:[{optionText: "Recommencez", action:"goToChapter('chapitre1')"}]},
    }
    
    
    
    function goToChapter(chapterName){
        console.log(chaptersObj[chapterName]["subtitle"]);
        console.log(chaptersObj[chapterName]["text"]);
    
    };

    goToChapter("chapitre1")

function goToChapter(chapterName){

    document.querySelector("h2").innerHTML=chaptersObj[chapterName]["subtitle"];
    document.querySelector("p").innerHTML=chaptersObj[chapterName]["text"];
    document.querySelector(".medias").src = chaptersObj[chapterName]["img"];
    let btn = document.querySelector(".btn")
   // document.querySelector(".btn").parentElement.removeChild(document.querySelector(".btn"));
   btn.innerHTML = ""
    for(element of chaptersObj[chapterName]["options"]){
        let bouton = document.createElement("button")
        let text = document.createTextNode(element["optionText"])
        bouton.appendChild(text)
        bouton.setAttribute("onclick" , element["action"])
        bouton.setAttribute("type","button")
        btn.appendChild(bouton)


}
};
    
let keyFounded = false;

function keytrue(){

    keyFounded = true;
    goToChapter("chapitre1")
}

function haskey(){

    if(keyFounded==true){

        goToChapter("chapitre6")
    }
    if(keyFounded==false){

        goToChapter("chapitre1")
    }
}
