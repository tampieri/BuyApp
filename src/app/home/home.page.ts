import { Component } from '@angular/core';
import { ElementArrayFinder } from 'protractor';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(public navCtrl: NavController) {}

  entrar(){
      this.navCtrl.navigateBack('/events');
  }
}


