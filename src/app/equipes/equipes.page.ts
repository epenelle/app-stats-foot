import { Component, OnInit } from '@angular/core';
import { NavigationExtras } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Equipe } from 'src/app/Utility/Entites';
import { HttpService } from '../services/http.service';
import { ToastService } from '../services/toast-service.service';


@Component({
  selector: 'app-equipes',
  templateUrl: './equipes.page.html',
  styleUrls: ['./equipes.page.scss'],
})
export class EquipesPage implements OnInit {

  private equipes: Equipe[] = []
  private equipesDisplay: Equipe[] = []
  constructor(
    private navController: NavController,
    private httpService: HttpService,
    private toastService: ToastService
  ) { 
    // this.equipes = [
    //   {'idEquipe': 1, 'niveau': 'Juvénile', 'annee':  2022},
    //   {'idEquipe': 2, 'niveau': 'Cadet', 'annee':  2022},
    //   {'idEquipe': 3, 'niveau': 'Benjamin', 'annee':  2022},
    // ]
  }

  ngOnInit() {
  }

  ionViewWillEnter(){
    this.getEquipes();
  }

  initializeItems(){
    this.equipesDisplay = this.equipes;
  }

  filtrerEquipes(ev: any) {
    // Reset items back to all of the items
    this.initializeItems();

    // set val to the value of the searchbar
    const val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val == '') {

    }
    else if (val && val.trim() !== '') {
      this.equipesDisplay = this.equipes.filter((equipe) => {
          return (
            equipe.niveau.toLowerCase().indexOf(val.toLowerCase()) > -1 // niveau
            || equipe.annee.toString().toLowerCase().indexOf(val.toLowerCase()) > -1 // annee
            );
      })
    }
  }

  goToEquipeInfos(equipe: Equipe){
    let navExtras: NavigationExtras = {
      state: {
        'equipe': equipe
      }
    }
    this.navController.navigateForward(['equipes/equipe-infos'], navExtras);
  }

  getEquipes() {
    this.httpService.getEquipes().subscribe(
      (response: any) => {
        this.equipes = response;
        this.initializeItems();
      },
      (error: any) => {
        this.toastService.showToast(error);
      }
    )

  }

}
