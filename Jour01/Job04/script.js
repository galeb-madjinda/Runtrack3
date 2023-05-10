function Bissextille(annee) {
    if ((annee%4==0) && ((annee%100!=0) || (annee%400==0))) return true;
else return false;
  }

let annee = 2020
  if (Bissextille(annee)) {
    console.log(annee + " est une année bissextile");
  } else {
    console.log(annee + " n'est pas une année bissextile");
  }