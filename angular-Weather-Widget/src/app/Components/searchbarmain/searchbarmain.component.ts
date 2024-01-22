import { SearchAndWeatherService } from '../../search-and-weather.service';
import { WeatherWidgetMainComponent } from './../weather-widget-main/weather-widget-main.component';

import { Component, inject } from '@angular/core';

@Component({
  selector: 'app-searchbarmain',
  standalone: true,
  imports: [WeatherWidgetMainComponent],
  templateUrl: './searchbarmain.component.html',
  styleUrl: './searchbarmain.component.css'
})
export class SearchbarmainComponent {
  private dataService=inject(SearchAndWeatherService)
  saveProfile(){
    let newProfile={
      cityName:''
    }
    let city:any=document.getElementById("searchTerm")
    newProfile.cityName=city.value
    this.dataService.change(newProfile)
  }
}
