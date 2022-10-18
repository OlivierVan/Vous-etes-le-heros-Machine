

let chaptersObj = {


    chapitre1 : {
        subtitle : "Le réveil",
        text : "Vous vous réveiller dans un monde ravagé par le temps et vous entendez un énorme bruit venant de loin, que faites-vous?",
        img : "",
        options:[{option1 :{optionText: "Explorer", action:"goToChapter('chapitre2')"},
                 option2 :{optionText: "Se cacher", action:"goToChapter('chapitre1mort')"},
                 option3 :{optionText: "Aller vers le bruit", action:"goToChapter('chapitre2')"},},]},
    
                 
    
    chapitre1mort : {
        subtitle : "Accident",
        text : "En vous cachant vous tombez et vôtre crâne se fracasse contre un roche, vous mourrez.",
        img : "",
        options:[{option1 :{optionText: "Ouch", action:"goToChapter('chapitre1')"},},]},
    
    
    chapitre2 : {
        subtitle : "Laboratoire",
        text : "Pendant que vous explorez les environs, vous trouvez un laboratoire, que faites-vous",
        img : "",
        options:[{options1 :{optionText: "Entrer", action:"goToChapter('chapitre3')"},
                 options2 :{optionText: "Inspecter les environs", action:"goToChapter('chapitre2mort')"},},]},
    
    
    chapitre2mort: {
        subtitle : "Embuscade",
        text : "Près de l'entrée du laboratoire quelque vous tends une embuscade, il vous cogne sur la tête et vous mourrez.",
        img : "",
        options:[{option1 :{optionText: "Ouch!", action:"goToChapter('chapitre1')"},},]},
    
    
    
    chapitre3 : {
        subtitle : "Choix difficile",
        text : "Trois couloir ce trouve devant vous, vous devez faire un choix.",
        img : "",
        options:[{option1 :{optionText: "Droite", action:"goToChapter('chapitre3clé')"},
                 option2 :{optionText: "Gauche", action:"goToChapter('chapitre3mort')"},
                 option3 :{optionText: "Avant", action:"goToChapter('chapitre4')"},},]},
    
    
    chapitre3mort :{
        subtitle : "Piège",
        text : "Quelqu'un vous a tendu un piège, vous mourrez.",
        img : "",
        options:[{option1 :{optionText: "Bing!", action:"goToChapter('chapitre1')"},},]},
    
    
    chapitre3clé : {
        subtitle : "Clés",
        text : "Dans un bureau, vous trouvez des clés, mais vous mourrez en trébuchant.",
        img : "",
        options:[{option1 :{optionText: "Bong!", action:"goToChapter('chapitre1')"},},]},
    
    
    chapitre4 : {
        subtitle : "La porte",
        text : "Devant vous, se tient une énorme porte circulaire, que faites-vous?",
        img : "",
        options:[{option1 :{optionText: "Bong!", action:"goToChapter('chapitre1')"},},]},
    
    
    chapitre5clé : {
        subtitle : "Serrure",
        text : "Avez-vous la clé",
        img : "",
        options:[{options1 :{optionText: "Oui", action:"goToChapter('chapitre6')"},
            options2 :{optionText: "Non", action:"goToChapter('chapitre5mort')"},},]},
    
    chapitre5mort : {
        subtitle : "Mort stupide",
        text : "N'ayant pas la clé, vous ressortez dehors, mais vous vous faites écraser par un porte.",
        img : "",
        options:[{option1 :{optionText: "Squash!", action:"goToChapter('chapitre1')"},},]},
    
    chapitre6 : {
        subtitle : "Étonnement",
        text : "Vous entrez dans une salle rempli de machine d'apparence humaine, c'est machine vous ressemble drolement, que faites-vous?",
        img : "",
        options:[{options1 :{optionText: "Enfuyez", action:"goToChapter('chapitre6mort')"},
            options2 :{optionText: "Explorer", action:"goToChapter('chapitre7')"},},]},
    
    chapitre6mort : {
        subtitle : "Panique",
        text : "Sous le choc après avoir vue ces machines, vous voulez sortir, mais vous vous enfargez et mourrez.",
        img : "",
        options:[{option1 :{optionText: "Splish!", action:"goToChapter('chapitre1')"},},]},
    
    chapitre7fin : {
        subtitle : "Vérité",
        text : "Vous découvrez la vérité sur vos origines. Les humains sont tous mort il y a cela des années, il ne reste que des machines doté d'intelligence artificielle.",
        img : "",
        options:[{option1 :{optionText: "Recommencez", action:"goToChapter('chapitre1')"},},]},
    }
    
    
    
    function goToChapter(chapterName){
        console.log(chaptersObj[chapterName]["subtitle"]);
        console.log(chaptersObj[chapterName]["text"]);
    
    };
    