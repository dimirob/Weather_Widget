import { Component} from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-weather-widget-main',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './weather-widget-main.component.html',
  styleUrl: './weather-widget-main.component.css'
})
export class WeatherWidgetMainComponent{
  data:any
  isDay:any
  dataavail:any
  constructor(){
    this.data={
      main:{},
      isDay:true,
      dataavail:false
    }
    this.getData()
  }
  getData(){
    fetch("https://api.openweathermap.org/data/2.5/weather?lat=48.864716&lon=2.349014&appid=f517d476c94b3efe62ca749379292f33")
    .then(response=>response.json())
    .then(data=>this.setData(data))
  }
  getCity(lon:any,lat:any){
    fetch(`https://api.timezonedb.com/v2.1/get-time-zone?key=CZKAI2849KWD&format=json&by=position&lat=${lat}&lng=${lon}`)
    .then(response=>response.json())
    .then(data=>this.setCity(data))
  }
  setData(data:any){
    console.log(data)
    this.data=data
    this.data.temp_curr=(this.data.main.temp-273.15).toFixed(0)//current temp from farenheit to celcius remove decimal
    this.data.feels_like=(this.data.main.feels_like-273.15).toFixed(0)//feels like
    this.data.temp_min=(this.data.main.temp_min-273.15).toFixed(0)//min
    this.data.temp_max=(this.data.main.temp_max-273.15).toFixed(0)//max
    this.getCity(data.coord.lon,data.coord.lat)
  }
  setCity(data:any){
    this.data.cityName=data.cityName
    this.setDayNight(data.formatted,this.data.sys.sunset)
  }
  setDayNight(local:any,sunset:any){
    console.log(new Date(local))
    console.log(new Date(sunset*1000))
    this.isDay=new Date(local)<new Date(sunset*1000)
    this.dataavail=true
  }
}
