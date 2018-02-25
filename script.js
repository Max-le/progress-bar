
var start;
var end;
var t_start;
var t_end;
var completion;


window.onload = function() {
	setDefault();
};

function process(argument) {

	start = document.getElementById('start').value ; 
	end = document.getElementById('end').value ; 
	start_hour = document.getElementById("start_hour").value;
	end_hour = document.getElementById("end_hour").value;

//Convert to stamptime
t_start = convert(start);
t_end = convert(end);

//work out where is current between start and end
x =  Date.now() - t_start ;
y = t_end - t_start;
//progression made
completion = x/y;

setBar(completion);
prompt();
}

// 0 = Année
// 1 = Mois
// 2 = Jour
function convert(myInput){
	var myDate=myInput;
	myDate=myDate.split("-");	
// DOIT ETRE DANS CET ORDRE : MOIS-JOUR-ANNEE
var newDate=myDate[1]+"/"+myDate[2]+"/"+myDate[0];
return new Date(newDate).getTime(); 

}


function prompt() {
//Prompt
console.log(start);
console.log(end);
console.log(t_start);
console.log(t_end);
console.log(start_hour);
console.log(end_hour);

}
function setBar(myCompletion){
	p = myCompletion*100 
	document.getElementById("bar").style.width = p+"%";
	document.getElementById("bar").innerHTML = p.toFixed(5)+"%";
}

//Règle Date début à Ajd
function setDefault(){
	var rightNow = new Date();
	var res = rightNow.toISOString().slice(0,10);
	document.getElementById('start').value = res;
	document.getElementById('start_hour').value = "05:32";
}

//update la barre de progression
function update(){
//work out where is current between start and end
x =  Date.now() - t_start ;
y = t_end - t_start;
//progression made
completion = x/y;
setBar(completion);
}


setInterval(function(){
	update();
}, 10);

// function hour_to_seconds(hour) {
// array = xhour.toString().split(":");
// h = array[0];
// m = array[1];
// seconds = h*3600 + m * 60;
// return seconds;
// }


