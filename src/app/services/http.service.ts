import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Equipe, Joueur, Partie } from 'src/app/Utility/Entites';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  
  constructor(
    private httpClient: HttpClient
    ) { }

    private post(uri: string, data: any) {
    const headers = new HttpHeaders();
    const options = { headers: headers, withCredentials: false };
    const url = environment.apiUrl + uri;
    return this.httpClient.post(url, JSON.stringify(data), options);
  }

  private get(uri: string) {
    const url = environment.apiUrl + uri;
    console.log('Api URL : ', url);
    return this.httpClient.get(url, this.httpOptions);
  }
  
  private put(uri: string, data: any) {
    const headers = new HttpHeaders();
    const options = { headers: headers };
    const url = environment.apiUrl + uri;  
    return this.httpClient.put(url, data, options);
  }
  
  private delete(uri: string) {
    const headers = new HttpHeaders();
    const options = { headers: headers };
    const url = environment.apiUrl + uri;  
    console.log(url);
    return this.httpClient.delete(url, options);
  }

  getTest(): Observable<any> {
    return this.get('');
  }
  
  getJoueurs(): Observable<any> {
    return this.get('joueurs');
  }
  
  postJoueurs(joueurs: Joueur[]): Observable<any> {
    return this.post('joueurs', joueurs);
  }

  deleteJoueur(joueur: Joueur): Observable<any> {
    return this.delete('joueurs/' + joueur.idJoueur);
  }
  
  modifierJoueur(joueur: Joueur): Observable<any> {
    return this.put('joueurs/' + joueur.idJoueur, joueur);
  }
  
  getEquipes(): Observable<any> {
    return this.get('equipes');
  }
  
  getPartiesEquipe(equipe: Equipe): Observable<any> {
    return this.get('equipes/' + equipe.idEquipe + '/parties');
  }
  
  postPartie(partie: Partie): Observable<any> {
    return this.post('parties', partie);
  }
  
  deletePartie(partie: Partie): Observable<any> {
    return this.delete('parties/' + partie.idPartie);
  }
  
  
}
