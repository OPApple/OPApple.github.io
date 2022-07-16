import React, {useState} from 'react'
import axios from 'axios'


function App() {

  
 
  
  
  const [data, setData] = useState({});
  const [location, setLocation] = useState('')
  
  //Gets the response from api
  const searchLocation = (event) => {
    if (event.key === 'Enter'){
      axios.get(url).then((response) => {
        setData(response.data)
        
      })
      setLocation('')
      
    }
  }

  
  function changeTheme (weather){
    if (weather == null){
      console.log(null)
    }else{

      console.log(weather)
      if(weather === "Clouds"){
        document.getElementsByTagName('body')[0].style.backgroundColor = 'gray'
      }else if (weather === "Clear"){
        document.getElementsByTagName('body')[0].style.backgroundColor = 'yellow'
      }else if (weather === "Rain"){
        document.getElementsByTagName('body')[0].style.backgroundColor = 'blue'
      }

    }
    
    
  }
  
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=e1368e70a9bea25ae8226e3fc63d7be0`
  
  
  //Get the date and adjust it using the timezone of location
  var date = new Date()
  var hours = date.getHours()
  
  const UTCOffset = (data.timezone - 10800) / 3600;
  hours = hours + UTCOffset

  var x = data.weather ? data.weather[0].main : null
  
  console.log(x)
  changeTheme(x)

  return (
    <div id='App' className="app">
      <div className="search">
        <input
          value={location}
          onChange={event => setLocation(event.target.value)}
          onKeyPress={searchLocation}
          placeholder='Enter Location'
          type="text" />
      </div>
      <div className="container">


          <div className="description">
            {data.weather ? <p>{data.weather[0].main}</p> : null}
          </div>
        </div>

    </div>
  );
}
export default App;
