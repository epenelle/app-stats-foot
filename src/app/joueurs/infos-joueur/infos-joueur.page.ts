import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { AlertController, ModalController, NavParams } from '@ionic/angular';
import { modalController } from '@ionic/core';
import { HttpService } from 'src/app/services/http.service';
import { Joueur } from 'src/app/Utility/Entites';

@Component({
  selector: 'app-infos-joueur',
  templateUrl: './infos-joueur.page.html',
  styleUrls: ['./infos-joueur.page.scss'],
})
export class InfosJoueurPage implements OnInit {

  private joueur: Joueur;
  private joueurForm: FormGroup;
  constructor(
    private navParams: NavParams,
    private formBuilder: FormBuilder,
    private alertController: AlertController,
    private httpService: HttpService,
    private modalController: ModalController
  ) { 
    this.joueur = this.navParams.get('joueur');
  }

  ngOnInit() {
    this.joueurForm = this.createItem();
  }

  createItem(): FormGroup {
    return this.formBuilder.group({
      prenom: [this.joueur.prenom, Validators.required],
      nom: [this.joueur.nom, Validators.required],
      numero: [this.joueur.numero, [Validators.required, Validators.min(0), Validators.max(99)]],
      position: [this.joueur.position, Validators.required],
      idJoueur: [this.joueur.idJoueur]
    });
  }

  supprimerJoueur() {
    this.httpService.deleteJoueur(this.joueur).subscribe(
      (response: any) => {
        console.log(response);
      },
      (error: any) => {
        console.log(error);
      }
    )
  }

  async confirmerSuppressionJoueur() {
    const alert = await this.alertController.create({
      // cssClass: 'my-custom-class',
      header: 'Supprimer le joueur',
      message: 'Cette action est irréversible et supprimera toutes les données associées au joueur, incluant ses statistiques.',
      buttons: [
        {
          text: 'Annuler',
          role: 'cancel',
          // cssClass: 'secondary',
          id: 'cancel-button',
          handler: () => {
            
          }
        }, {
          text: 'Supprimer',
          id: 'supprimer-button',
          handler: () => {
            this.supprimerJoueur();
            modalController.dismiss();
          }
        }
      ]
    });
    await alert.present();
  }

  modifierJoueur() {
    // console.log(this.joueurForm.value);
    this.httpService.modifierJoueur(this.joueurForm.value).subscribe(
      (response: any) => {
        modalController.dismiss();
      },
      (error: any) => {
        console.log(error);
      }
    )
  }

}
