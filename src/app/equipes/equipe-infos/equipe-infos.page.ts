import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { HttpService } from 'src/app/services/http.service';
import { ToastService } from 'src/app/services/toast-service.service';
import { Equipe, Partie } from 'src/app/Utility/Entites';
import { AjouterPartiePage } from './ajouter-partie/ajouter-partie.page';
import { NavigationExtras } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-equipe-infos',
  templateUrl: './equipe-infos.page.html',
  styleUrls: ['./equipe-infos.page.scss'],
})
export class EquipeInfosPage implements OnInit {

  private equipe: Equipe;
  private parties: Partie[] = []
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private httpService: HttpService,
    private toastService: ToastService,
    private modalController: ModalController,
    private navController: NavController
  ) {
    // On retrouve le nom de lequipe passe en parametres
    this.route.queryParams.subscribe(params => {
      if(this.router.getCurrentNavigation().extras.state != undefined) {
        this.equipe = this.router.getCurrentNavigation().extras.state.equipe
      }
      if(this.equipe == undefined) {
        this.navController.navigateBack(['equipes']);
      }
    });
   }

  ngOnInit() {
  }

  ionViewWillEnter(){
    this.getParties();
  }

  getParties() {
    this.httpService.getPartiesEquipe(this.equipe).subscribe(
      (response: any) => {
        console.log(response);
        this.parties = response;
      },
      (error: any) => {
        this.toastService.showToast(error);
      }
    )
  }

  async ajouterPartiePresentModal() {
    const modal = await this.modalController.create({
      component: AjouterPartiePage,
      componentProps: {
        'equipe': this.equipe
      }
    })
    modal.onDidDismiss().then( () => {
      this.getParties();
    })
    return await modal.present();
  }

  goToSommairePartie(partie: Partie) {
    let navExtras: NavigationExtras = {
      state: {
        'partie': partie
      }
    }
    this.navController.navigateForward(['equipes/equipe-infos/partie'], navExtras);
  }

}
