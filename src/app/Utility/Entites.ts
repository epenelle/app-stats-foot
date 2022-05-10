export class Joueur {
  idJoueur: number;
  numero: number;
  position: string;
  prenom: string;
  nom: string;
}

export class Equipe {
  idEquipe: number;
  niveau: string;
  annee: number;
}

export class Partie {
  idPartie: number;
  idEquipe: number;
  adversaire: string;
  date: Date
}