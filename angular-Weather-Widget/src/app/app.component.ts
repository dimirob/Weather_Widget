import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { WeatherWidgetMainComponent } from './Components/weather-widget-main/weather-widget-main.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,WeatherWidgetMainComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-Weather-Widget';
}
