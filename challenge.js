	var number = -1;
var title = document.getElementById("title");
var titlearray = [
			"Bindend referendum", "Maatschappelijke dienstplicht", "Anoniem solliciteren", "Groepsbelediging", "Teelt en verkoop wiet", " Vervroegde vrijlating", "Vennootschapsbelasting", 
            "Belasting hoogste inkomens", "Tijdelijke arbeidscontracten", "AOW-leeftijd 65","Verzekering zzp'ers", "Leenstelsel studenten", "Geld cultuur", "Islamitische immigranten","Kinderpardon","Onderdak illegalen","Hypotheekrente",
            "Verhuurdersheffing","Schiphol","Kilometerheffing","Nieuwe wegen","Kolencentrales","Btw-tarief vlees","Voltooid leven","Afschaffing eigen risico","Landelijk zorgfonds","Defensie-uitgaven","Europees leger","Ontwikkelingshulp","EU-lidmaatschap"];
var text = document.getElementById("text");
var textarray = [
    "Er moet een bindend referendum komen, waarmee burgers door het parlement aangenomen wetten kunnen tegenhouden.",
    "Er moet een maatschappelijke dienstplicht voor jongeren komen. Zij kunnen dan dienen in het leger, bij de politie of in de zorg.",
    "Om discriminatie op basis van de naam te voorkomen, moet anoniem solliciteren bij de overheid en bij openbare instellingen de regel worden.",
    "Belediging van groepen op grond van ras, godsdienst of geaardheid moet niet langer strafbaar zijn.", 
    "De teelt en verkoop van wiet moet legaal worden.",
    "De vervroegde vrijlating onder voorwaarden van gevangenen moet stoppen. Zij moeten hun straf helemaal uitzitten.",
    "De belasting over de winst van ondernemingen (vennootschapsbelasting) moet omlaag.",
    "De hoogste inkomensgroepen moeten meer belasting gaan betalen.",
    "De periode waarbinnen je meerdere tijdelijke arbeidscontracten na elkaar kunt afsluiten, moet langer worden dan twee jaar.",
    "De AOW-leeftijd moet weer 65 jaar worden.",
    "Er moet een verplichte verzekering tegen arbeidsongeschiktheid en ziekte komen voor alle zelfstandigen zonder personeel (zzp'ers).",
    "Het leenstelsel voor studenten moet worden afgeschaft. De basisbeurs moet weer terugkomen.",
    "Er moet meer geld naar kunst en cultuur.",
    "Nederland moet de grenzen sluiten voor islamitische immigranten.",
    "In Nederland opgegroeide kinderen van asielzoekers moeten hier kunnen blijven (kinderpardon).",
    "De regering moet gemeenten verbieden illegale vreemdelingen onderdak te geven.",
    "De regeling voor de aftrek van de hypotheekrente moet niet verder worden aangetast.",
    "Woningcorporaties moeten meer goedkope huurwoningen bouwen. Daarom moet de belasting die zij betalen over huurwoningen (verhuurdersheffing) worden afgeschaft.",
    "Luchthaven Schiphol moet kunnen uitbreiden.",
    "De regering moet niet het bezit van de auto, maar het aantal gereden kilometers belasten.",
    "Er moet meer geld naar de aanleg van nieuwe wegen.",
    "Alle kolencentrales mogen voorlopig open blijven.",
    "Voor vlees moet het hoge btw-tarief van 21 procent gaan gelden.",
    "Ouderen die vinden dat hun leven voltooid is moeten hulp kunnen krijgen om een einde aan hun leven te maken.",
    "Het eigen risico in de zorg moet worden afgeschaft, ook als dat betekent dat de premies omhoog gaan.",
    "Er moet een landelijk zorgfonds komen, zodat het stelsel van particuliere zorgverzekeraars kan verdwijnen.",
    "De uitgaven voor defensie moeten de komende jaren fors omhoog naar 2 procent van het nationale inkomen (de NAVO-norm).",
    "Er moet een Europees leger komen.",
    "Nederland moet meer geld uitgeven voor de ontwikkeling van arme landen.",
    "Nederland moet uit de Europese Unie (EU) stappen."
];
var answers = [];
var data = [];
var multiultraplier = [];
var sortparty = "all";

window.onload = function() {

	var startBtn = document.getElementById("start");
	var backBtn = document.getElementById("back");
	var yes = document.getElementById("yes");
	var idk = document.getElementById("idk");
	var no = document.getElementById("no");
	var skip = document.getElementById("skip");
	var restart = document.getElementById("restart");
	var list = document.getElementById("list");
	var questionWeight = document.getElementById("questionWeight");

	startBtn.addEventListener("click", start);

	backBtn.addEventListener("click", changer);

	yes.addEventListener("click", function(){answer("y");});
	idk.addEventListener("click", function(){answer("i");});
	no.addEventListener("click", function(){answer("n");});
	skip.addEventListener("click", function(){answer("s");});
	restart.addEventListener("click", restartt);
	if (questionWeight.checked){
		yes.addEventListener("click", function(){answer("y","x2");});
		idk.addEventListener("click", function(){answer("i","x2");});
		no.addEventListener("click", function(){answer("n","x2");});
		skip.addEventListener("click", function(){answer("s","x2");});
		restart.addEventListener("click", restartt);
	}

	function start(){
		document.getElementById("startSection").classList.add("hidden");
		document.getElementById("mainSection").classList.remove("hidden");
		document.getElementById("backSection").classList.remove("hidden");
		question();
	}

	function answer(pushedanswer, multiplier = null){
		// als multi is gekozen dan zet hij hem in de array met antwoord anders een normaal antwoord
		clearer();
		if (multiplier === "x2") {
			multiultraplier[number] = pushedanswer;
		}
		answers[number] = pushedanswer;
		console.log(pushedanswer);
		question();
	}

	function question(){
		questionAdd();
		title.innerHTML = ''+ (number+1) + ". " + titlearray[number];
		text.innerHTML = textarray[number];
	}

	function clearer(){
		yes.className = "";
		idk.className = "";
		no.className = "";
		skip.className = "";
	}

	function changer(){
		questionBack();
		clearer();
		if (number != -1) { 
			if (answers[number]=='y'){
				yes.className = 'last';
			} else if (answers[number]=='i'){
				idk.className = 'last';
			} else if (answers[number]=='n'){
				no.className = 'last';
			}
			title.innerHTML = ''+ (number+1) + ". " + titlearray[number];
			text.innerHTML = textarray[number];
		} else {
			document.getElementById("mainSection").classList.add("hidden");
			document.getElementById("startSection").classList.remove("hidden");
			document.getElementById("backSection").classList.add("hidden");
		}
	}

	function questionAdd(){
		if (number < 29) {
			return number ++;
		} else if (number == 29) {
			document.getElementById("mainSection").classList.add("hidden");
			number++;
			addElement();
		}
	}

	function questionBack(){
		if (number < 30 && number > -1) {
			console.log(number);
			return number--;
		} else if (number == 30) {
			number--;
			document.getElementById("mainSection").classList.remove	("hidden");
			title.innerHTML = ''+ (number+1) + ". " + titlearray[number];
			text.innerHTML = textarray[number];
		}
	}

	function restartt(){
		location.reload(true);
	}

	function partySorter(){
		// sorts the parties on all, true, false
		list.innerHTML ="";
		if (sortparty == "all") {
			return sortparty = true, addElement(); 
		}
		if (sortparty == true) {
			return sortparty = false, addElement();
		}
		if (sortparty == false) {
			return sortparty = "all", addElement();
		}
	}

	function addElement(){
		 var sortButton = document.createElement('button');
		 var buttonText = document.createTextNode("sort");
		 sortButton.appendChild(buttonText);
		 sortButton.id ="sortButton";
		 sortButton.onclick = function(){ partySorter(); };
		 list.appendChild(sortButton);
		 var answerButton = document.createElement('button');
		 var bText = document.createTextNode("answer");
		 answerButton.appendChild(bText);
		 answerButton.id ="answerButton";
		 list.appendChild(answerButton);

		// create the checkboxes to the amount of partys
		if (sortparty == "all") {
		for (var i = 0; i < getTotalAmountOfPartys(); i++) {
            var tr = document.createElement('tr');
            tr.id = "trs";
            tr.value = parties[i]['name'];
            list.appendChild(tr);
            var checkbox = document.createElement('input');
            var p = document.createElement('p');
            checkbox.type = 'checkbox';
            checkbox.value = parties[i]['name'];
            checkbox.classList.add("resultCheckbox");
            tr.appendChild(checkbox);
            var partyname = document.createTextNode(parties[i]['name']);
            tr.appendChild(p);
            p.appendChild(partyname);
            checkbox.addEventListener("change", function (event) {
            	//pushes party in array in the array when checked
                if (event.target.checked == true) {
                    console.log("true")
                    data.push(event.target.value)
                    console.log(data);
                }
                //deletes the party out of the array
                if (event.target.checked == false) {
                    var dtaalength = data.length;
                    for (var datainfo = 0; datainfo < dtaalength; datainfo++) {
                        if (event.target.value == data[datainfo]) {
                            data[datainfo] = null;
                            console.log(data);
                        }
                    }
                }
            });

        }
	}
			if (sortparty === true || sortparty === false) {
		for (var i = 0; i < getTotalAmountOfPartys(); i++) {
			if (parties[i]['secular'] == sortparty) {
            var tr = document.createElement('tr');
            tr.id = "trs";
            tr.value = parties[i]['name'];
            list.appendChild(tr);
            var checkbox = document.createElement('input');
            var p = document.createElement('p');
            checkbox.type = 'checkbox';
            checkbox.value = parties[i]['name'];
            checkbox.classList.add("resultCheckbox");
            tr.appendChild(checkbox);
            var partyname = document.createTextNode(parties[i]['name']);
            tr.appendChild(p);
            p.appendChild(partyname);
            checkbox.addEventListener("change", function (event) {
            	//pushes party in array in the array when checked
                if (event.target.checked == true) {
                    console.log("true")
                    data.push(event.target.value)
                    console.log(data);
                }
                //deletes the party out of the array
                if (event.target.checked == false) {
                    var dtaalength = data.length;
                    for (var datainfo = 0; datainfo < dtaalength; datainfo++) {
                        if (event.target.value == data[datainfo]) {
                            data[datainfo] = null;
                            console.log(data);
                        }
                    }
                }
            });

        }
    }
	}
}


}

