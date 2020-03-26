var km;
var eta;
var prezzoprov;
var prezzo;


km = parseInt(prompt("Kilometri di percorrenza"));
eta = parseInt(prompt("Età passeggero"));

prezzoprov = km*0.21;



if (eta < 18) {
  console.log(sconto ="20% di sconto");
  console.log(prezzo=(prezzoprov*0.8));
}

else if (eta > 65) {
  console.log(sconto = "40% di sconto");
  console.log(prezzo=(prezzoprov*0.6));
}

else {
  console.log(sconto = "nessuno sconto");
  console.log(prezzo=prezzoprov);
}


document.getElementById('prezzo').innerHTML = prezzo;
document.getElementById('sconto').innerHTML = sconto;
