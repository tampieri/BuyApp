import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { EventService } from '../../services/domain/event.service';
import { EventDTO } from './../../models/Event.dto';
import { API_CONFIG } from '../../config/api.config';

@Component({
  selector: 'app-events',
  templateUrl: './events.page.html',
  styleUrls: ['./events.page.scss'],
})
export class EventsPage {

  searchTerm : any="";
  items: EventDTO[];

  constructor(
    public navCtrl: NavController, 
    public eventService: EventService,

  ){

  }


  ionViewDidLoad(){
    this.setFilteredItems();
  }

  setFilteredItems() {
    this.items = this.eventService.filterItems(this.searchTerm);
  }

}
