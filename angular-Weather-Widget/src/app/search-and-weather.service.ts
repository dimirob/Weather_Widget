import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchAndWeatherService {
  private profileSource=new BehaviorSubject<any>(null)
  curr=this.profileSource.asObservable()
  change(SearchAndWeatherService:any){
    this.profileSource.next(SearchAndWeatherService)
  }
  constructor() { }
}
