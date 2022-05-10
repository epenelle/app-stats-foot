import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { AlertController, NavController } from '@ionic/angular';
import { HttpService } from 'src/app/services/http.service';
import { ToastService } from 'src/app/services/toast-service.service';
import { Joueur, Partie } from 'src/app/Utility/Entites';

@Component({
  selector: 'app-partie',
  templateUrl: './partie.page.html',
  styleUrls: ['./partie.page.scss'],
})
export class PartiePage implements OnInit {

  private possessionFlag: string = 'offense';
  private typeJeuFlag: string = 'course';
  private listeJoueurs: Joueur[] = [
    {idJoueur:1, numero:5, nom: 'penelle', prenom: 'etienne', position: 'QB'},
    {idJoueur:1, numero:5, nom: 'penelle', prenom: 'etienne', position: 'QB'}, 
    {idJoueur:1, numero:5, nom: 'penelle', prenom: 'etienne', position: 'QB'},
    {idJoueur:1, numero:5, nom: 'penelle', prenom: 'etienne', position: 'QB'},
    {idJoueur:1, numero:5, nom: 'penelle', prenom: 'etienne', position: 'QB'},
    {idJoueur:1, numero:5, nom: 'penelle', prenom: 'etienne', position: 'QB'},
    {idJoueur:1, numero:5, nom: 'penelle', prenom: 'etienne', position: 'QB'},
    {idJoueur:1, numero:5, nom: 'penelle', prenom: 'etienne', position: 'QB'},
    {idJoueur:1, numero:5, nom: 'penelle', prenom: 'etienne', position: 'QB'},
    {idJoueur:1, numero:5, nom: 'penelle', prenom: 'etienne', position: 'QB'},
    {idJoueur:1, numero:5, nom: 'penelle', prenom: 'etienne', position: 'QB'},
    {idJoueur:1, numero:5, nom: 'penelle', prenom: 'etienne', position: 'QB'}, 
    {idJoueur:1, numero:5, nom: 'penelle', prenom: 'etienne', position: 'QB'},
    {idJoueur:1, numero:5, nom: 'penelle', prenom: 'etienne', position: 'QB'},
    {idJoueur:1, numero:5, nom: 'penelle', prenom: 'etienne', position: 'QB'},
    {idJoueur:1, numero:5, nom: 'penelle', prenom: 'etienne', position: 'QB'},
    {idJoueur:1, numero:5, nom: 'penelle', prenom: 'etienne', position: 'QB'},
    {idJoueur:1, numero:5, nom: 'penelle', prenom: 'etienne', position: 'QB'},
    {idJoueur:1, numero:5, nom: 'penelle', prenom: 'etienne', position: 'QB'},
    {idJoueur:1, numero:5, nom: 'penelle', prenom: 'etienne', position: 'QB'},
    {idJoueur:1, numero:5, nom: 'penelle', prenom: 'etienne', position: 'QB'},
    {idJoueur:1, numero:5, nom: 'penelle', prenom: 'etienne', position: 'QB'}, 
    {idJoueur:1, numero:5, nom: 'penelle', prenom: 'etienne', position: 'QB'},
    {idJoueur:1, numero:5, nom: 'penelle', prenom: 'etienne', position: 'QB'},
    {idJoueur:1, numero:5, nom: 'penelle', prenom: 'etienne', position: 'QB'},
    {idJoueur:1, numero:5, nom: 'penelle', prenom: 'etienne', position: 'QB'},
    {idJoueur:1, numero:5, nom: 'penelle', prenom: 'etienne', position: 'QB'},
    {idJoueur:1, numero:5, nom: 'penelle', prenom: 'etienne', position: 'QB'},
    {idJoueur:1, numero:5, nom: 'penelle', prenom: 'etienne', position: 'QB'},
    {idJoueur:1, numero:5, nom: 'penelle', prenom: 'etienne', position: 'QB'},
  ];
  private partie: Partie
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private alertController: AlertController,
    private navController: NavController,
    private httpService: HttpService,
    private toastService: ToastService
  ) {
    this.route.queryParams.subscribe(params => {
      this.partie = this.router.getCurrentNavigation().extras.state.partie
    })
  }

  ngOnInit() {
  }

  async confirmerSuppressionPartie() {
    const alert = await this.alertController.create({
      header: 'Supprimer la partie',
      message: 'Cette action est irréversible et supprimera toutes les données associées à la partie, incluant ses statistiques.',
      buttons: [
        {
          text: 'Annuler',
          role: 'cancel',
          id: 'cancel-button',
          handler: () => {
            
          }
        }, {
          text: 'Supprimer',
          id: 'supprimer-button',
          handler: () => {
            this.supprimerPartie();
          }
        }
      ]
    });
    await alert.present();
  }

  supprimerPartie() {
    console.log('suppimerPartie()')
    this.httpService.deletePartie(this.partie).subscribe(
      (response: any) => {
        this.toastService.showToast('Partie supprimée');
        this.navController.pop();
      },
      (error: any) => {
        this.toastService.showToast(error);
      }
    )
  }

  possessionChanged(event: any) {
    this.possessionFlag = event.detail.value;
    console.log(this.possessionFlag);
  }

  typeJeuChanged(event: any) {
    this.typeJeuFlag = event.detail.value
    console.log(this.typeJeuFlag);
  }



}
