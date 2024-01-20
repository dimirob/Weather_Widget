import { Component} from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-weather-widget-main',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './weather-widget-main.component.html',
  styleUrl: './weather-widget-main.component.css'
})
export class WeatherWidgetMainComponent {
  data:any
  constructor(){
    this.data={
      main:{},
      isDay:true
    }
    this.getData()
  }
  getData(){
    fetch("https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid=f517d476c94b3efe62ca749379292f33")
    .then(response=>response.json())
    .then(data=>this.setData(data))
  }
  setData(data:any){
    console.log(data)
    this.data=data
    let sunset=new Date(this.data.sys.sunset*1000)//get sunset time from json
    this.data.sunset_time=sunset.toLocaleTimeString()//insert in to data object
    this.data.temp_curr=(this.data.main.temp-273.15).toFixed(0)//current temp from farenheit to celcius remove decimal
    this.data.feels_like=(this.data.main.feels_like-273.15).toFixed(0)//feels like
    this.data.temp_min=(this.data.main.temp_min-273.15).toFixed(0)//min
    this.data.temp_max=(this.data.main.temp_max-273.15).toFixed(0)//max
  }
  
  
}
