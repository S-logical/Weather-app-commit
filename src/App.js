import React from 'react';
// import logo from './logo.svg';
import './App.css';
import City from './Component/City';
import CityWeather from './Component/CityWeather';



function App() {

  
  const [cityName , setCityName] = React.useState("");
  const [cityWeather , setCityWeather] = React.useState([]);
 const fetchCityWeather = () =>{
    // console.log("I am from fetchCityWeather ");

    if (window.location.protocol === 'http:') {
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=4deb3d5b5a9ba1475a3e91881ff30ce9`)
    .then((res) => { return res.json() })
    .then((result)=> {
      // console.log("Result is ",result);
      setCityWeather( {
          data : result
        }
        );
      }
    
    ) ;
  }
  else{
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=4deb3d5b5a9ba1475a3e91881ff30ce9`)
    .then((res) => { return res.json() })
    .then((result)=> {
      // console.log("Result is ",result);
      setCityWeather( {
          data : result
        }
        );
      }
    
    ) ;
  }
    
  }; 
  return (
    <>
        <City cityName={cityName} setCityName={setCityName} fetchCityWeather={fetchCityWeather} />
        <p>AKHILESH PATIDAR</p>
        {

          cityWeather.data != undefined ?
          
          <div>
            <CityWeather weather={cityWeather.data}/>
          </div>
          : null

        }

    </>
  );
}

export default App;
