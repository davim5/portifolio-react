import {GithubLogo, LinkedinLogo } from 'phosphor-react';
import { FooterContainer } from './Footer.styles';

export function Footer() {
    return (
        <FooterContainer>
          <div className='status'>
            <span>22:12:14</span>
            <span>19°C • Rain • 1.54 km/h</span>
          </div>
          <div className='social'>
            <button><GithubLogo size={32} /></button>
            <button><LinkedinLogo size={32} /></button>
          </div>
          <span>© Davi Lima 2022. Website built using React (source code)</span>
        </FooterContainer>
    )
}