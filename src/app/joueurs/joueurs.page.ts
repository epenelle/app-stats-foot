import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { modalController } from '@ionic/core';
import { HttpService } from '../services/http.service';
import { Joueur } from 'src/app/Utility/Entites';
import { AjouterJoueursPage } from './ajouter-joueurs/ajouter-joueurs.page';
import { InfosJoueurPage } from './infos-joueur/infos-joueur.page';

@Component({
  selector: 'app-joueurs',
  templateUrl: './joueurs.page.html',
  styleUrls: ['./joueurs.page.scss'],
})
export class JoueursPage implements OnInit {

  joueursDisplay: Joueur[] = [];
  joueurs = [];
  constructor(
    private modalController: ModalController,
    private httpService: HttpService
  ) { 

    // To be deleted, for test pruposes only.
    /*
    this.joueurs = [
      { idJoueur: 1, numero: 5, position: 'QB', prenom: 'Etienne', nom: 'Penelle' }, 
      { idJoueur: 2, numero: 52, position: 'S', prenom: 'Juan-Sebastian', nom: 'Burgos-Rincon' }, 
      { idJoueur: 3, numero: 88, position: 'TE', prenom: 'Vincent', nom: 'Lanoie' }, 
      { idJoueur: 4, numero: 69, position: 'DL', prenom: 'Benjamin', nom: 'Savage' }, 
      { idJoueur: 5, numero: 64, position: 'OL', prenom: 'Kevin', nom: 'Paquette' }, 
      { idJoueur: 6, numero: 6, position: 'RB', prenom: 'William', nom: 'Grondin' }
    ]
    */
  }

  ngOnInit() {
  }
  
  ionViewWillEnter() {
    this.getJoueurs();
  }

  initializeItems(){
    this.joueursDisplay = this.joueurs;
  }

  filterJoueurs(ev: any) {
    // Reset items back to all of the items
    this.initializeItems();

    // set val to the value of the searchbar
    const val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val == '') {

    }
    else if (val && val.trim() !== '') {
      this.joueursDisplay = this.joueurs.filter((joueur) => {
          return (
            joueur.prenom.toLowerCase().indexOf(val.toLowerCase()) > -1 // prenom
            || joueur.nom.toLowerCase().indexOf(val.toLowerCase()) > -1 // nom
            || joueur.position.toLowerCase().indexOf(val.toLowerCase()) > -1 // position
            || joueur.numero.toString().toLowerCase().indexOf(val.toLowerCase()) > -1 // numero
            );
      })
    }
  }

  async ajouterJoueursPresentModal() {
    const modal = await this.modalController.create({
      component: AjouterJoueursPage,
    })
    modal.onDidDismiss().then( () => {
      this.getJoueurs();
    }) 
    return await modal.present();
  }

  async infosJoueursPresentModal(joueur: Joueur) {
    const modal = await this.modalController.create({
      component: InfosJoueurPage,
      componentProps: {
        'joueur' : joueur
      },
    })
    modal.onDidDismiss().then( () => {
      this.getJoueurs();
    }) 
    return await modal.present();
  }

  getJoueurs() {
    this.httpService.getJoueurs().subscribe(
      (response: any) => {
        this.joueurs = response;
        console.log('response', response);
        console.log('joueurs', this.joueurs);
        this.initializeItems();
      },
      (error: any) => {
        console.log(error);
      }
    );
  }

}
