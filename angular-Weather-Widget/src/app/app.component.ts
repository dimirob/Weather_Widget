
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { WeatherWidgetMainComponent } from './Components/weather-widget-main/weather-widget-main.component';
import { SearchbarmainComponent } from './Components/searchbarmain/searchbarmain.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,WeatherWidgetMainComponent,SearchbarmainComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-Weather-Widget';
}
