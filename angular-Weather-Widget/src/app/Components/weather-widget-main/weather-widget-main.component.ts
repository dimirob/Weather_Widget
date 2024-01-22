import { Component, inject} from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchAndWeatherService } from '../../search-and-weather.service';
@Component({
  selector: 'app-weather-widget-main',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './weather-widget-main.component.html',
  styleUrl: './weather-widget-main.component.css'
})
export class WeatherWidgetMainComponent{
  private dataService=inject(SearchAndWeatherService)
  cityName:any
  data:any
  isDay:any
  dataavail:any
  datainit:any
  lon=2.349014
  lat=48.864716
  constructor(){
    this.data={
      main:{},
      isDay:true,
      dataavail:false,
      datainit:false
    }
    this.dataService.curr.subscribe(profile=>{
      this.cityName=profile.cityName
      this.getCity(profile.cityName)
    })
  }

  getCity(name:string){//gets lan and long from city to set weather and time
    this.dataavail=false
    fetch('https://api.api-ninjas.com/v1/city?name=' + name,{headers:{
      'X-Api-Key': 'dpbob0ULebLGlbnqPMjiLg==eDOWgFgg6umSCiqR'
    }})
    .then(response=>response.json())
    .then(data=>{
      this.lat=data[0].latitude
      this.lon=data[0].longitude
      this.getData()
    })
    .catch(error=>{
      alert('Could not find city, please enter a valid city')
    })
  }
  getData(){
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${this.lat}&lon=${this.lon}&appid=f517d476c94b3efe62ca749379292f33`)
    .then(response=>response.json())
    .then(data=>this.setData(data))
    .catch(error=>{
      alert('Error while fetching weather data')
    })
  }
  setData(data:any){//setting weather data
    this.data=data
    this.data.temp_curr=(this.data.main.temp-273.15).toFixed(0)//current temp from farenheit to celcius remove decimal
    this.data.feels_like=(this.data.main.feels_like-273.15).toFixed(0)//feels like
    this.data.temp_min=(this.data.main.temp_min-273.15).toFixed(0)//min
    this.data.temp_max=(this.data.main.temp_max-273.15).toFixed(0)//max
    this.getCityTime(data.coord.lon,data.coord.lat)
  }
  getCityTime(lon:any,lat:any){//getting city time
    fetch(`https://api.timezonedb.com/v2.1/get-time-zone?key=CZKAI2849KWD&format=json&by=position&lat=${lat}&lng=${lon}`)
    .then(response=>response.json())
    .then(data=>this.setCityTime(data))
    .catch(error=>{
      alert('Error while fetching city data')
    })
  }
  setCityTime(data:any){//set the city via the given api
    this.data.cityName=data.cityName
    this.setDayNight(data.formatted,this.data.sys.sunset)
  }
  setDayNight(local:any,sunset:any){//calculate and set the isDay boolean
    console.log(this.data)
    this.isDay=new Date(local)<new Date(sunset*1000)
    this.dataavail=true
    this.datainit=true;
  }
}
