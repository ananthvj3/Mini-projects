import React, { useState ,useEffect} from 'react';
import searchimg from './images/search.png';
import sun from './images/contrast.png';
import drizzle from './images/rainy-day.png';
import rain from './images/heavy-rain.png';
import snow from './images/snowy.png';
import winds from './images/wind.png';
import cloud from './images/weather.png';
import humiditys from './images/humidity.png';
import './Weather.css';
import { WiHumidity } from "react-icons/wi";

const WeatherDetails = ({ icon ,temp,city, country, lat, log,humidity,wind}) => {
  return (
    <>
    <div className="image  h-[150px] mb-[10px]">
      <img src={icon} alt="Image"  className='w-[160px] h-[160px]'/>
    </div>
    <div className="temp mt-[5px] text-4xl font-bold ">{temp}°C</div>
    <div className="location mt-[5px] text-4xl ">{city}</div>
    <div className="country mt-[5px] text-4xl">{country}</div>
    <div className="cord flex items-center justify-center gap-[10px] text-center mt-[10px]">
        <div className='flex flex-col items-center justify-center p-[10px]'>
            <span className="lat">latitude</span>
            <span >{lat}</span>
        </div>
        <div className='flex flex-col items-center justify-center p-[10px]'>
            <span className="lag ">logtitude</span>
            <span>{log}</span>
        </div>
    </div>
    <div className="data-comntainer w-[100%] flex  justify-between  mt-[20-px]">
    <div className='element text-center'>
      <img src={humiditys} alt="humidity"  className='w-[50px] h-[50px]'/>
      <div className="data">
        <div className="percent">{humidity}</div>
        <div className="text text-[#888]">Humidity</div>
      </div>
    </div>
     <div className='element text-center'>
      <img src={winds} alt="wind"  className='w-[50px] h-[50px]'/>
      <div className="data">
        <div className="wind-percent">{wind}</div>
        <div className="text text-[#888]">Wind Speed</div>
      </div>
    </div>
    </div>
    </>
  );
};



const Whome = () => {
 let api_key="a01151aaa11180f625b272ce96faad48";
 const [text,setText]=useState("London");

  const [icon, setIcon] = useState(snow);
  const [temp,settemp]=useState(0);
  const [city,setCity]=useState("");
  const [country,setCountry]=useState("");
  const [lat,setLat]=useState(0);
  const [log,setLog]=useState(0);
  const [humidity,setHumidiy]=useState(0);
  const [wind,setWind]=useState(0);

  const [cityNotFound,setCityNotFound]=useState(false);
  const [loading,setLoading]=useState(false);
  const [error,setError]=useState(null);

  const weatherIconMap ={
    "01d":sun ,
    "01n":sun,
    "02d": cloud,
    "02n": cloud,
    "03d":drizzle,
    "03n":drizzle,
    "04d":drizzle ,
    "04n": drizzle,
    "09d":rain,
    "09n": rain,
    "10d": rain,
    "10n": rain,
    "13d":snow,
    "13n": snow,

    }


  const  search=async ()=>{
    setLoading(true);
 
  let url=`https://api.openweathermap.org/data/2.5/weather?q=${text}&appid=${api_key}&units=metric`;

  try {
    let res=await fetch(url);
    let data=await res.json();
    
    if(data.cod === "404"){
      console.log("City not found");
      setCityNotFound(true);
      setLoading(false);
      return;
    }
    setHumidiy(data.main.humidity);
    setWind(data.wind.speed);
    settemp(Math.floor(data.main.temp));
    setCity(data.name);
    setCountry(data.sys.country)
    setLat(data.coord.lat);
    setLog(data.coord.lon);
    const weatherIconCode =data.weather[0].icon;
    setIcon(weatherIconMap[weatherIconCode] || clearIcon);

    setCityNotFound(false);
    
  } catch (err) {
    console.error(err)
  }finally{
    setLoading(false);
  }
}

const handleCity =(e)=>{
  setText(e.target.value);
};

const handleKeyDown =(e)=>{
  if (e.key === "Enter"){
    search();
  }
}

useEffect (function (){
  search();
},[])

  return (
    <>
      <div className="container w-[350px] p-[20px] bg-[#fff] rounded-lg flex flex-col items-center justify-center">
        <div className="input-container flex w-[100%] items-center">
          <input
            type="text"
            className="cityInput bg-white flex-1 h-[30px] border-0 outline-0 p-[20px]"
            placeholder="Search City"
            onChange={handleCity}
            value={text}
            onKeyDown={handleKeyDown}
          />
          <div className="search-icon p-[10px] cursor-pointer"
          onClick={()=>search()}
          >
            <img src={searchimg} alt="" className="w-[20px]" />
          </div>
           
        </div>
       
        {loading && <div className="loading-mes text-[#888]">Loading...</div>}
         {error && <div className="err-mes">{error}</div>}
         {cityNotFound && <div className="city text-[#888]">City not found</div>}

          {!loading && !cityNotFound&& <WeatherDetails icon={icon}  temp={temp}  city={city} 
         country={country} lat={lat} log={log} humidity={humidity}
         wind={wind}
         />}
        <p className="copyright text-center text-[#888] text-md">
          Designed by <span className='text-[#333]'>Anand</span>
        </p>
      
      </div>
    </>
  );
};

export default Whome;
