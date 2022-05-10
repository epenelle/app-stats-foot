import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModalController, NavParams } from '@ionic/angular';
import { HttpService } from 'src/app/services/http.service';
import { ToastService } from 'src/app/services/toast-service.service';
import { Equipe, Partie } from 'src/app/Utility/Entites';

@Component({
  selector: 'app-ajouter-partie',
  templateUrl: './ajouter-partie.page.html',
  styleUrls: ['./ajouter-partie.page.scss'],
})
export class AjouterPartiePage implements OnInit {

  private equipe: Equipe;
  private partieForm: FormGroup;
  constructor(
    private modalController: ModalController,
    private navParams: NavParams,
    private formBuilder: FormBuilder,
    private httpService: HttpService,
    private toastService: ToastService
  ) {
    this.equipe = this.navParams.get('equipe');
    console.log(this.equipe)
   }

  ngOnInit() {
    this.partieForm = this.createPartieForm();
  }

  createPartieForm(): FormGroup {
    return this.formBuilder.group({
      idEquipe: [this.equipe.idEquipe, Validators.required],
      adversaire: ['', Validators.required],
      date: ['', Validators.required]
    })
  }

  ajouterPartie() {
    const nouvellePartie: Partie = this.partieForm.value;
    console.log(nouvellePartie);
    this.httpService.postPartie(nouvellePartie).subscribe(
      (response: any) => {
        this.modalController.dismiss();
      },
      (error: any) => {
        this.toastService.showToast(error);
      }
    );
  }



}
