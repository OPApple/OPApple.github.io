import React, {useState} from 'react'
import axios from 'axios'
import { Clouds } from './components/Themes';
import { Clear } from './components/Themes';
import { Rain } from './components/Themes';
import droplets from './components/Themes';

function App() {

  

  let bruh;
  let dropletB;

  
  const [data, setData] = useState({});
  const [location, setLocation] = useState('')
  
  //Gets the response from api
  const searchLocation = (event) => {
    if (event.key === 'Enter'){
      axios.get(url).then((response) => {
        setData(response.data)
        bruh = true
        console.log(bruh)
        
      })
      setLocation('')
      
    }
  }
  
  
  function changeTheme (weather){
    if (weather == null){
      console.log(null)
    }else{
      
      if(weather === "Clouds"){
        dropletB = false
        droplets(dropletB)
        Clouds()
        dropletB = false
      }else if (weather === "Clear"){
        dropletB = false
        droplets(dropletB)
        Clear()
        dropletB = false
      }else if (weather === "Rain"){
        Rain()
        dropletB = true
        droplets(dropletB)
      }
      
    }
    
    
  }
  
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=e1368e70a9bea25ae8226e3fc63d7be0`
  
  
  //Get the date and adjust it using the timezone of location
  var date = new Date()
  var hours = date.getHours()
  
  const UTCOffset = (data.timezone - 10800) / 3600;
  hours = hours + UTCOffset
  
  var x = data.weather ? data.weather[0].main : null
  
  
  const rainCheck = () =>{

    if(bruh != true){
      bruh = false
      console.log("bruh")
      changeTheme(x)

    }
  }


  rainCheck()
  
  

  return (
    <div id='App' className="app">

      <div className='city'>
        <p>{data.name}</p>
      </div>

      <div className="search">
        <input
          value={location}
          onChange={event => setLocation(event.target.value)}
          onKeyPress={searchLocation}
          placeholder='Enter Location'
          type="text" />
      </div>
      <div className="container">

        <div className='temp'>
          {data.main ? <p>{Math.round(data.main.temp)}°C</p> : null}
        </div>

          <div className="description">
          </div>
            {data.weather ? <p>{data.weather[0].main}</p> : null}
        </div>

    </div>
  );
}
export default App;
