let risultato = document.getElementById("risultato");
let dettaglio = document.getElementById("dettaglio");

const listaCpu = ["sasso", "carta", "forbice"];

const regole = {
  sasso: "forbice",
  carta: "sasso",
  forbice: "carta",
};

function generaMossaComputer() {
  const indiceRandom = Math.floor(Math.random() * listaCpu.length);
  return listaCpu[indiceRandom];
}

function gioca(sceltaGiocatore) {
  const sceltaComputer = generaMossaComputer();

  dettaglio.innerText = `Tu: ${sceltaGiocatore.toUpperCase()} vs Computer: ${sceltaComputer.toUpperCase()}`;

  if (sceltaGiocatore === sceltaComputer) {
    risultato.innerText = "Pareggio! 😐";
    return;
  }

  if (regole[sceltaGiocatore] === sceltaComputer) {
    risultato.innerText = "Hai vinto! 🎉";
    return;
  }

  risultato.innerText = "Hai perso! 😞";
}
