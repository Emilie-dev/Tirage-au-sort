var person = ["Julien", "Dimitri", "Marco", "Raphael", "Mouad", "Jordy", "Maxime", "Romain", "Océane", "Morel", "Grégory", "Frank", "Florian", "Elodie", "Emilie"];

var tables = [0, 1, 2, 3, 4];

var idTables = 0;


$("#execute").click(function() {

// On mélange le tableau de personnes

//avec shuffle();
function shuffle(person) {
    var j, x, i;
    for (i = person.length; i; i--) {
        j = Math.floor(Math.random() * i);
        x = person[i - 1];
        person[i - 1] = person[j];
        person[j] = x;
    }
}

// On stock le résultat du tirage au sort dans une nouvelle variable
var tirage = shuffle(person); 


// On affiche chaque personne en lui attribuant 0, puis 1, puis 2... jusqu'à 4
for (var i = 0; i < person.length; i++) {
	var a = person[i];
	console.log(a + " est à la table " + idTables);
	if (idTables >= 4) {
		idTables = 0;
	}else {
		idTables++;
	}
}


$("#content").html();

});


















 