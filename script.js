
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
console.log('Date début et fin : ');

//Convert to stamptime
t_start = convert(start);
t_end = convert(end);

//Prompt
console.log(start);
console.log(end);
 console.log(t_start);
console.log(t_end);

//work out where is current between start and end
x =  Date.now() - t_start ;
y = t_end - t_start;
//progression made
completion = x/y;

setBar(completion);
}

// 0 = Année
// 1 = Mois
// 2 = Jour
function convert(myInput){
var myDate=myInput;
myDate=myDate.split("-");	
// DOIT ETRE DANS CET ORDRE : MOIS-JOUR-ANNEE
var newDate=myDate[1]+"/"+myDate[2]+"/"+myDate[0];
return new Date(newDate).getTime(); //will alert 1330210800000

}

function setBar(myCompletion){
p = myCompletion*100 +"%"
document.getElementById("bar").style.width = p;
}

//Règle Date début à Ajd
function setDefault(){
var rightNow = new Date();
var res = rightNow.toISOString().slice(0,10);
	document.getElementById('start').value = res;
}

