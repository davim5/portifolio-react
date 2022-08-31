import { format } from 'date-fns';
import {GithubLogo, LinkedinLogo } from 'phosphor-react';
import { useEffect, useState } from 'react';
import { FooterContainer } from './Footer.styles';
import api from '../services/api';

interface IWeather {
  name: string,
  temperature:number,
  sky:string,
}

export function Footer() {
    const [time,setTime] = useState(Date.now());
    const [weather,setWeather] = useState<IWeather>({
      name:'',
      temperature:0,
      sky:''
    });

    useEffect(() => {
      let timer = setInterval(() => {
         setTime(Date.now()); 
      },1000);

      return () => {clearInterval(timer)}
  },[time]);

  useEffect(() => {
    api.get('/city/?city=fortaleza').then(res => {
      let formatedWeather:IWeather = {
        name: res.data.name,
        temperature: res.data.main.temp.toFixed(1),
        sky: res.data.weather[0].description,
      };
      console.log(formatedWeather);

      setWeather(formatedWeather);
    });
    console.log(navigator.geolocation.getCurrentPosition);

  },[])
  
  const formatedTime = format(time,'pppp');

    return (
        <FooterContainer>
          <div className='status'>
            <span>{formatedTime}</span>
            <span> {weather.name} • {weather.temperature}°C • {weather.sky}</span>
          </div>
          <div className='social'>
            <a href='https://github.com/davim5'><GithubLogo size={32} /></a>
            <a href='https://www.linkedin.com/in/davilima5/'><LinkedinLogo size={32} /></a>
          </div>
          <span>© Davi Lima 2022. Website built using React <a href="https://github.com/davim5/portifolio-react">(source code)</a></span>
        </FooterContainer>
    )
}