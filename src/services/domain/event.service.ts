import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { API_CONFIG } from "../../config/api.config";
import { EventDTO } from "../../models/event.dto";
import { Observable } from 'rxjs';

@Injectable()
export class EventService {
    public items: any;

     constructor(public http: HttpClient) {
        
    }
    
    findAll() : Observable<EventDTO[]>  {
        return this.http.get<EventDTO[]>(`${API_CONFIG.baseUrl}/events`);
    }

    find() : Observable<EventDTO>  {
        return this.http.get<EventDTO>(`${API_CONFIG.baseUrl}/event`);
    }

    
    filterItems(searchTerm) {
        this.findAll()
        .subscribe(response =>{
        this.items = response;
        },
        error => {
        console.log(error);
        });

        if (searchTerm && searchTerm.trim() != '') {
            
            return this.items.filter((item) => {
            return item.event.toLowerCase().includes(searchTerm.toLowerCase());
            });
        }else{
            return this.items = [];
        }
    }

}