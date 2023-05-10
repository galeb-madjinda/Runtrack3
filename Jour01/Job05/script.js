function Afficherjoursemaines() {
  let jourssemaines = ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi', 'Dimanche'];
  let resultat = [];
  for (let i = 0; i < jourssemaines.length; i++) {
    resultat.push(jourssemaines[i]);
  }
  return resultat;
}

let jours = Afficherjoursemaines();
console.log(jours);