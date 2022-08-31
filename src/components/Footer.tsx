import { format } from 'date-fns';
import {GithubLogo, LinkedinLogo } from 'phosphor-react';
import { useEffect, useState } from 'react';
import { FooterContainer } from './Footer.styles';

export function Footer() {
    const [time,setTime] = useState(Date.now());

    useEffect(() => {
      let timer = setInterval(() => {
         setTime(Date.now()); 
      },1000);

      return () => {clearInterval(timer)}
  },[time]);

  const formatedTime = format(time,'pppp');

    return (
        <FooterContainer>
          <div className='status'>
            <span>{formatedTime}</span>
            <span>19°C • Rain • 1.54 km/h</span>
          </div>
          <div className='social'>
            <a href='https://github.com/davim5'><GithubLogo size={32} /></a>
            <a href='https://www.linkedin.com/in/davilima5/'><LinkedinLogo size={32} /></a>
          </div>
          <span>© Davi Lima 2022. Website built using React <a href="https://github.com/davim5/portifolio-react">(source code)</a></span>
        </FooterContainer>
    )
}