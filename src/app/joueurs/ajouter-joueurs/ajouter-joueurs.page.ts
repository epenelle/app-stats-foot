import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModalController, ToastController } from '@ionic/angular';
import { modalController } from '@ionic/core';
import { HttpService } from 'src/app/services/http.service';
import { ToastService } from 'src/app/services/toast-service.service';
import { Joueur } from 'src/app/Utility/Entites';

// export interface FormControlObject {
//   key: string;
//   type: string;
//   options: string;
// }

@Component({
  selector: 'app-ajouter-joueurs',
  templateUrl: './ajouter-joueurs.page.html',
  styleUrls: ['./ajouter-joueurs.page.scss'],
})
export class AjouterJoueursPage implements OnInit {

  private nouveauxJoueurs : Joueur[] = []
  joueursForm: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private toastService: ToastService,
    private Toast: ToastController,
    private httpService: HttpService,
    private modalController: ModalController
  ) { }

  ngOnInit() {
    this.joueursForm = this.formBuilder.group({
      joueurs: this.formBuilder.array([ this.createItem() ])
    });
  }

  createItem(): FormGroup {
    return this.formBuilder.group({
      prenom: ['', Validators.required],
      nom: ['', Validators.required],
      numero: ['', [Validators.required, Validators.min(0), Validators.max(99)]],
      position: ['', Validators.required],
      idJoueur: [0]
    });
  }

  ajouterJoueur() {
    (this.joueursForm.get('joueurs') as FormArray).push(this.createItem());
  }

  supprimerJoueur(index: any) {
    const control = this.getFormArray();
    control.removeAt(index);
  }

  getFormArray() {
    return <FormArray>this.joueursForm.controls['joueurs']
  }

  creerJoueurs() {
    // console.log(this.joueursForm.value.joueurs)
    this.nouveauxJoueurs = this.joueursForm.value.joueurs
    this.httpService.postJoueurs(this.nouveauxJoueurs).subscribe(
      (response: any) => {
        modalController.dismiss();
      },
      (error: any) => {
        this.toastService.showToast('Erreur lors de l\'ajout.');
      }
    )
    
  }

  infosPosition() {
    const message: string  = 
          "QB: Quart-Arriere <br />" 
      +   "RB: Porteur de ballon <br />" 
      +   "R: Receveur <br />" 
      +   "OL: Ligne offensive <br />" 
      +   "DL: Ligne defensive <br />" 
      +   "LB: Linebacker <br />" 
      +   "DB: Demi défensif" ;

      // console.log(message);
      // this.toastService.showToastMiddle(message, 2000);
      let toast = this.Toast.create({
        'header': 'POSITIONS',
        // 'cssClass': 'toaster',
        'message': message,
        'duration': 6000,
        'position': 'bottom',
        'buttons' : [{ text: 'OK', role: 'cancel' }]
      }).then((toastData) => {
        toastData.present();
      });
    
  }

}
