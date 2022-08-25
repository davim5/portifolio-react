import {GithubLogo, LinkedinLogo,Compass} from 'phosphor-react'
import { HeaderContainer } from './Header.styles'

export function Header(){
    return (
        <HeaderContainer>
            <button><Compass size={64}/></button>
        </HeaderContainer>
    )
}